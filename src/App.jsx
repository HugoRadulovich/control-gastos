import { useState } from "react"
import { NuevoPresupuesto } from "./components/NuevoPresupuesto"
import { Gastos } from "./components/Gastos"
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg'
import { Modal } from "./components/Modal"
import { FiltrosGastos } from "./components/FiltrosGastos"
import { ListadoGastos } from "./components/ListadoGastos"

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [modal, setModal] = useState(false);
  const [gastos, setGastos] = useState([])

  console.log(gastos)

  const handleNuevoGasto = () => {
    console.log('abrir modal');
    setModal(true)
  }

  return (
    <>
      <header className="flex justify-center">
        <h1 className="">PLANIFICADOR DE GASTOS</h1>
      </header>
      <main className="flex flex-col justify-center items-center">
          {
            (presupuesto === 0) 
              ? <NuevoPresupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} /> 
              : <Gastos presupuesto={presupuesto} setPresupuesto={setPresupuesto}/> 

          }
      </main>
      {
        (presupuesto !== 0) && 
        <main className="">
          <FiltrosGastos/>
          <ListadoGastos gastos = {gastos} />
          <div className="">
          <img 
            src={IconoNuevoGasto}
            alt="" 
            className="w-32 h-32"
            onClick = {handleNuevoGasto} />
        </div>
        </main>
       
      }

      {modal && <Modal setModal ={setModal} gastos={gastos} setGastos = {setGastos}/>}
        

    </>
  )
}

export default App
