import { useState } from "react"
import { NuevoPresupuesto } from "./components/NuevoPresupuesto"
import { Gastos } from "./components/Gastos"
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg'
import { Modal } from "./components/Modal"

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [modal, setModal] = useState(false)

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
        <div className="">
          <img 
            src={IconoNuevoGasto}
            alt="" 
            className=""
            onClick = {handleNuevoGasto} />
        </div>
      }

      {modal && <Modal setModal ={setModal}/>}

    </>
  )
}

export default App
