import React from 'react';
import { Task } from '../../../src/interfaces/Task';
import axios from 'axios';

// import CSS
import './Tasks.scss';

interface TasksProps {
    tasks: Array<Task>;
    // getDataFromAPI: () => any;
};


const Tasks: React.FC<TasksProps> = ({ tasks }) =>  {

    const removeTask = (event: any) => {    
        const taskId = event.target.id;

        axios.delete(`http://localhost:1337/tasks/${taskId}`)
        .then((response) => {
          console.log(response.status);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
            // getDataFromAPI()
        });        
    };

    const completedTask = (event: any) => {    
        const taskId = event.target.id;
        const completed = event.target.checked;

        axios({
            method: 'put',
            url: `http://localhost:1337/tasks/${taskId}`,
            headers: { 
              'Content-Type': 'application/json'
            },
            data: {
              "completed": completed
            }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
            // getDataFromAPI()
        });
    };   

    return (
        <form>
            <ul className="tasks">
                {tasks.map((task) =>(
                    <li key={task.id} className={task.completed ? 'task task--completed' : 'task'}>
                        <label>
                            {task.content}
                        </label>   
                    <div className="task-container-btn">
                        <input
                          type="checkbox"
                          id={task.id}
                          defaultChecked={task.completed}
                          onChange={completedTask}

                        />
                        <i 
                        id={task.id}
                        className="fas fa-check button button-check"
                        />
                        <i
                        id={task.id}
                        className="fas fa-trash button button-trash"
                        onClick={removeTask}
                        />
                    </div>
                </li>
                ))}
            </ul>
        </form>
    );
};



export default Tasks;
