import axios from 'axios';
import CryptoJS from 'crypto-js';

const API_URL = 'http://localhost:3000/passwords';
const SECRET_KEY = 'your-secret-key'; // Replace with your actual secret key

export interface Password {
  id: string;
  website: string;
  username: string;
  password: string;
}

const encryptPassword = (password: string): string => {
  return CryptoJS.AES.encrypt(password, SECRET_KEY).toString();
};

const decryptPassword = (encryptedPassword: string): string => {
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const fetchPasswords = async (): Promise<Password[]> => {
  try {
    const response = await axios.get(API_URL);
    const decryptedPasswords = response.data.map((password: Password) => ({
      ...password,
      password: decryptPassword(password.password),
    }));
    return decryptedPasswords;
  } catch (error) {
    console.error('Error fetching passwords:', error);
    throw error;
  }
};

export const addPassword = async (password: string, username: string, website: string): Promise<void> => {
  try {
    const encryptedPassword = encryptPassword(password);
    await axios.post(API_URL, { password: encryptedPassword, username, website });
  } catch (error) {
    console.error('Error adding password:', error);
    throw error;
  }
};

export const deletePassword = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting password:', error);
    throw error;
  }
};