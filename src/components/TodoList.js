import React from "react";
import Todo from "./Todo";

function TodoList({datosActual, eliminar, terminado}) {
  return (  
    <div>
      <h1 className="text-right">Soy TodoList</h1>
        {
          datosActual.map((dato) => (
              <Todo 
                todo={dato}
                eliminar={eliminar} 
                terminado={terminado}
              />
            )
          )
        }
    </div>
  );
}

export default TodoList;
