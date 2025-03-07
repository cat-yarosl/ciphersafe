import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';

interface PasswordFormProps {
  newWebsite: string;
  setNewWebsite: React.Dispatch<React.SetStateAction<string>>;
  newUsername: string;
  setNewUsername: React.Dispatch<React.SetStateAction<string>>;
  newPassword: string;
  setNewPassword: React.Dispatch<React.SetStateAction<string>>;
  addPassword: () => Promise<void>;
}

const PasswordForm: React.FC<PasswordFormProps> = ({
  newWebsite,
  setNewWebsite,
  newUsername,
  setNewUsername,
  newPassword,
  setNewPassword,
  addPassword,
}) => {
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setNewPassword(password);
    const strength = zxcvbn(password).score;
    setPasswordStrength(strength);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPassword();
  };

  const getStrengthColor = (strength: number) => {
    switch (strength) {
      case 0:
        return 'bg-red-500';
      case 1:
        return 'bg-orange-500';
      case 2:
        return 'bg-yellow-500';
      case 3:
        return 'bg-green-400';
      case 4:
        return 'bg-green-600';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="
      flex 
      flex-col 
      space-y-4 
      mb-6
    ">
      <input
        type="text"
        placeholder="Website"
        value={newWebsite}
        onChange={(e) => setNewWebsite(e.target.value)}
        className="
          border 
          p-2 
          rounded 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500
        "
        required
      />
      <input
        type="text"
        placeholder="Username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        className="
          border 
          p-2 
          rounded 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500
        "
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={newPassword}
        onChange={handlePasswordChange}
        className="
          border 
          p-2 
          rounded 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500
        "
        required
      />
      <div className="
        h-2 
        mt-2 
        w-full 
        bg-gray-300 
        rounded
      ">
        <div
          className={`
            h-full 
            rounded 
            ${getStrengthColor(passwordStrength)} 
            transition-all 
            duration-500 
            ease-in-out
          `}
          style={{ width: `${(passwordStrength + 1) * 20}%` }}
        ></div>
      </div>
      <button type="submit" className="
        bg-blue-500 
        text-white 
        p-2 
        rounded 
        hover:bg-blue-600
      ">
        Add Password
      </button>
    </form>
  );
};

export default PasswordForm;