import React, { useState} from "react";
import "./Form.css"
function Form({ onSubmit }) {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit({ date, description, category, amount });
      setDate('');
      setDescription('');
      setCategory('');
      setAmount('');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={event => setDate(event.target.value)} required/>
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={event => setDescription(event.target.value)} required/>
        </label>
        <label>
          Category:
          <input type="text" value={category} onChange={event => setCategory(event.target.value)} required/>
        </label>
        <label>
          Amount:
          <input type="number" value={amount} onChange={event => setAmount(event.target.value)}required />
        </label>
        <button className="form-button"type="submit">Add Transaction</button>
      </form>
    );
  }
  
  export default Form;