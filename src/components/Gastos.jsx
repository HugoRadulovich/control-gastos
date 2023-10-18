
import { FiltrosGastos } from './FiltrosGastos'
import { ListadoGastos } from './ListadoGastos'

export const Gastos = ({presupuesto,setPresupuesto}) => {
  return (
    <>
      <div className="bg-slate-300 h-96 w-1/2">
          <h1 className="">Monto Disponible</h1>
          <button className="border-2 border-black rounded p-2">Resetear App</button>
          <p className=""><span className="font-bold">Presupuesto:</span> {presupuesto}</p>
          <p className=""><span className="font-bold">Disponible: </span> 122</p>
          <p className=""><span className="font-bold">Gastado: </span> 500</p>
      </div>
      <FiltrosGastos/>
      <ListadoGastos/>

    


    </>
  )
}
