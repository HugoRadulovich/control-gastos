
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



export const Gastos = ({setGastos,presupuesto, prespuestoNew, gastado,setPresupuesto}) => {

 const percentage =  (gastado / presupuesto) * 100


 const resetApp = () => {
  setPresupuesto(0)
  setGastos([])
 }

  const formatearCantidad = (cantidad) => {
   return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  }

  return (
    <>
     
      <div className="bg-slate-200 h-96 w-1/2 flex justify-around items-center rounded-xl shadow-xl">
        <div className="flex justify-center items-center">
          <CircularProgressbar 
            value={percentage} 
            text={`${percentage}%`}  
            className='w-40'
            styles={buildStyles({
             
              // Colors
              pathColor:'#3e98c7',
              textColor: '#3e98c7',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
             
            })}/>
       
        </div>
        <div className=" flex flex-col gap-2  justify-center items-center">
          <button className="inline-flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto" onClick={resetApp}>Resetear App</button>
          <p className="text-xl"><span className="font-bold text-xl">Presupuesto:</span> {formatearCantidad(presupuesto)}</p>
          <p className="text-xl"><span className="font-bold text-xl">Disponible: </span> {formatearCantidad(prespuestoNew)}</p>
          <p className="text-xl"><span className="font-bold text-xl">Gastado: </span> {formatearCantidad(gastado)}</p>
        </div>
      </div>
  

    


    </>
  )
}
