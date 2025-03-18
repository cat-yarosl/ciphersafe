import axios from 'axios';
import CryptoJS from 'crypto-js';

const API_URL = 'http://localhost:3000/auth';
const SECRET = 'your-secret'

const encryptPassword = (password: string): string => {
  return CryptoJS.AES.encrypt(password, SECRET).toString();
};

export const register = async (username: string, password: string): Promise<void> => {
  const encryptedPassword = encryptPassword(password);

  try {
    await axios.post(API_URL + '/register', { username, encryptedPassword });
  } catch (error) {
    console.error('Error registering:', error);
    throw error;
  }
};

export const login = async (username: string, password: string): Promise<void> => {
  const encryptedPassword = encryptPassword(password);

  try {
    await axios.post(API_URL + '/login', { username, encryptedPassword });
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};