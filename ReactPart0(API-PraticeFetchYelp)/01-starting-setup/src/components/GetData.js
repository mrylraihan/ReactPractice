import React, { useEffect, useState } from "react"
import { getApiData } from "../api/getApiData"
// import axios from "axios"

const GetData = (props)=>{
    const [checkButton, setButton] = useState(false)
    useEffect(()=>{
        // Change from async await to fetch promises
        console.log('useEffect Working')
        // this will render the api cal for the first load and assign the state what it was returned which is why we see the first returned api stuff on the screen
        if(checkButton){
            getApiData()
            .then(res => res.json())
            .then(result => {console.log(result.businesses)
                props.setListApi(result.businesses)
            })
        }
            //                     return result.businesses})
            // .then(businesses=> props.setListApi(businesses))
    }, [checkButton])//no dependencies so it only runs once then after that its up to the click/button to change the state 
    
    const buttonHandler =()=>{
              setButton(checkButton? false: true )
    }

    
        


    return (
        <div>
            <button onClick={buttonHandler}>get Yelp Api Results!</button>
            {/* <h1>{quote}</h1> */}
        </div>
    )
}
export default GetData