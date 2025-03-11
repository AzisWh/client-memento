import { Button } from '../../../components/Button/Button';
import piring from '../../../assets/image/piring.svg';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-6 min-h-[60vh]">
      <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
        <img
          src={piring}
          alt="/"
          className="md:w-[600px] md:h-[600px] w-[300px] h-[300px] "
        />
      </div>
      <div
        className="w-full md:w-1/2 text-center md:text-left space-y-5 flex flex-col justify-center items-center "
        data-aos="fade-right">
        <h1 className="text-4xl text-center md:text-5xl font-bold">
          Welcome to our <br /> <span className="text-[#DAE952]">Dhabi</span>{' '}
          Restaurant
        </h1>
        <p className="text-lg text-gray-600 text-center">
          food, substance consisting essentially of protein, carbohydrate, fat,
          and other nutrients used in the body of an organism to sustain growth
          and vital processes and to furnish energy. The absorption and
          utilization of food by the body is fundamental to nutrition and is
          facilitated by digestion
        </p>
        <a href="#" className="align-center">
          <Button
            text="Find for Our Product"
            type="button"
            onClick={() => navigate('/product')}
            className="md:flex duration-300 hover:bg-lime-400 text-[18px] text-black font-bold hover:text-white bg-[#DAE952]"
          />
        </a>
      </div>
    </section>
  );
};

export default About;
