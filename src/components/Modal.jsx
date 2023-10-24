

import  { useEffect, useState } from 'react'
import { generarId } from '../helpers/generarId';

export const Modal = ({setModal,gastos,setGastos,gastoEditar}) => {

    const [formState, setFormState] = useState({
        nombre: '',
        monto: 0,
    })

    const {nombre,monto} = gastoEditar;
    console.log(nombre,monto)

useEffect(() => {
   
    if (Object.keys(gastoEditar).length > 0) {
        setModal(true)
        setFormState({
            nombre: nombre,
            monto: monto,
        })

        console.log('estoy cambiando')
        
    }

  
}, [gastoEditar])


    const handleInputChange = ({target}) => {
            const {name,value} = target;
            setFormState({
                ...formState,
                [name]: value
            })
       console.log(formState)

    }
    

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(formState)
        const {nombre,monto,select} = formState;
        if([nombre,monto,select].includes('')){
            console.log('error')
            return
        }
        formState.id = generarId();
        setGastos([...gastos, formState])
    }


    return (
        <>
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            {/* <!--
                Background backdrop, show/hide based on modal state.

                Entering: "ease-out duration-300"
                From: "opacity-0"
                To: "opacity-100"
                Leaving: "ease-in duration-200"
                From: "opacity-100"
                To: "opacity-0"
            --> */}
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                {/* <!--
                    Modal panel, show/hide based on modal state.

                    Entering: "ease-out duration-300"
                    From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    To: "opacity-100 translate-y-0 sm:scale-100"
                    Leaving: "ease-in duration-200"
                    From: "opacity-100 translate-y-0 sm:scale-100"
                    To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                --> */}
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Agregar Gasto</h3>
                        <div className="mt-2 flex flex-col">
                            <form action="" className="mt-2 flex flex-col" onSubmit={onFormSubmit}>
                                    <label htmlFor="" className="">Nombre de gasto: </label>
                                    <input 
                                        type="text" 
                                        className="border-2 border-black rounded"
                                        name="nombre"
                                        placeholder='Hamburgersa, pago de boleta...'
                                        value={formState.nombre}
                                        onChange={handleInputChange}
                                        
                                    />
                                    <label htmlFor="" className="mt-2">Cantidad: </label>
                                    <input 
                                        type="number" 
                                        className="border-2 border-black rounded" 
                                        placeholder='1000,500,100...'
                                        name='monto'
                                        value={formState.monto}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="" className="mt-2">Categoria: </label>
                                    <select name="select" id="" className="border-2 border-black rounded" onChange={handleInputChange}>
                                        <option value="comida" className=""  > --Seleccione--</option>
                                        <option value="comida" className="">Comida</option>
                                        <option value="casa" className="">Casa</option>
                                        <option value="varios" className="">Gastos Varios</option>
                                        <option value="ocio" className="">Ocio</option>
                                        <option value="salud" className="">Salud</option>
                                        <option value="suscripciones" className="">Suscripciones</option>
                                    </select>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button type="button" className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto" onClick = { () => setModal(false)}>Guardar</button>
                                    <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto " onClick = { () => setModal(false)}>Cancelar</button>
                                    </div>
                                    <input type="submit" className=""  value= 'gola'/>
                            </form>
                            {/* <p className="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p> */}
                        </div>
                        </div>
                    </div>
                    </div>
                   
                </div>
                </div>
            </div>
            </div>

        </>
    )
}
