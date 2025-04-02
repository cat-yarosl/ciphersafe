import axios from 'axios';

const API_URL = 'http://localhost:3000/auth';

export const register = async (username: string, password: string): Promise<void> => {
  try {
    await axios.post(API_URL + '/register', { username, password });
  } catch (error) {
    console.error('Error registering:', error);
    throw error;
  }
};

export const login = async (username: string, password: string): Promise<{ id: any; token: any }> => {
  try {
    const res = await axios.post(API_URL + '/login', { username, password });
    const { id, token } = res.data;
    
    return { id, token };
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};