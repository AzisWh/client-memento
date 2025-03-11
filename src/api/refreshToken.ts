import axios from 'axios';
import { logout, setToken } from '../redux/auth/authSlice';
import { store } from '../redux/store';

const ApiUrl = import.meta.env.VITE_API_URL;

export const refreshToken = axios.create({
  baseURL: ApiUrl,
  headers: { 'Content-Type': 'application/json' },
});

refreshToken.interceptors.request.use(
  (config) => {
    // redux token
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

refreshToken.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        const refreshResponse = await axios.post(`${ApiUrl}/refresh`, null, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const newToken = refreshResponse.data.authorization.token;
        localStorage.setItem('token', newToken);
        store.dispatch(setToken(newToken));

        // Ulangi request yang gagal dengan token baru
        error.config.headers.Authorization = `Bearer ${newToken}`;
        return axios(error.config);
      } catch (refreshError) {
        console.error('Refresh token failed:', refreshError);
        store.dispatch(logout());
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);
