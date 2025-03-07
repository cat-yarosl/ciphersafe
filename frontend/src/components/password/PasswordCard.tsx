import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCopy } from '@fortawesome/free-solid-svg-icons';
import { Password } from '../../types';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

interface PasswordCardProps {
  password: Password;
  deletePassword: (id: string) => Promise<void>;
  isVisible: boolean;
  toggleVisibility: () => void;
}

const PasswordCard: React.FC<PasswordCardProps> = ({ 
    password, 
    deletePassword, 
    isVisible, 
    toggleVisibility 
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password.password);
    toast.success('Password copied to clipboard!');
  };
  
  return (
    <div className="
      relative 
      p-2 
      border 
      rounded-lg 
      shadow-sm
    ">
      <div className="
        absolute 
        top-2 
        right-2.5
      ">
        <button
          onClick={() => deletePassword(password.id)}
          className="
            text-gray-500 
            hover:text-gray-600 
            cursor-pointer
          "
        >
          &times;
        </button>
      </div>
      <div>
        <p className="font-semibold">
          {password.website}
        </p>
        <div className="
          flex 
          flex-row 
          justify-between
        ">
          <p>{password.username}</p>
          <p>
            {isVisible ? password.password : '••••••••••••••••'}
            <button
              onClick={toggleVisibility}
              className="
                ml-2 
                text-blue-200 
                hover:underline 
                cursor-pointer
              "
            >
              <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
            </button>
            <button
              onClick={copyToClipboard}
              className="
                ml-2 
                text-blue-200 
                hover:underline 
                cursor-pointer
              "
            >
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordCard;