import React, { useState } from 'react';

// import components
import Form from '../Form';
import Tasks from '../Tasks';
import Counter from '../Counter';

import tasksArray from '../../tasks'
// import CSS
import './App.scss';


function App() {


  const [tasks, setTasks] = useState(tasksArray);
  const [value, setValue] = useState<string>("");
  const [id, setId] = useState<number>(1);
  
  return (
    <div className="app">
      <h1 className="app-title">todolist</h1>
      <section className="app-container">
        <Form
          value={value}
          handleValue={setValue}
          id={id}
          handleId={setId}
          tasks={tasks}
        />
        <Tasks tasks={tasks} />
        <Counter counter={4} />
      </section>
    </div>
  );
}

export default App;
