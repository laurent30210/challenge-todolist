import React from 'react';

// import components
import Form from '../Form';
import Tasks from '../Tasks';
import Counter from '../Counter';
// import CSS
import './App.scss';

function App() {
  return (
    <div className="app">
      <h1 className="app-title">todolist</h1>
      <section className="app-container">
        <Form />
        <Tasks />
        <Counter />
      </section>
    </div>
  );
}

export default App;
