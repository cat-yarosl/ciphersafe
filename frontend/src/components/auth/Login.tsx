import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { login } from '../../api/auth/route';
import { toast } from 'react-toastify';

interface LoginProps {
  toggleForm: () => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ toggleForm, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State for 'Remember Me'

  const handleLogin = async () => {
    // Replace this with your actual login logic
    if (username && password) {
      await login(username, password);
      setIsLoggedIn(true); // Log the user in
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
        Login
      </h1>
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
        mb-4
      '>
        <input
          type='checkbox'
          id='rememberMe'
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className='
            mr-2 
            cursor-pointer
          '
        />
        <label htmlFor='rememberMe' className='text-sm'>
          Remember Me
        </label>
      </div>
      <button
        onClick={handleLogin}
        className='
          w-full 
          bg-blue-500 
          text-white 
          p-2 
          rounded 
          mb-4
          cursor-pointer
        '>
        Login
      </button>
      <div className='text-center'>
        <a
          href='#'
          className='
            text-blue-500 
            hover:underline 
            text-sm 
            block 
            mb-2
          '>
          Forgot Password?
        </a>
        <p className='text-sm'>
          Don't have an account?{' '}
          <button
            onClick={toggleForm}
            className='
              text-blue-500 
              hover:underline
              cursor-pointer
            '>
            Sign up now
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;