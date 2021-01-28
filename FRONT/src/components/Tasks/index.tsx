import React, { ReactChild } from 'react';

// Import components
// import CSS
import { Task } from '../../../src/interfaces/Task';
import './Tasks.scss';

interface TasksProps {
    tasks: Array<Task>;
};


const Tasks: React.FC<TasksProps> = ({ tasks }) => (  
    <ul className="tasks">
        {tasks.map((task) =>(
            <li className='task task--completed'>
            {task.content}
            <div className="task-container-btn">
                <button className="button button-check">
                    <i className="fas fa-check"></i>
                </button>
                <button className="button button-trash">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </li>
        ))}
    </ul>
)

export default Tasks;
