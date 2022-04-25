import React, { useEffect, useState } from 'react'

const FetchDelete = () => {
    const [oneName, setData] = useState([])
    const [btnTrigger, setBtnTrigger] = useState(false)
    const [name, setName] = useState('')
    const [nameApi, setNameForApi] = useState('')

    useEffect(() => {
        if (btnTrigger) {
            fetch(`http://localhost:4000/gundams/${nameApi}`, {method:"DELETE"})
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    setData(result)
                    return
                })
                .catch(console.error)
        } else {
            setData({})
            setBtnTrigger(false)
        }
    }, [nameApi])

    const buttonHandler = () => {
        setBtnTrigger(!btnTrigger)
        setNameForApi(name)
        setName('')
    }
    return (
        <div>
            <label htmlFor="name">
                what gundam id are you looking for!:
                <input type="number" id='name' value={name} onChange={e => setName(e.target.value)} />
            </label>
            <button onClick={buttonHandler}>get Your Gundam Pilot by Id</button>
            <ul>{oneName.length>0?oneName.map(ele=><li key={ele.id}>{ele.pilot}: {ele.gundam}</li>):''}</ul>
        </div>
    )
}

export default FetchDelete