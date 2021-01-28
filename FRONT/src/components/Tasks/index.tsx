import React from 'react';
import { Task } from '../../../src/interfaces/Task';

// Import components
// import CSS
import './Tasks.scss';

interface TasksProps {
    tasks: Array<Task>;
};

const Tasks: React.FC<TasksProps> = ({ tasks }) => (
    <form>
        <ul className="tasks">
            {tasks.map((task) =>(
                <li key={task.id} className='task task--completed'>
                <label>
                {task.content}
                </label>   
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
    </form>
);


export default Tasks;
