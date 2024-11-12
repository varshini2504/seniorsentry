import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/auth';

export const registerUser = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, { username, password });
    console.log(response.data.message);
  } catch (error) {
    console.error('Error registering user', error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { username, password });
    const token = response.data.token;
    localStorage.setItem('token', token); // Save the token for future requests
    console.log('Logged in successfully');
    return token;
  } catch (error) {
    console.error('Error logging in', error);
  }
};
