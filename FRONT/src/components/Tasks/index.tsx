import React from 'react';
import { Task } from '../../../src/interfaces/Task';

// Import components
// import CSS
import './Tasks.scss';

interface TasksProps {
    tasks: Array<Task>;
    removeTask: any;
    completedTask: any;
};


const Tasks: React.FC<TasksProps> = ({ tasks, removeTask, completedTask }) =>  (
    <form
    >
        <ul className="tasks">
            {tasks.map((task) =>(
                <li key={task.id} className={task.completed ? 'task task--completed' : 'task'}>
                    <label>
                        {task.content}
                    </label>   
                <div className="task-container-btn">
                    <i 
                    className="fas fa-check button button-check"
                    onClick={completedTask}
                    />
                    <i
                    className="fas fa-trash button button-trash"
                    onClick={removeTask}
                    />
                </div>
            </li>
            ))}
        </ul>
    </form>
);



export default Tasks;
