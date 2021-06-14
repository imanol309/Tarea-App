import React, {useState} from "react";
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

const datos = [
  {
    id: 1,
    title: "Buscar libro",
    description: "Esta es la description",
    completed: false,
  },
  {
    id: 2,
    title: "Buscar cuaderno",
    description: "Esta es la description del numero 2",
    completed: true,
  },
  {
    id: 3,
    title: "Cafe",
    description: "Me gustan el cafe negro",
    completed: true,
  },
];

function App() {
  
  const [datosActual, datosActualizando] = useState(datos)
  const [editar, setEditar] = useState(null)

  const eliminar = (ID) =>{
      const eliminarDatos = datosActual.filter(datosActual => datosActual.id !== ID)
      datosActualizando(eliminarDatos)
  }

  const terminado = (ID) =>{
    const terminar = datosActual.map(datosActual =>(
        datosActual.id === ID
        ? {...datosActual, completed: !datosActual.completed}
        :datosActual
      ))
    datosActualizando(terminar);
  }; 

  const Agregar = (todo) =>{

    const newDatos = {
      id: Date.now(),
      ...todo,
      completed: false
    }

    const agregarValor = [
        newDatos,
        ...datos
    ]

    datosActualizando(agregarValor)
  }
  return (
    <>
        <div className="container mt-4">
            <div className="row">
                <div className="col-8">
                   <TodoList 
                   datosActual={datosActual}
                   eliminar={eliminar}
                   terminado={terminado}
                   setEditar={setEditar}
                   />
                </div>
                <div className="col-4">
                    <TodoForm
                    Agregar={Agregar}
                    editar={editar}
                    />
                </div>
            </div>  
        </div>
    </>
  );
}

export default App;
