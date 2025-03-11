import axios from 'axios';
import { AuthType } from '../type/auth';

const ApiUrl = import.meta.env.VITE_API_URL;

export const login = async (email: string, password: string) => {
  try {
    // console.log('Sending Login Request:', { email, password });
    const response = await axios.post(
      `${ApiUrl}/login`,
      {
        email,
        password,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
    // console.log('Login Response:', response.data);
    return response.data;
  } catch (error: any) {
    console.log('Login Error:', error.response?.data);
    throw error.response?.data || { message: 'Login failed' };
  }
};

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post<AuthType>(
      `${ApiUrl}/register`,
      {
        name,
        email,
        password,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
    console.log('Response:', response.data);
    return response.data;
  } catch (error: any) {
    console.log('Register Error:', error.response?.data);
    throw error.response?.data || { message: 'Register failed' };
  }
};
