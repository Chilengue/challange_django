
// eslint-disable-next-line react/prop-types
function Tabela({ vetor, selecionar }) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>price</th>

                </tr>
            </thead>

            <tbody>
                {
                    // eslint-disable-next-line react/prop-types
                    vetor.map((obj, indice) => (
                        <tr key={{indice}}>
                            <td>{indice+1}</td>
                            <td>{obj.name}</td>
                            <td>{obj.price}</td>
                            <td><button onClick={()=>{selecionar(indice)}} className='btn btn-success'>selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default Tabela;