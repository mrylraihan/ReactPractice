import React, {useEffect} from 'react'
import LowestLevel from './LowestLevel'

const MidLevel = (props) => {
    useEffect(() => {
        console.log('in the middle level useEffect!');
    },[props.res])
    return (
        <div>
            <LowestLevel res={props.res} setRes={props.setRes}/>
        </div>
    )
}

export default MidLevel