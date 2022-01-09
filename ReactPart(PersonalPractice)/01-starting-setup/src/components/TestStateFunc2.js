import { useState } from "react"

const TestStateFunc2 = (props) =>{
    const [chair, setChair] = useState(props.chair)

    const changeChair = ()=> {
        // let oldChair = chair 
        // this will toggle betwen the two options 
        // if(chair !== 'Areon'){
        //     setChair('Areon')
        // } else if (chair === 'Areon'){
        //     setChair(props.chair)
        // } or you can use a ternerary operator
        let newChair = chair !== 'Areon'?'Areon':props.chair;
        setChair(newChair)
    }

    return (
        <>
            <h1>my favorite chair is a {chair}</h1>
            <button onClick={changeChair}>click me</button>
        </>
    )

}

export default TestStateFunc2