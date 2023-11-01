import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';
import { formatearFecha } from '../helpers/formatearFecha';


export const ListadoGastos = ({gastos, setGastoEditar,setGastos, gastosFiltrados,filtersCategorie}) => {



const handleDeleteGasto = ({id}) => {
    const newGasto = gastos.filter(gasto => (gasto.id !== id));
    setGastos(newGasto)
}

const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
       style: 'currency',
       currency: 'USD',
     })
   }




const leadingActions = ({gasto}) => (
    <LeadingActions  >
        <SwipeAction  onClick={() => setGastoEditar(gasto)}>
            Editar
            
        </SwipeAction>
    </LeadingActions>
)


const trailingActions = (id) => (
    <TrailingActions>
        <SwipeAction onClick={() => handleDeleteGasto({id})}> 
            Eliminar
        </SwipeAction>
    </TrailingActions>
    
)

    return (
        <>
       
            <div className='w-1/2' >

                {
                    (filtersCategorie === 'all' ) ? 
                                
                                    gastos?.map(gasto => (
                                    <SwipeableList key={gasto.id}  >
                                        <SwipeableListItem   leadingActions= {leadingActions({gasto})} trailingActions={trailingActions(gasto.id)}  >
                                        <div className=" mt-2 mb-4 bg-slate-200 w-screen rounded-xl shadow-md shadow-gray-400" key={gasto.id}>
                                            <div className=" flex  justify-between">
                                                <div className="flex gap-2 pl-2 ml-2">
                                                    <img src={`src/assets/img/icono_${gasto.categoria}.svg`} alt="" className="w-28 h-32 flex justify-start " />
                                                    <div className="flex flex-col justify-center items-start">
                                                    <p className="text-md font-semibold text-neutral-400 flex justify-start">{gasto.select}</p>
                                                    <p className="text-xl font-bold text-neutral-800 ">{gasto.nombre}</p>
                                                    <p className=""> <span className="">Agregado el: </span>{formatearFecha(gasto.fecha)}</p>


                                                </div>
                                                </div>                       
                                                
                                                <div className="flex items-center">
                                                <p className="text-xl font-bold text-black pr-4">{ formatearCantidad(parseInt(gasto.monto))}</p>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        </SwipeableListItem>
                                    </SwipeableList>
                                ))
                            

                            :

                            
                                gastosFiltrados?.map(gasto => (
                                <SwipeableList key={gasto.id}  >
                                    <SwipeableListItem   leadingActions= {leadingActions({gasto})} trailingActions={trailingActions(gasto.id)}  >
                                    <div className=" mt-2 mb-4 bg-white w-screen rounded-xl shadow-md shadow-gray-400" key={gasto.id}>
                                        <div className=" flex  justify-between">
                                            <div className="flex gap-2 pl-2">
                                                <img src={`src/assets/img/icono_${gasto.categoria}.svg`} alt="" className="w-28 h-32 flex justify-start " />
                                                <div className="flex flex-col justify-center items-start">
                                                <p className="text-md font-semibold text-neutral-400 flex justify-start">{gasto.select}</p>
                                                <p className="text-xl font-bold text-neutral-800 ">{gasto.nombre}</p>
                                                <p className=""> <span className="">Agregado el: </span>{formatearFecha(gasto.fecha)}</p>


                                            </div>
                                            </div>                       
                                            
                                            <div className="flex items-center">
                                            <p className="text-xl font-bold text-black pr-4">{ formatearCantidad(parseInt(gasto.monto))}</p>
                                            </div>
                                        </div>
                                    
                                    </div>
                                    </SwipeableListItem>
                                </SwipeableList>
                            ))
                        


                }        
        
            </div>
           
        </>
    )
}
