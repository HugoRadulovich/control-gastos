import { useEffect, useState } from "react"
import { NuevoPresupuesto } from "./components/NuevoPresupuesto"
import { Gastos } from "./components/Gastos"
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg'
import { Modal } from "./components/Modal"
import { FiltrosGastos } from "./components/FiltrosGastos"
import { ListadoGastos } from "./components/ListadoGastos"

function App() {

  const [presupuesto, setPresupuesto] = useState(parseInt(localStorage.getItem('presupuesto')) ?? 0);
  const [modal, setModal] = useState(false);
  const [gastos, setGastos] = useState( localStorage.getItem('gastos') ?  JSON.parse(localStorage.getItem('gastos')) : []);
  const [gastado, setGastado] = useState(0);
  const [prespuestoNew, setPrespuestoNew] = useState(0);
  const [gastoEditar, setGastoEditar] = useState([])
  const [filtersCategorie, setFiltersCategorie] = useState('all')
  const [gastosFiltrados, setGastosFiltrados] = useState([]);


  const abrirModal = () => {
    setModal(true)
}


useEffect(() => {
  localStorage.setItem('presupuesto',presupuesto ?? 0)
}, [presupuesto])

useEffect(() => {
  localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
}, [gastos])



useEffect(() => {
  if (presupuesto !== 0 && gastos.length > 0) {
      const montoGastos = gastos.map(gastos => (
        parseInt(gastos.monto)
      ))
      const initialValue = 0
      const sumarGastos = montoGastos.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
  
      setGastado(sumarGastos) 
      const newPresupuesto = presupuesto - sumarGastos; 
      setPrespuestoNew(newPresupuesto);
  }else{
    return;
  }
}, [gastos])


useEffect(() => {
  const gastosFilt = gastos?.filter(gasto => gasto.categoria === filtersCategorie);
  setGastosFiltrados( gastosFilt )
}, [filtersCategorie])


useEffect(() => {
  if (Object.keys(gastoEditar).length > 0) {
    abrirModal();
  }else{
    return
  }
  
}, [gastoEditar]);


  return (
    <>
     <div className=" bg-sky-400 rounded-xl p-4">
     <header className="flex justify-center">
        <h1 className="text-4xl font-semibold  m-2 text-center text-cyan-800  font-mono ">PLANIFICADOR DE GASTOS</h1>
      </header>
      <main className="flex flex-col justify-center items-center">
          {
            (presupuesto === 0) 
              ? <NuevoPresupuesto 
                  presupuesto={presupuesto} 
                  setPresupuesto={setPresupuesto} 
                /> 
              : <Gastos 
                  setGastos = {setGastos}
                  presupuesto={presupuesto} 
                  setPresupuesto={setPresupuesto} 
                  prespuestoNew = {prespuestoNew} 
                  gastado={gastado} 
                /> 

          }
      </main>
     </div>
      {
        (presupuesto !== 0) && 
          <main className="flex flex-col">
            <div className="flex justify-center items-center w-screen  h-fit">
              <FiltrosGastos 
                filtersCategorie={filtersCategorie} 
                setFiltersCategorie={setFiltersCategorie}
              />
            </div>
              <div className="flex justify-center items-center w-screen  h-fit">
                <ListadoGastos 
                    gastos = {gastos}  
                    setGastoEditar = {setGastoEditar}  
                    setGastos={setGastos} 
                    gastosFiltrados={gastosFiltrados}
                    filtersCategorie={filtersCategorie}
                  
                />
              </div>
            <div className=" flex justify-end mr-3">
              <img 
                src={IconoNuevoGasto}
                alt="" 
                className="w-28 h-32  "
                onClick = {abrirModal} />
          </div>
        </main>
      
      }

      {modal && <Modal 
                  setModal ={setModal} 
                  gastos={gastos} 
                  setGastos={setGastos} 
                  gastoEditar={gastoEditar} 
                  setGastoEditar={setGastoEditar}
                />
      }
        

    </>
  )
}

export default App
