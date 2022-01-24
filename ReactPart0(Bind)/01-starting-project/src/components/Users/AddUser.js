import React from 'react'
import Card from '../UI/Card.js'
import Button from '../UI/Button.js'  
import styles from './AddUser.module.css'
import axios from 'axios'
import { BsFillAlarmFill, BsDoorClosedFill } from 'react-icons/bs'
const AddUser = props => {
   
    const website = 'https://api.kanye.rest'
        const fetchData = async () => {
            try {
                // const res = await getKanyeQuote()//method that does api call
                const res = await axios.get(website) //or we could have dont it this way 
                console.log(res);
                console.log(res.data);
                props.onAddQuote(res.data.quote)
            } catch (error) {
                props.onAddQuote('Something went wrong!')
            }
        }


    return (
        <Card className={styles.input}>
            <h1>Lets get a Quotes! <BsFillAlarmFill/> <BsDoorClosedFill></BsDoorClosedFill></h1>
            <Button onClick={() => fetchData()}>Get a Quote!</Button>
            {/* <Button onClick={fetchData.bind(this,website)}>Get a Quote!</Button> */}
        </Card>
    )
}
export default AddUser