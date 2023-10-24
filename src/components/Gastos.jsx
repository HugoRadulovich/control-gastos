

export const Gastos = ({presupuesto,setPresupuesto, prespuestoNew, gastado}) => {
  return (
    <>
      <div className="bg-slate-300 h-96 w-1/2">
          <h1 className="">Monto Disponible</h1>
          <button className="border-2 border-black rounded p-2">Resetear App</button>
          <p className=""><span className="font-bold">Presupuesto:</span> {presupuesto}</p>
          <p className=""><span className="font-bold">Disponible: </span> {prespuestoNew}</p>
          <p className=""><span className="font-bold">Gastado: </span> {gastado}</p>
      </div>
  

    


    </>
  )
}
