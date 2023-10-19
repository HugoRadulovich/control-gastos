


export const ListadoGastos = ({gastos}) => {
    return (
        <>
            <ul className="bg-white  h-96">
                {
                    gastos?.map(gasto => (
                        <li className="" key={gasto.id}>
                            <p className="text-md font-semibold text-neutral-700">{gasto.select}</p>
                            <div className="flex  justify-between ">
                            <p className="text-xl font-bold text-black">{gasto.nombre}</p>
                            <p className="">${gasto.monto}</p>
                            </div>
                            <img src={`src/assets/img/icono_${gasto.select}.svg`} alt="" className="w-10 h-32" />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
