import axios from 'axios';

const API_URL = 'http://localhost:3000/passwords';

export interface Password {
  id: string;
  website: string;
  username: string;
  password: string;
}

export const fetchPasswords = async (): Promise<Password[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching passwords:', error);
    throw error;
  }
};

export const addPassword = async (password: string, username: string, website: string): Promise<void> => {
  try {
    await axios.post(API_URL, { password, username, website });
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