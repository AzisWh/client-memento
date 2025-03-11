'use client';
import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
export const Navbar = () => {
  const [scroll, setScroll] = useState(false);
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
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 transition-all duration-300 ${
        scroll ? 'bg-lime-200 shadow-md' : 'bg-white'
      }`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          {/* <Image src={logo} alt="Logo" className="h-8 w-auto" /> */}
          <h1 className="font-bold">Dhabi Restaurant</h1>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <>
            {token ? (
              <>
                <Button
                  text="Cek History"
                  type="button"
                  onClick={() => navigate('/history')}
                  className="md:flex duration-300 hover:bg-lime-400 text-black hover:text-white bg-[#DAE952]"
                />
                <Button
                  text="Logout"
                  type="button"
                  onClick={handleLogout}
                  className="md:flex duration-300 hover:bg-white text-white hover:text-black bg-red-500"
                />
              </>
            ) : (
              <>
                <Button
                  text="Masuk"
                  type="button"
                  onClick={() => navigate('/login')}
                  className="md:flex duration-300 hover:bg-lime-400 text-black hover:text-white bg-[#DAE952]"
                />
              </>
            )}
          </>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className=" items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
          id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  md:space-x-8 md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="/"
                className={`block py-2 px-3 duration-300 rounded-sm md:bg-transparent md:p-0 ${
                  scroll
                    ? 'text-black'
                    : 'text-gray-400 hover:text-black focus:text-black'
                }`}
                aria-current="page">
                Home
              </a>
            </li>
            <li className="relative">
              <a
                href="/product"
                className={`block py-2 px-3 duration-300 rounded-sm md:bg-transparent md:p-0 ${
                  scroll
                    ? 'text-black'
                    : 'text-gray-400 hover:text-black focus:text-black'
                }`}>
                Product
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
