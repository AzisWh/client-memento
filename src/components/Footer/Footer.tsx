'use client';
import React from 'react';
import logo from '@/public/image/logo.svg';

export const Footer = () => {
  return (
    <section data-aos="fade-up">
      <div className="block md:hidden px-6 pt-16 pb-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-[#8BAC3E] transition duration-300">
            <h1>image</h1>
            <h1 className="text-[#757575] text-[14px]">Home</h1>
          </div>
          <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-[#8BAC3E] transition duration-300">
            <h1>image</h1>
            <h1 className="text-[#757575] text-[14px]">Promotion</h1>
          </div>
          <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-[#8BAC3E] transition duration-300">
            <h1>image</h1>
            <h1 className="text-[#757575] text-[14px]">Other</h1>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center">
        <footer className="bg-[#fff] py-10 rounded-2xl w-full">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <a
                  href="https://www.elemesgroup.com/"
                  target="_blank"
                  className="flex items-center">
                  <h1>iamge</h1>
                </a>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                  quis vitae natus repudiandae, maxime voluptate nobis ratione
                  totam excepturi temporibus quibusdam quos aspernatur, facere
                  tempore fugit laudantium. Autem, ratione. Magni.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>Salad</li>
                  <li>Salad</li>
                  <li>Salad</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>About Us</li>
                  <li>FAQ</li>
                  <li>Report Problem</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Get now free 50% discount for all products on your first order
                </p>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2 flex-1 text-sm focus:outline-none"
                  />
                  <button className="bg-[#8BAC3E] text-white px-4 py-2">
                    SEND
                  </button>
                </div>
                <div className="mt-8 flex flex-col items-start space-x-6 space-y-6">
                  <div className="flex flex-row gap-2">
                    <span className="text-black text-sm">mail@example.com</span>
                  </div>

                  <div className="flex flex-row gap-2">
                    <span className="text-black text-sm">0888 111 2222</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="md:flex hidden justify-center md:pt-8">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2025{' '}
          <a href="#" target="_blank" className="hover:underline duration-200">
            Memento
          </a>
          All rights reserved.
        </span>
      </div>
    </section>
  );
};
