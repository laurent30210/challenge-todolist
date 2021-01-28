import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import components
import Tasks from '../Tasks';
import Form from '../Form';

import { Task } from '../../../src/interfaces/Task';
// import CSS
import './App.scss';


const App: React.FC = () => {

const tasksArray: Array<Task> = [
  {
    id: 1,
      content: 'Trouver la réponse',
      completed: true,
    },
    {
      id: 2,
      content: 'Tester',
      completed: false,
    },
    {
      id: 3,
      content: 'Apprendre',
      completed: false,
    },
    {
      id: 4,
      content: 'Explorer',
      completed: false,
    },
  ];

  const [tasks, setTasks] = useState(tasksArray);
  const [value, setValue] = useState("");


  useEffect(() => {

    // launch request for get tasks
    axios.get(`http://localhost:1337/tasks`)
    .then((response) => {
      console.log(response.data);
      setTasks(response.data)
    })
    .catch((error) => {
      console.error(error);
    });
  }, []) 

  
  return (
    <div className="app">
      <h1 className="app-title">todolist</h1>
      <section className="app-container">
        <Form 
          value={value}
          handleValue={setValue}
        />
        <Tasks tasks={tasks} />
      </section>
    </div>
  );
};

export default App;
