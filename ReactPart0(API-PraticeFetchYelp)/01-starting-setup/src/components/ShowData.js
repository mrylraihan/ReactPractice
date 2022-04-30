import React, { useState } from 'react'
import GetData from './GetData'
import { Card, Button } from 'react-bootstrap'

const ShowData = () => {
    const [listApi, setListApi] = useState([])
    const mappedList = listApi.map(ele=>{

       return <li>
           <Card style={{ width: '18rem' }} key={ele.id}>
               <Card.Img variant="top" src={ele.image_url} />
               <Card.Body>
                   <Card.Title>{ele.name}</Card.Title>
                   <a href={ele.url}>
                   <Button variant="primary">See the Site!</Button>
                   </a>
               </Card.Body>
           </Card>
       </li>
    })
    return <div>
        <h1>Yelp api</h1>
        <GetData setListApi={setListApi}/>
        <ul>{mappedList}</ul>

    </div>
}
export default ShowData