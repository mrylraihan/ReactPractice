import React, {useState, useEffect} from 'react'

const CounterComp = () => {
    const [counter, setCounter] = useState(0)
    const [isValid, setIsValid] = useState(null) 
    useEffect(() => {
        console.log('useEffect is running');
        console.log(counter);
    }, [isValid])

    const countUp = () => {
        // setCounter(counter + 1)or
        setCounter(prev=>prev + 1)
        setIsValid(counter + 1 > 5)
    }
    
    const countDown = () => {
        // setCounter(counter -1)or
        setCounter(prev=>prev - 1)
        setIsValid(counter - 1  > 5)
    }

    return (
        <div>
            <button onClick={countDown}>minus 1</button>
            <p>{counter}</p>
            <button onClick={countUp}>add 1</button>
        </div>
    )
}

export default CounterComp