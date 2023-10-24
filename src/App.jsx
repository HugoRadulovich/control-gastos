import { useEffect, useState } from "react"
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
  const [gastado, setGastado] = useState(0);
  const [prespuestoNew, setPrespuestoNew] = useState(0);
  const [gastoEditar, setGastoEditar] = useState({})


  const abrirModal = () => {
    console.log('abrir modal');
    console.log(gastoEditar);
    setModal(true)
  }





 useEffect(() => {

  console.log('me estoy ejecutando')
  if (presupuesto !== 0 && gastos.length > 0) {
    console.log('hay que calcular el gasto')
    const montoGastos = gastos.map(gastos => (
      parseInt(gastos.monto)
    ))
    const initialValue = 0
    const sumarGastos = montoGastos.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
    console.log(sumarGastos)
    setGastado(sumarGastos) 
    const newPresupuesto = presupuesto - sumarGastos; 
    setPrespuestoNew(newPresupuesto);
    console.log(newPresupuesto)
  }else{
    console.log('no hay que calcular el gasto')
    return;
  }
 
   
 }, [gastos])


 useEffect(() => {
  abrirModal();
 }, [gastoEditar])
 
 
  // const newPresupuesto = calcularPresupuesto();

  return (
    <>
      <header className="flex justify-center">
        <h1 className="">PLANIFICADOR DE GASTOS</h1>
      </header>
      <main className="flex flex-col justify-center items-center">
          {
            (presupuesto === 0) 
              ? <NuevoPresupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} /> 
              : <Gastos presupuesto={presupuesto} setPresupuesto={setPresupuesto} prespuestoNew = {prespuestoNew} gastado={gastado} /> 

          }
      </main>
      {
        (presupuesto !== 0) && 
          <main className="flex flex-col">
            <FiltrosGastos/>
              <div className="flex justify-center items-center w-screen border-2 h-fit">
                <ListadoGastos gastos = {gastos}  setGastoEditar = {setGastoEditar}  setGastos={setGastos}/>
              </div>
            <div className="">
            <img 
              src={IconoNuevoGasto}
              alt="" 
              className="w-32 h-32"
              onClick = {abrirModal} />
          </div>
        </main>
      
      }

      {modal && <Modal setModal ={setModal} gastos={gastos} setGastos = {setGastos} gastoEditar= {gastoEditar}/>}
        

    </>
  )
}

export default App
