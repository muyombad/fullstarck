
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

  

function App() {
  const tableStyles = {
    overflow: 'auto',
    width: '100%',
  };

  const tableElementStyles = {
    border: '1px solid #dededf',
    height: '100%',
    width: '100%',
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
    borderSpacing: '1px',
    textAlign: 'left',
  };

  // const captionStyles = {
  //   captionSide: 'top',
  //   textAlign: 'left',
  //  };

  const thStyles = {
    border: '1px solid #dededf',
    backgroundColor: '#eceff1',
    color: '#000000',
    padding: '5px',
  };

  const tdStyles = {
    border: '1px solid #dededf',
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '5px',
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/account-holders/')
          .then(response => {
              setItems(response.data);
          })
          .catch(error => {
              console.error('There was an error fetching the items!', error);
          });
  }, []);

  return (
    <>
    <div className="table_component" role="region" tabIndex="0" style={tableStyles}>
      <table style={tableElementStyles}>
        
        <thead>
          <tr>
            <th style={thStyles}>Account Number</th>
            <th style={thStyles}>Account Name</th>
            <th style={thStyles}>Available Balance</th>
            <th style={thStyles}>Address</th>
            <th style={thStyles}>Email</th>
            <th style={thStyles}>Phone Number</th>
          </tr>
        </thead>
        {items.map(item => (
        <tbody key={item.id}>
        <tr>
            <td style={tdStyles}>{item.account_number}</td>
            <td style={tdStyles}>{item.account_name}</td>
            <td style={tdStyles}>{item.available_balance}</td>
            <td style={tdStyles}>{item.address}</td>
            <td style={tdStyles}>{item.email}</td>
            <td style={tdStyles}>{item.phone_number}</td>
          </tr>
          
        </tbody>
        ))}
      </table>
    </div>
    
    </>
  );
}

export default App;
