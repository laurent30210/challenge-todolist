import React from 'react';

// Import components
import Task from '../Task';
// import CSS
import './Tasks.scss';

type Task = {
    id: number;
    content: string;
    completed?: boolean
};

const Tasks = ({ tasks }) => (  
    <ul className="tasks">
        {tasks.map((task: Array<Task>) => (
            <Task
                key={task.id}
                content={task.content}
                id={tasks.id}
                completed={task.completed}
            />

        ))}
      
    </ul>
)

export default Tasks;
