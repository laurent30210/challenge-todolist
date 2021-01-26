import React from 'react';

// Import components
import Task from '../Task';
// import CSS
import './Tasks.scss';

const Tasks = () => (  
    <ul className="tasks">
       <Task />
       <Task />
       <Task />
       <Task />
       <Task />
    </ul>
)

export default Tasks;
