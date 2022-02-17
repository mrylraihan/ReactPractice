import TestLiftState from "./TestLiftState2";
import React, { useState } from "react";
import NameContext from "../store/name-context";
// testState.uInput



function HighestLevelComp() {
    const [testState, setTestLiftState] = useState('')

    const printTestState = (a) => {
        const newInput = { ...a }
        setTestLiftState(newInput)
    };


    return (

        <NameContext.Provider value={{ name: testState.uInput ?testState.uInput : 'Wallie'}}>
            <TestLiftState printTestState={printTestState} testState={testState}></TestLiftState>
        </NameContext.Provider>

    );
}
// or you can do it like this 
// const HighestLevelComp = ()=>  (
//     <div>
//       <h2>Let's get started!</h2>
//     </div>
//   );

export default HighestLevelComp;
