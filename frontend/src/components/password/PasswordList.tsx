import React, { useState } from 'react';
import { Password } from '../../types';
import PasswordCard from './PasswordCard';

interface PasswordListProps {
  passwords: Password[];
  deletePassword: (id: string) => Promise<void>;
}

const PasswordList: React.FC<PasswordListProps> = ({ passwords, deletePassword }) => {
  const [visiblePasswords, setVisiblePasswords] = useState<{ [key: string]: boolean }>({});

  const togglePasswordVisibility = (id: string) => {
    setVisiblePasswords(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="space-y-4">
      {passwords.map((password) => (
        <PasswordCard
          key={password.id}
          password={password}
          deletePassword={deletePassword}
          isVisible={visiblePasswords[password.id]}
          toggleVisibility={() => togglePasswordVisibility(password.id)}
        />
      ))}
    </div>
  );
};

export default PasswordList;