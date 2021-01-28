import React, { useRef } from 'react';

// import CSS
import './Form.scss';

type Task = {
    id: number;
    content: string;
    completed?: boolean
};

// Create interface for the props's Form
interface FormProps {
  value: string;
  handleValue: React.Dispatch<React.SetStateAction<string>>;
};



const Form: React.FC<FormProps>  = ({ value, handleValue }) => {

  // TS for HTML elements
  const formRef = useRef<HTMLFormElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // FUNCTION
  const submitTask = (event: React.FormEvent) => {
    event.preventDefault();
    // Add 1 at id for each new task
    // Add new task in state
    // sendNewTaskAtAPI() 
   /* handleTasks([...tasks, {
      id: id,
      content: value,
      completed: false
    }]);*/
    // initialize value at empty
    handleValue('');

  }

  return (
    <form 
      ref={formRef}
      className="form"
      onSubmit={submitTask}
    >
      <input
        ref={inputRef}
        className="form-input"
        type="text"
        value={value}
        onChange={(event) => {
          handleValue(event.target.value)
        }}
        placeholder="Indiquer votre tache ici"
      />
    </form>
  )
};

export default Form;
