import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import components
import Tasks from '../Tasks';
import Form from '../Form';

// import CSS
import './App.scss';


const App: React.FC = () => {

  
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const findLengthArray = () => {
    console.log('tasks.length');
  };

  const removeTask = (event: Event, taskId: any) => {
    
    axios.delete(`http://localhost:1337/tasks/${taskId}`)
    .then((response) => {
      console.log(response.status);
    })
    .catch((error) => {
      console.error(error);
    });
    
    console.log(taskId, event.target);
  };

  const completedTask = (event: Event, i: any) => {
    console.log(event, i)
  };

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit', value);
    
    axios({
      method: 'post',
      url: '/http://localhost:1337/tasks/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data: {
        content: {value},
        completed: null
      }
    })
    .then((response) => {
      console.log(response.status);
    })
    .catch((error) => {
      console.error(error);
    });
  };

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
  }, []); 
  
  return (
    <div className="app">
      <h1 className="app-title">todolist</h1>
      <section className="app-container">
        <Form 
          value={value}
          handleValue={setValue}
        />
        <Tasks
          tasks={tasks}
          removeTask={removeTask}
          completedTask={completedTask}
        />

      </section>
    </div>
  );
};

export default App;
