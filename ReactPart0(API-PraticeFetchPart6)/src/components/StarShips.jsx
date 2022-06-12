import React from 'react'
import Starship from './Starship';



function StarShips(props){
    

    return (
        <div>
            {props.data.map((starship, idx)=>{
               return <Starship key={idx} result={starship}/>
            })}
        </div>
    )
}

export default StarShips