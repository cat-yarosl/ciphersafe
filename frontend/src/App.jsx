import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [credentials, setCredentials] = useState([]);
  const [newCredential, setNewCredential] = useState('');

  useEffect(() => {
    fetchCredentials();
  }, []);

  const fetchCredentials = async () => {
    const response = await axios.get('http://localhost:3000/credentials');
    setCredentials(response.data);
  };

  const addCredential = async () => {
    await axios.post('http://localhost:3000/passwords', { credential: newCredential });
    setNewCredential('');
    fetchCredentials();
  };

  const deleteCredential = async (id) => {
    await axios.delete(`http://localhost:3000/passwords/${id}`);
    fetchCredentials();
  };

  return (
    <div>
      <input 
        type="text" 
        value={newWebsite}
        onChange={(e) => setNewWebsite(e.target.value)} 
      />
      <input 
        type="text" 
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)} 
      />
      <input 
        type="text" 
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)} 
      />
      <button onClick={addCredential}>Add Password</button>
      <ul>
        {credentials.map(credential => (
          <li key={credential.id}>
            {credential.credential} 
            <button onClick={() => deleteCredential(credential.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
