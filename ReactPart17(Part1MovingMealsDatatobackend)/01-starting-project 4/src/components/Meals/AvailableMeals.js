import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';


const AvailableMeals = () => {
  const [meals, setMeals]= useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    setIsLoading(true)
    //fire base specific when create models you can target that model by adding the model name then .json
    const fetchMeals = async ()=>{
      const response = await fetch('https://testreact-5b72f-default-rtdb.firebaseio.com/meals.json')
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
    }

    fetchMeals()

  },[])

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

  let content = <p> hello</p>
  if(isLoading){
    content = <p> your data is loading...</p>
  }

  if(meals.length>1 && !isLoading){
    content = mealsList 
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
