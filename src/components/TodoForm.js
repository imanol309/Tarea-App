import React from 'react'

function TodoForm(){
    return(
        <div className="">
            <h1>Nuevas Tareas</h1>
            <form className="">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Titulo"
                    />
                    <textarea 
                        placeholder="Descripcion" 
                        cols="20" 
                        rows="5" 
                        className="form-control mt-2">
                    </textarea>
                    <button 
                    className="btn btn-primary btn-block mt-2"
                    >Agregar Tarea
                    </button>
            </form> 
        </div>
    )
}

export default TodoForm; 