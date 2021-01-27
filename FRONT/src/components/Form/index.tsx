import React, { useRef } from 'react';

// import CSS
import './Form.scss';

// Create interface for the props's Form
interface FormProps {
  value: string;
  setValue: (text: string) => void;
}

const Form: React.FC<FormProps>  = ({ value, setValue }) => {
  
  const formRef = useRef<HTMLFormElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form 
      ref={formRef}
      className="form"
    >
       <input
        ref={inputRef}
        className="form-input"
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
        placeholder="Indiquer votre tache ici"
      />
    </form>
  )
};

export default Form;
