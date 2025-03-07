import { useState, useEffect } from 'react';
import { fetchPasswords, addPassword, deletePassword } from './api/passwords/route';
import { Password } from './types';
import Header from './components/Header';
import PasswordForm from './components/password/PasswordForm';
import PasswordList from './components/password/PasswordList';
import SearchBar from './components/search/SearchBar';

function App() {
  const [passwords, setPasswords] = useState<Password[]>([]);
  const [newPassword, setNewPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newWebsite, setNewWebsite] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredPasswords = passwords.filter(password =>
    password.website.toLowerCase().includes(searchQuery.toLowerCase()) ||
    password.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto max-w-120 mt-4 p-4 bg-gray-100 max-h-200">
      <Header 
        text="Password Manager" 
        subText="Store your passwords securely" 
        imgSrc='../public/lock.png'
      />
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <PasswordForm 
          newWebsite={newWebsite}
          setNewWebsite={setNewWebsite}
          newUsername={newUsername}
          setNewUsername={setNewUsername}
          newPassword={newPassword}
          setNewPassword={setNewPassword}
          addPassword={handleAddPassword}
        />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <PasswordList passwords={filteredPasswords} deletePassword={handleDeletePassword} />
      </div>
    </div>
  );
};

export default App;