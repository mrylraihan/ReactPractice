import { useState } from "react";
import './TestStateFunc.css'

const TestStateFunc = () => {
    const [car, setCar] = useState('Ford')
    const [shouldStrike, setStrike] = useState(false)
    
    
    const whichCar=()=>{
        if(car==='Tesla'){
            setStrike(false)
            return setCar('Mustang')
        }else{
            setStrike(true)
            return setCar('Tesla')
        }
        
    }
   
    

    return (
        <>
            <h1 className={`${shouldStrike ?'white-Text':''}`}>my favorite car is a {car}</h1>
            <div className="alignCheckBox">
            <input type="checkbox" onClick={whichCar} />
                <h2 className={`${shouldStrike ? 'strikethrough' : ''}`}>StrikeThrough practice</h2>
            </div>
            <button onClick={whichCar}>click me</button>
        </>

    )
}

export default TestStateFunc