import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { register } from '../../api/auth/route';
import { toast } from 'react-toastify';

interface RegisterProps {
  toggleForm: () => void;
}

const Register: React.FC<RegisterProps> = ({ toggleForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Replace this with your actual registration logic
    if (username && password) {
      await register(username, password);

      // Log the user in after registration
      toggleForm();
    } else {
      toast.error('All fields are required');
    }
  };

  return (
    <div className='
      bg-white 
      p-6 
      rounded-lg 
      shadow-lg
    '>
      <h1 className='
        text-2xl 
        font-bold 
        mb-4
      '>
        Register
      </h1>
      {error && 
        <p className='
          text-red-500 
          text-sm 
          mb-4
        '>
          {error}
        </p>
      }
      <div className='
        flex 
        items-center 
        border 
        rounded 
        mb-4 
        p-2
      '>
        <FaUser className='
          text-gray-500 
          mr-2
        '/>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='
            w-full 
            outline-none
          '
        />
      </div>
      <div className='
        flex 
        items-center 
        border 
        rounded 
        mb-4 
        p-2
      '>
        <FaLock className='
          text-gray-500 
          mr-2
        '/>
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='
            w-full 
            outline-none
          '
        />
      </div>
      <div className='
        flex 
        items-center 
        border 
        rounded 
        mb-4 
        p-2
      '>
        <FaLock className='
          text-gray-500 
          mr-2
        '/>
        <input
          type='password'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className='
            w-full 
            outline-none
          '
        />
      </div>
      <button
        onClick={handleRegister}
        className='
          w-full 
          bg-blue-500 
          text-white 
          p-2 
          rounded 
          hover:bg-blue-600
          cursor-pointer
        '>
        Sign Up
      </button>
      <div className='
        text-center 
        mt-4
      '>
        <p className='text-sm'>
          Already have an account?{' '}
          <button
            onClick={toggleForm}
            className='
              text-blue-500 
              hover:underline
              cursor-pointer
            '>
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;