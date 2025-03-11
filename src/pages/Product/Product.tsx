import { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { foodListApi } from '../../api/foodlistService';
import { FoodList } from '../../type/foodlist';
import Slider from './Section/Slider';

const Product = () => {
  const [food, setFood] = useState<FoodList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const foodList = async () => {
      try {
        const data = await foodListApi();
        setFood(data);
      } catch (err) {
        setError('Failed to fetch food');
      } finally {
        setLoading(false);
      }
    };

    foodList();
  }, []);

  if (loading) return <p className="text-center mx-auto">Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="relative w-full">
      <Navbar />
      <div className="relative pt-10 bg-[#DAE952]/20">
        <div className="pt-10 text-center space-y-5" data-aos="fade-up">
          <h1 className="text-4xl font-semibold mt-10">
            Our Delicious and Special Salad <br />{' '}
            <span className="text-[#DAE952]">Asian</span>
          </h1>
          <p>
            Food is any substance consumed by an organism for nutritional
            support.
          </p>
        </div>
        <Slider foodlist={food} />
      </div>
      <div className="mt-10 md:mt-0 md:p-[80px]">
        <Footer />
      </div>
    </div>
  );
};

export default Product;
