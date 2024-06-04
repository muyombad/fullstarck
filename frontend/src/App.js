
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

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/account-holders/');
      setItems(response.data);
    } catch (error) {
      console.error('There was an error fetching the items!', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);




    const [account_name, setaccount_name] = useState('');
    const [account_number, setaccount_number] = useState('');
    const [available_balance, setavailable_balance] = useState('');
    const [address, setaddress] = useState('');
    const [email, setemail] = useState('');
    const [phone_number, setphone_number] = useState('');
    const [profile, setProfile] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newItem = {
            account_number,
            account_name,
            available_balance,
            address,
            email,
            phone_number,
            profile
        };

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/account-holders/', newItem);
            console.log('account added successfully:', response.data);
            // Optionally, reset the form
            
            setaccount_name('');
            setaccount_number('');
            setaddress('');
            setavailable_balance('');
            setemail('');
            setphone_number('');
            setProfile('')
            fetchItems();
          
        } catch (error) {
            console.error('There was an error adding the item!', error);
        }
      }

      const handleDelete = async (id) => {
        try {
          await axios.delete(`http://127.0.0.1:8000/api/account-holders/${id}/`);
          console.log('Account deleted successfully');
          // Fetch the updated list of items
          fetchItems();
        } catch (error) {
          console.error('There was an error deleting the item!', error);
        }
      };

  return (
    <>
    <div className="table_component" role="region" tabIndex="0" style={tableStyles}>
      <table style={tableElementStyles}>
        
        <thead >
          <tr>
            <th style={thStyles}>Account Numbers</th>
            <th style={thStyles}>Account Name</th>
            <th style={thStyles}>Available Balance</th>
            <th style={thStyles}>Address</th>
            <th style={thStyles}>Email</th>
            <th style={thStyles}>Phone Number</th>
          </tr>
        </thead>
        
        <tbody  >
        {items.map(itema => (
        <tr key={itema.id} >
            <td style={tdStyles}>{itema.account_number}</td>
            <td style={tdStyles}>{itema.account_name}</td>
            <td style={tdStyles}>{itema.available_balance}</td>
            <td style={tdStyles}>{itema.address}</td>
            <td style={tdStyles}>{itema.email}</td>
            <td style={tdStyles}>{itema.phone_number}</td>
            <button onClick={() => handleDelete(itema.id)}>Delete</button>
          </tr>
          ))}
        </tbody>
        
      </table>
    </div>
    <form onSubmit={handleSubmit}>
            <label>
                account_name:
                <input type="text" value={account_name} onChange={(e) => setaccount_name(e.target.value)} />
            </label>
            <br />
            <label>
                account_number:
                <textarea value={account_number} onChange={(e) => setaccount_number(e.target.value)} />
            </label>
            <br />
            <label>
                available_balance:
                <input type="text" value={available_balance} onChange={(e) => setavailable_balance(e.target.value)} />
            </label>
            <br />
            <label>
                phone_number
                <textarea value={phone_number} onChange={(e) => setphone_number(e.target.value)} />
            </label>
            <br />
            <label>
                email:
                <input type="text" value={email} onChange={(e) => setemail(e.target.value)} />
            </label>
            <br />
            <label>
                profile:
                <input type="text" value={profile} onChange={(e) => setProfile(e.target.value)} />
            </label>
            <br />
            <label>
                address
                <textarea value={address} onChange={(e) => setaddress(e.target.value)} />
            </label>
            <br />
            <button type="submit">Add Account</button>
        </form>
    
    </>
  );
}

export default App;
