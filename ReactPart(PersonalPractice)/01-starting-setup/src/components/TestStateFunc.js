import { useState } from "react";
import './TestStateFunc.css'

const TestStateFunc = () => {
    const [car, setCar] = useState('Ford')
    const [onorOff, setOnOrOrr] = useState(false)
    
    
    const whichCar=()=>{
        if(car==='Tesla'){
            setOnOrOrr(false)
            return setCar('Mustang')
        }else{
            setOnOrOrr(true)
            return setCar('Tesla')
        }
        
    }
   
    

    return (
        <>
            <h1 className={`${onorOff ?'white-Text':''}`}>my favorite car is a {car}</h1>
            <div className="alignCheckBox">
            <input type="checkbox" onClick={whichCar} />
            <h2 className={`${onorOff ? 'strikethrough' : ''}`}>StrikeThrough practice</h2>
            </div>
            <button onClick={whichCar}>click me</button>
        </>

    )
}

export default TestStateFunc