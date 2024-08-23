
// eslint-disable-next-line react/prop-types
function Formulario({ botao, eventoTeclado,cadastrar, obj, canselar,remover,alterar}) {
    return (
        <form>
            <input type='text' value={obj.name} onChange={eventoTeclado} name='nome' placeholder='Nome' className='form-control' />
            <input type='text' value={obj.price} onChange={eventoTeclado} name='marca' placeholder='Marca' className='form-control' />

            {
                botao
                    ?

                    <input type='button' value='Cadastrar'onClick={cadastrar} className='btn btn-primary' />
                    :
                    <div>
                        <input type='button' value='alterar' onClick={alterar} className='btn btn-warning' />
                        <input type='button' value='Remover' onClick={remover} className='btn btn-danger' />
                        <input type='button' value='Cancelar' 
                         onClick={canselar} className='btn btn-secondary' />
                    </div>
            }

        </form>
    );
}

export default Formulario;