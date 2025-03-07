import { useState, useEffect } from 'react';
import { fetchPasswords, addPassword, deletePassword } from './api/passwords/route';
import { Password } from './types';
import PasswordForm from './components/PasswordForm';
import PasswordList from './components/PasswordList';

function App() {
  const [passwords, setPasswords] = useState<Password[]>([]);
  const [newPassword, setNewPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newWebsite, setNewWebsite] = useState('');

  useEffect(() => {
    loadPasswords();
  }, []);

  const loadPasswords = async () => {
    const data = await fetchPasswords();
    setPasswords(data);
  };

  const handleAddPassword = async () => {
    await addPassword(newPassword, newUsername, newWebsite);
    setNewPassword('');
    setNewUsername('');
    setNewWebsite('');
    loadPasswords();
  };

  const handleDeletePassword = async (id: string): Promise<void> => {
    await deletePassword(id);
    loadPasswords();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Password Manager</h1>
      <PasswordForm 
        newWebsite={newWebsite}
        setNewWebsite={setNewWebsite}
        newUsername={newUsername}
        setNewUsername={setNewUsername}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        addPassword={handleAddPassword}
      />
      <PasswordList passwords={passwords} deletePassword={handleDeletePassword} />
    </div>
  );
};

export default App;