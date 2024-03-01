import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [passwords, setPasswords] = useState([]);
  const [newPassword, setNewPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newWebsite, setNewWebsite] = useState('');

  useEffect(() => {
    fetchPasswords();
  }, []);

  const fetchPasswords = async () => {
    const response = await axios.get('http://localhost:3000/passwords');
    setPasswords(response.data);
  };

  const addPassword = async () => {
    await axios.post('http://localhost:3000/passwords', { 
      password: newPassword, 
      username: newUsername, 
      website: newWebsite 
    });
    setNewPassword('');
    setNewUsername('');
    setNewWebsite('');
    fetchPasswords();
  };

  const deletePassword = async (id) => {
    await axios.delete(`http://localhost:3000/passwords/${id}`);
    fetchPasswords();
  };

  return (
    <div id = "form">
      <div>
        <input 
          type="text" 
          placeholder="Website"
          value={newWebsite}
          onChange={(e) => setNewWebsite(e.target.value)} 
        />
      </div>
      <div>
        <input 
          type="text" 
          placeholder="Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)} 
        />
      </div>
      <div>
        <input 
          type="password" 
          placeholder="Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)} 
        />
      </div>
      <button onClick={addPassword}>Add Password</button>
      <ul>
        {passwords.map(password => (
          <li key={password.id}>
            {password.website} | {password.username}: {password.password} 
            <button onClick={() => deletePassword(password.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;