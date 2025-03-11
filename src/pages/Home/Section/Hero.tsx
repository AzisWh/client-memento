import React from 'react';
import { Button } from '../../../components/Button/Button';
import logo from '../../../assets/image/dhabilogo.svg';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 mt-10 md:mt-0 md:px-16 py-10 min-h-[60vh]">
      <div
        className="w-full md:w-1/2 text-center md:text-left space-y-5"
        data-aos="fade-right">
        <h1 className="text-4xl md:text-5xl font-bold">
          All Delicious <br /> <span className="font-bold">Asian</span>
        </h1>
        <p className="text-lg text-gray-600">Eggs, Salad, fruits, pasta</p>
        <a href="#">
          <Button
            text="Find For More"
            type="button"
            onClick={() => console.log('test')}
            className="md:flex duration-300 hover:bg-lime-400 text-[14px] md:text-5xl text-black font-bold hover:text-white bg-[#DAE952]"
          />
        </a>
      </div>

      <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
        <img
          src={logo}
          alt="Hero Image"
          className="md:w-[600px] md:h-[600px] w-[200px] h-[200px] "
        />
      </div>
    </section>
  );
};

export default Hero;
