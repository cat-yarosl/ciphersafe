import React from 'react';
import { Password } from '../../types';

interface PasswordListProps {
  passwords: Password[];
  deletePassword: (id: string) => Promise<void>;
}

const PasswordList: React.FC<PasswordListProps> = ({ passwords, deletePassword }) => {
  return (
    <div className="space-y-4">
      {passwords.map((password) => (
        <div key={password.id} className="flex justify-between items-center p-4 border rounded-lg shadow-sm">
          <div>
            <p className="font-semibold">{password.website}</p>
            <p>{password.username}</p>
          </div>
          <button
            onClick={() => deletePassword(password.id)}
            className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default PasswordList;