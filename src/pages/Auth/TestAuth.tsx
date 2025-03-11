import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const TestAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    Swal.fire({
      title: 'Berhasil Logout',
      text: `Berhasil Logout`,
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
    });
    navigate('/login');
  };
  return (
    <div>
      <nav
        style={{
          display: 'flex',
          gap: '20px',
          padding: '10px',
          borderBottom: '1px solid #ccc',
        }}>
        {token ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
      <h1>ehehnak</h1>
    </div>
  );
};

export default TestAuth;
