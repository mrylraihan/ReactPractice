import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';


const AvailableMeals = () => {
  const [meals, setMeals]= useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState();

  useEffect(()=>{
    //fire base specific when create models you can target that model by adding the model name then .json
    const fetchMeals = async ()=>{
      // to see the error remove the .json at the end of the fetch call
      const response = await fetch('https://testreact-5b72f-default-rtdb.firebaseio.com/meals.json')
     
      if(!response.ok){
        // this string we pass in to the error constructor will be stored as the message property
        throw new Error('Something went wrong!')
      }

      const responseData = await response.json()
      console.log(responseData);

      const loadedMeals = []

      for (const key in responseData) {
        loadedMeals.push({
              id:key, 
              name:responseData[key].name,
              description:responseData[key].description,
              price:responseData[key].price,
              
        })
      }

      setMeals(loadedMeals)
      setIsLoading(false)
    };


  
      fetchMeals().catch(error=>{
      // error is the error object we get back 
      setIsLoading(false)
      // the message property is set when we passed the string into the Error constructor
      setHttpError(error.message)
    })

  },[]);

  if (isLoading) {
    return <section className={classes.MealsLoading}>
      <p>...Loading</p>
    </section>
  }

  if(httpError){
    return <section className={classes.MealsError}>
      <p>{httpError}</p>
    </section>
  }


  // map our meals state 
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

 


  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
