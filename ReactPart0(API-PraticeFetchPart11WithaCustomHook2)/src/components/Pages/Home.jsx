import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ data }) => {
    // const [data, setData] = useState('')
    const nav = useNavigate()
    return (
        <div className='app'>
            <h1>Home</h1>
            {data && data.map(ele => {
                return <p key={ele.id} onClick={nav.bind(this,`/home/${ele.id}`)}>{ele.title}</p>
            })}
        </div>
    )
}

export default Home