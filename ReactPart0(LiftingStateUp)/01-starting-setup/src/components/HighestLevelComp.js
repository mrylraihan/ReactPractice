import TestLiftState from "./TestLiftState2";
import React, { useState } from "react";


function HighestLevelComp() {
    const [testState, setTestLiftState] = useState('')

    const printTestState = (a) => {
        const newInput = { ...a }
        setTestLiftState(newInput)
    };
    if(!testState){

    }else{
        console.log('from HighestLevelComp.js', testState)
    }
    // useEffect(()=>{2
    //   printTestState()
    // })


    return (
        <div>
            <TestLiftState setTestLiftState={setTestLiftState} testState={testState} printTestState={printTestState} />

        </div>
    );
}
// or you can do it like this 
// const HighestLevelComp = ()=>  (
//     <div>
//       <h2>Let's get started!</h2>
//     </div>
//   );

export default HighestLevelComp;
