import { useState, useEffect } from 'react';
import Form from './Form';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  const addTransaction = (transaction) => {
    fetch('http://localhost:3000/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transaction)
    })
      .then(response => response.json())
      .then(data => setTransactions([...transactions, data]));
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Form onSubmit={addTransaction} />
    </div>
  );
}
export default App;