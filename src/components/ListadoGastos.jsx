import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';

export const ListadoGastos = ({gastos, setGastoEditar,setGastos}) => {


const handleDeleteGasto = ({id}) => {
    console.log(gastos)
    const newGasto = gastos.filter(gasto => (gasto.id !== id));
    setGastos(newGasto)
    console.log(newGasto)
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
            Elimnar
        </SwipeAction>
    </TrailingActions>
    
)

    return (
        <>
       
            <div className='w-1/2' >
                
            {
                    gastos?.map(gasto => (
                        <SwipeableList key={gasto.id}  >
                            <SwipeableListItem   leadingActions= {leadingActions({gasto})} trailingActions={trailingActions(gasto.id)}  >
                            <div className=" border-2 border-black shadow-md shadow-pink mt-2 bg-white w-screen" key={gasto.id}>
                                <p className="text-md font-semibold text-neutral-700">{gasto.select}</p>
                                <div className="flex  justify-between ">
                                <p className="text-xl font-bold text-black">{gasto.nombre}</p>
                                <p className="">${gasto.monto}</p>
                                </div>
                                <img src={`src/assets/img/icono_${gasto.select}.svg`} alt="" className="w-10 h-32" />
                            </div>
                            </SwipeableListItem>
                        </SwipeableList>
                    ))
                }
            </div>
           
        </>
    )
}
