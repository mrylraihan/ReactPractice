import React, { useContext } from 'react'
import { ChannelContext } from '../App'
import UserContext from '../store/UserContext'

function ComponentE() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return <div> User is {user} and channel is {channel}</div>
}

export default ComponentE