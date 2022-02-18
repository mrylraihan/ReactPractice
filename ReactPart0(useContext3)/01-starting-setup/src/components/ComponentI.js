import React, {useContext} from 'react';
import {UserContext, ChannelContext} from '../App'

function ComponentI() {
    const fN = useContext(UserContext)
    const lN = useContext(ChannelContext)
    return (
        <div>
            <h1>{fN.firstName} {lN.lastName}</h1>
        </div>
    );
}

export default ComponentI;