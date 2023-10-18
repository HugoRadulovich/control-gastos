import { useState } from "react";



export const NuevoPresupuesto = ({presupuesto,setPresupuesto}) => {

const [monto, setMonto] = useState(0)
    

    const handleInputChange = (e) => {
        setMonto(e.target.value)
        console.log(monto)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setPresupuesto(monto)
    
    }


    return (
        <>
            <div className=" bg-slate-300 w-1/3 h-80 flex flex-col justify-center items-center rounded-xl">
            <h1 className="text-2xl font-bold mb-2">Definir Presupuesto</h1>
            <form action="" className="flex flex-col" onSubmit={handleSubmit}>
                <input 
                    type="number" 
                    className="border-2 border-black w-96 rounded text-center"
                    value={monto}
                    onChange= {handleInputChange}
                    
                    />
                <button className="border-2 border-black rounded bg-blue-300 mt-2">
                    Agregar 
                </button>
            </form>
            </div>
        </>
    )
}
