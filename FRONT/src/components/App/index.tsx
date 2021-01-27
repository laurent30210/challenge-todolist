import React, { useState } from 'react';

// import components
import Form from '../Form';
import Tasks from '../Tasks';
import Counter from '../Counter';

import tasksArray from '../../tasks'
// import CSS
import './App.scss';


/*interface StateId {
  id: number;
};*/

function App() {

  //const [tasks, setTasks] = useState(arrayTask);
  const [value, setValue] = useState("");
  //const [id, setId] = useState<StateId>({id: 0});

  console.log(tasksArray);

  return (
    <div className="app">
      <h1 className="app-title">todolist</h1>
      <section className="app-container">
        <Form value={value} setValue={setValue} />
        <Tasks />
        <Counter counter={4} />
      </section>
    </div>
  );
}

export default App;
