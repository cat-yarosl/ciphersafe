import { useState, useEffect } from 'react';
import { fetchPasswords, addPassword, deletePassword } from './api/passwords/route';
import { Password } from './types';
import Header from './components/Header';
import PasswordForm from './components/password/PasswordForm';
import PasswordList from './components/password/PasswordList';
import SearchBar from './components/search/SearchBar';
import Page from './components/auth/Page';
import { ToastContainer } from 'react-toastify';

function App() {
  const [passwords, setPasswords] = useState<Password[]>([]);
  const [newPassword, setNewPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newWebsite, setNewWebsite] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  useEffect(() => {
    if (isLoggedIn) {
      loadPasswords();
    }
  }, [isLoggedIn]);

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

  const handleLogout = () => {
    setIsLoggedIn(false); // Log the user out
  };

  const filteredPasswords = passwords.filter(password =>
    password.website.toLowerCase().includes(searchQuery.toLowerCase()) ||
    password.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render login portal if the user is not logged in
  if (!isLoggedIn) {
    return <Page setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div className='flex flex-row'>
      <div className='
        container 
        max-w-120 
        mt-4 
        ml-4
        p-4 
        bg-gray-100 
        max-h-200
        rounded-lg
      '>
        <Header 
          text='Password Manager' 
          subText='Store your passwords securely' 
          imgSrc='/lock.png'
        />
        <div className='
          bg-white 
          p-6 
          rounded-lg 
          shadow-lg
        '>
          <PasswordForm 
            newWebsite={newWebsite}
            setNewWebsite={setNewWebsite}
            newUsername={newUsername}
            setNewUsername={setNewUsername}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            addPassword={handleAddPassword}
          />
          <SearchBar 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
          />
          <PasswordList 
            passwords={filteredPasswords} 
            deletePassword={handleDeletePassword} 
          />
        </div>
        <ToastContainer />
      </div>
      <div className='p-4'>
        <button
          onClick={handleLogout}
          className='
            bg-red-500 
            text-white 
            px-4 
            py-2 
            mt-4
            rounded 
            hover:bg-red-600
          '>
          Logout
        </button>
      </div>
    </div>
  );
};

export default App;