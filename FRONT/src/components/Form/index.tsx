import React from 'react';
import axios from 'axios';

// import CSS
import './Form.scss';


// Create interface for the props's Form
interface FormProps {
  value: string;
  handleValue: React.Dispatch<React.SetStateAction<string>>;
  getDataFromAPI: () => void;
};

const Form: React.FC<FormProps>  = ({ value, handleValue, getDataFromAPI }) => {

  // FUNCTION 
  const submitTask = (event: React.FormEvent) => {
    event.preventDefault();
    
    axios({
      method: 'post',
      url: 'http://localhost:1337/tasks/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data: {
        "id": "",
        "content": value,
        "completed": false
      }
    })
    .then((response) => {
      console.log(response.status);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      getDataFromAPI()
    });
    // initialize value
    handleValue('');
  }

  return (
    <form 
      className="form"
      onSubmit={submitTask}
    >
      <input
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
