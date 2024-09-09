import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Ajusta esto a la URL de tu backend

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const login = (credentials) => api.post('/sign_in', { user: credentials });
export const register = (userData) => api.post('/sign_up', { user: userData });
export const logout = () => api.delete('/sign_out');
export const getPosts = () => api.get('/posts');
export const createPost = (postData) => api.post('/posts', { post: postData });

export default api;