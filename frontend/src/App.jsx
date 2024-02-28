import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');
  const [passwords, setPasswords] = useState([]);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    fetchCredentials();
  }, []);

  const fetchPasswords = async () => {
    const response = await axios.get('http://localhost:3000/passwords');
    setCredentials(response.data);
  };

  const addPassword = async () => {
    await axios.post('http://localhost:3000/passwords', { website, username, password: newPassword });
    setNewPassword('');
    setWebsite('');
    setUsername('');
    fetchPasswords();
  };

  const deletePassword = async (id) => {
    await axios.delete(`http://localhost:3000/passwords/${id}`);
    fetchCredentials();
  };

  return (
    <div>
      <input 
        type="text" 
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)} 
      />
      <button onClick={addPassword}>Add Password</button>
      <ul>
        {passwords.map(password => (
          <li key={password.id}>
            {password.password} 
            <button onClick={() => deletePassword(password.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
