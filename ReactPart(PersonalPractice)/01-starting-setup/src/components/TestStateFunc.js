import { useState } from "react";

const TestStateFunc = () => {
    const [car, setCar] = useState('Ford')

    return (
        <>
            <h1>my favorite car is a {car}</h1>
            <button onClick={() => setCar('Tesla')}>click me</button>
        </>

    )
}

export default TestStateFunc