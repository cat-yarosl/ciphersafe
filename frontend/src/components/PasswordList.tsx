import React from 'react';

interface Password {
  id: string;
  username: string;
  password: string;
  website: string;
}

interface PasswordListProps {
  passwords: Password[];
  deletePassword: (id: string) => void;
}

const PasswordList: React.FC<PasswordListProps> = ({ passwords, deletePassword }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Saved Passwords</h2>
      <ul className="mt-2 space-y-2">
        {passwords.map((password) => (
          <li key={password.id} className="flex justify-between items-center p-4 border rounded shadow">
            <div>
              <p className="font-medium">{password.website}</p>
              <p className="text-sm text-gray-600">Username: {password.username}</p>
            </div>
            <button
              onClick={() => deletePassword(password.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordList;