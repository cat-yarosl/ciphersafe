import React from 'react';

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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPassword();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Website"
        value={newWebsite}
        onChange={(e) => setNewWebsite(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Password
      </button>
    </form>
  );
};

export default PasswordForm;