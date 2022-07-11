import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = tasjObj =>{
    const loadedTasks = [];

    for (const taskKey in tasjObj) {
      loadedTasks.push({ id: taskKey, text: tasjObj[taskKey].text });
    }

    setTasks(loadedTasks);
  }
  
  const { isLoading, error, sendRequest:fetchTasks } = useHttp({ url: 'https://react-http-cb4a9-default-rtdb.firebaseio.com/tasks.json' }, transformTasks)
  //or
  // const httpData = useHttp({ url: 'https://react-http-cb4a9-default-rtdb.firebaseio.com/tasks.json' }, transformTasks)
  // const {isLoading, error, sendRequest} = httpData


  // const fetchTasks = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       'https://react-http-cb4a9-default-rtdb.firebaseio.com/tasks.json'
  //     );

  //     if (!response.ok) {
  //       throw new Error('Request failed!');
  //     }

  //     const data = await response.json();

    
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };

  useEffect(() => {
    fetchTasks();
  }, []);
  
  console.log('in app',tasks);
  const taskAddHandler = (task) => {
    console.log('in task add handler',task);
    setTasks((prevTasks) => prevTasks.concat(task));
    // setTasks((prevTasks) => [...prevTasks, task]);
  };
 
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
