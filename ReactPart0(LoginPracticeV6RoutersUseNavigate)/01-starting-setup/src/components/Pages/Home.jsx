import React from 'react'

const Home = (props) => {
    if(props.user){
        return (
            <>
            <div>Home for Users</div>
            </>
        )
    }else{
        return (
            <div>
                Home for None Users!
            </div>
        )
    }
}

export default Home