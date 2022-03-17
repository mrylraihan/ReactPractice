import React from 'react'
import TestComp2 from './testComp2'

const testComp = (props) => {
    return (
        <div>
          <TestComp2 {...props}/>
        </div>
    )
}

export default testComp