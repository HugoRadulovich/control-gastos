


export const FiltrosGastos = ({filtersCategorie, setFiltersCategorie}) => {

    const handleSelectChanged = (event) => {
        setFiltersCategorie(event.target.value)
    } 


    return (
       <>
       <div className="w-1/2 flex flex-col items-center  gap-2 mt-2 mb-4 bg-slate-200  rounded-xl shadow-md shadow-gray-400 ">
        <div className="m-2"></div>
            <label htmlFor="categoria" className="font-semibold text-center text-xl">Categoría</label>
                <select
                    id="categoria"
                    value={filtersCategorie}
                    className="border-black border mb-2 rounded-xl"
                    onChange = {handleSelectChanged}
                    
                >
                    <option value="all"> -- Todas las categorias --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
       </div>

       </>
    )
}
