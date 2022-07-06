import { useEffect, useState } from 'react'

function useCounter(forwards = true) {
    //make this custom hook configurable by taking params/ or props , it just need an argument and because its cont considered a component you wont put props, its consider a hook/ function so it will only take an perimeter
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(forwards){
                setCounter((prevCounter) => prevCounter + 1);
            }else{
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);
        
        return () => clearInterval(interval);
        //we added the forward parameter as a dependency so that way if this changes we can rerun the logic the same way useEffect works
    }, [forwards]);
    return counter
}

export default useCounter
