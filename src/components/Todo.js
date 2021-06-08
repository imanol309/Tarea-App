import React from 'react';
 
function Todo({todo, eliminar, terminado}){

    return(
        <div className="card mt-3">
                <div className="card-body">
                    <h3 className="card-title text-right">
                        {todo.title}
                        <button 
                        className={`btn btn-sm ${todo.completed ? `btn-outline-success` : `btn-success`} m-2`}
                        onClick={ () =>terminado(todo.id)}>
                            
                            {todo.completed ? 'Terminado' : 'Terminar'}

                        </button>
                    </h3>
                    <p className="card-text text-right">{todo.description}</p>
                    <hr/>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-sm btn-outline-primary mr-2">
                            Editar
                        </button>
                        <button className="btn btn-sm btn-outline-danger"
                        onClick={() =>eliminar(todo.id)}>
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Todo;