import React, {useState, useEffect} from 'react'

const ValorIniciarDelForm = {
    title: "",
    description:""
}

function TodoForm({Agregar, setEditar}){

    const [formValor, formNuevoValor] =  useState(ValorIniciarDelForm)
    const {title, description} = formValor
    const [error, setError] = useState(null)
    const [exito, setExito] = useState(null)

    useEffect(() =>{

        if(setEditar){
            formNuevoValor(setEditar)
        }

    }, [setEditar])

    function activarDatos(e){
        const onchangeValor = {
            ...formValor,
            [e.target.name]: e.target.value
        }
        formNuevoValor(onchangeValor)
    }

    function enviarDatos(e){
        e.preventDefault()
        if (title.trim() === "") {
            setError('El Titulo esta vacio')
            setExito(null)
            return;
        } else if (description.trim() === "") {
            setError('la Description esta vacio')
            setExito(null)
            return; 
        } else{
            Agregar(formValor)
            formNuevoValor(ValorIniciarDelForm)
            
            setError(null)
            setExito('Los Datos fueron guardo exitosamente')

            setTimeout(() =>{
                setExito(null)
            },2000);
        }

    }


    return(
        <div className="">
            <h1>Nuevas Tareas</h1>
            <form className="" onSubmit={enviarDatos}>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Titulo"
                        value={title}
                        name= "title"
                        onChange={activarDatos}
                    />
                    <textarea 
                        placeholder="Descripcion" 
                        cols="20" 
                        rows="5" 
                        value={description}
                        name="description"
                        onChange={activarDatos}
                        className="form-control mt-2">
                    </textarea>
                    <button 
                    className="btn btn-primary btn-block mt-2"
                    >Agregar Tarea
                    </button>
            </form> 

            {
                error
                ?(
                    <div className="alert alert-danger mt-2">
                        {
                        error
                        }
                    </div>
                ) : (
                    null
                )
            }

            {
                exito
                ?(
                    <div className="alert alert-success mt-2">
                        {
                        exito
                        }
                    </div>
                ) : (
                    null
                )
            }

        </div>
    )
}

export default TodoForm; 