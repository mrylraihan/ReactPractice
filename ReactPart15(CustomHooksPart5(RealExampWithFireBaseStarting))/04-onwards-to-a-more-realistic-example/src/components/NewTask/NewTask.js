import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http'

const NewTask = (props) => {
  const {isLoading, error, sendRequest:sendTaskRequest} = useHttp()

  const createTask = (taskText, taskData)=>{


    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createTask)
  }

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest({
      url: 'https://testreact-5b72f-default-rtdb.firebaseio.com/tasks.json', method: 'POST', headers: {
        'Content-Type': 'application/json',
      }, body: { text: taskText }
    }, createTask.bind(this, taskText));
  
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
