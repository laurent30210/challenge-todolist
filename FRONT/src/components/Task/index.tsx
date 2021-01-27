import React from 'react';

// Import components

// import CSS
import './Task.scss';

const Task = ({ content, completed }) => (  
    <li className={completed ? 'task tasks--completed' : 'task'}>
        {content}
        <div className="task-container-btn">
            <button className="button button-check">
                <i className="fas fa-check"></i>
            </button>
            <button className="button button-trash">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    </li>
)

export default Task;
