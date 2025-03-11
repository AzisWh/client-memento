import { useState, useEffect } from 'react';
import Hero from './Section/Hero';
import { Navbar } from '../../components/Navbar/Navbar';
import About from './Section/About';
import { Footer } from '../../components/Footer/Footer';

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <p className="text-center mx-auto">Loading...</p>;
  return (
    <div className="relative w-full">
      <Navbar />
      <div className="relative p-10 ">
        <Hero />
      </div>
      <div className="relative pt-10 bg-[#DAE952]/20">
        <About />
      </div>
      <div className="mt-10 md:mt-0 md:p-[80px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
