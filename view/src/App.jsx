import Formulario from "./components/Formulario";
import Tabela from "./components/table/Tabela";
import { useEffect, useState } from "react";
import './App.css'

function App() {
  const  product={
    id:0,
    name:'',
    price:'',
  }
//useState
const [btnCaastrar, setBtnCadastrar] = useState(true);
const [products, setproducts] = useState([]);

const [objproduct, setObjproduct] = useState(product);

//useEffect requisicao com back-and
// useEffect(() => {
useEffect(() => {
  fetch('http://localhost:8000/products')
    .then(returno => returno.json())
    .then(returno_convertido => setproducts(returno_convertido));
}, [])

//obtendo dados do formulario

const aoDigitar = (e) => {
  // console.log(e.target);
  setObjproduct({ ...objproduct, [e.target.name]: e.target.value })
}

//cadastrar product
const cadastrar = () => {
  fetch('http://localhost:8000/', {
    method: 'post',
    body: JSON.stringify(objproduct),
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'

    }
  })
    .then(retorno => retorno.json())
    .then(returno_convertido => {
      console.log(returno_convertido);

      if (returno_convertido.mensagem !== undefined) {
        alert(returno_convertido.mensagem);
      } else {
        setproducts([...product, returno_convertido]);
        setproducts([...products, returno_convertido]);
        alert('product cadastrado com sucesso')
        limpar();
      }
    })
}


//alterat product
const alterar = () => {
  fetch('http://localhost:8000/alterar', {
    method: 'put',
    body: JSON.stringify(objproduct),
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'

    }
  })
    .then(retorno => retorno.json())
    .then(returno_convertido => {
      console.log(returno_convertido);

      if (returno_convertido.mensagem !== undefined) {
        alert(returno_convertido.mensagem);
      } else {
        alert('produto alterado com sucesso')
        //copia de vetor de produtos
        let vetorTemp = [...product];

        //indice

        let indice = vetorTemp.findIndex((p) => {
          return p.codigo === objproduct.codigo;
        });

        //ralterar product do vetor temp
        vetorTemp[indice]=objproduct;

        // atualizar vetor de product
        setproducts(vetorTemp);

        //limpar formulario
        limpar();
      }
    })
}


//remover product
const remover = () => {
  fetch('http://localhost:8000/delete', objproduct.codigo, {
    method: 'delte',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'

    }
  })
    .then(retorno => retorno.json())
    .then(returno_convertido => {
      console.log(returno_convertido);

      //mensagem
      alert(returno_convertido.mensagem);

      //copia de vetor de products
      let vetorTemp = [...product];

      //indice

      let indice = vetorTemp.findIndex((p) => {
        return p.codigo === objproduct.codigo;
      });

      //remove product do vetor temp
      vetorTemp.splice(indice, 1);

      // atualizar vetor de product
      setproducts(vetorTemp);

      //limpar formulario
      limpar();
    })
}
//limpar formulario
const limpar = () => {
  setObjproduct(product);
  setBtnCadastrar(true);
}

//selecinar product
const selecionarproduct = (indice) => {
  setObjproduct(products[indice]);
  setBtnCadastrar(false)
}

return (
  <div >
    <p>{JSON.stringify(objproduct)}</p>
    {/* <p>{JSON.stringify(products)}</p> */}
    <Formulario botao={btnCaastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objproduct} canselar={limpar} remover={remover} alterar={alterar} />
    <Tabela vetor={products} selecionar={selecionarproduct} />
  </div>
);
}

export default App
