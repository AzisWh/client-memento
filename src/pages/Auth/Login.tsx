import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser, logout } from '../../redux/auth/authSlice';
import { RootState, AppDispatch } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, token, loading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      try {
        const Loginresult = await dispatch(
          loginUser({ email: form.email, password: form.password })
        ).unwrap();
        if (Loginresult.authorization?.token) {
          Swal.fire({
            title: 'Login Berhasil!',
            text: `Selamat datang, ${Loginresult.user.name}!`,
            icon: 'success',
            timer: 2000,
            showConfirmButton: false,
          });
          navigate('/', { replace: true });
        }
      } catch (error) {
        Swal.fire({
          title: 'Login Gagal',
          text: 'Periksa kembali email dan password!',
          icon: 'error',
        });
        console.error('Login failed:', error);
      }
    } else {
      try {
        const Regsitresult = await dispatch(
          registerUser({
            name: form.name,
            email: form.email,
            password: form.password,
          })
        ).unwrap();

        const loginResult = await dispatch(
          loginUser({ email: form.email, password: form.password })
        ).unwrap();

        if (loginResult.authorization?.token) {
          Swal.fire({
            title: 'Registrasi Berhasil!',
            text: 'Anda telah berhasil terdaftar dan masuk.',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false,
          });
          navigate('/', { replace: true });
        }
      } catch (error) {
        Swal.fire({
          title: 'Registrasi Gagal',
          text: 'Email mungkin sudah terdaftar atau ada kesalahan lainnya',
          icon: 'error',
        });
        console.error('Register failed:', error);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">
          {isLogin ? 'Login' : 'Register'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
              className="w-full p-2 border rounded pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500">
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
            {loading ? 'Processing...' : isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-500 mt-4 block text-center">
          {isLogin ? 'Belum punya akun? Daftar' : 'Sudah punya akun? Login'}
        </button>
      </div>
    </div>
  );
};

export default Login;
