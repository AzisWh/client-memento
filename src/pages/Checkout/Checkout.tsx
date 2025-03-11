import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { foodDetailApi } from '../../api/foodDetailService';
import { FoodList } from '../../type/foodlist';
import { useNavigate } from 'react-router-dom';
import { OrderApi } from '../../api/foodOrderService';
import Swal from 'sweetalert2';
import { Navbar } from '../../components/Navbar/Navbar';
import piring from '../../assets/image/piring.png';
import garpu from '../../assets/image/garpu.png';
import sendok from '../../assets/image/sendok.png';

const Checkout: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [food, setFood] = useState<FoodList | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    foodDetailApi(Number(id))
      .then((data) => {
        setFood(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching food detail:', error);
        setLoading(false);
      });
  }, [id]);

  const order = async () => {
    if (!food) return;

    try {
      const response = await OrderApi([{ food_id: food.id, quantity }]);

      Swal.fire({
        icon: 'success',
        title: 'berhasil!',
        text: `You have purchased ${quantity}x ${food.name} for $${response.total_price}`,
      });
      navigate('/history');
    } catch (error) {
      console.error('Error purchasing food:', error);

      Swal.fire({
        icon: 'error',
        title: 'gagal',
        text: 'There was an error processing your order. Please try again.',
      });
    }
  };

  const imageUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpd0GwHqyS9TdoJRmXuz0Y3e2Olpp9w7g_tA&s';

  if (loading) return <p>Loading...</p>;
  if (!food) return <p>Data not found</p>;
  return (
    <div className="relative w-full">
      <Navbar />
      <div className="relative pt-10 md:mt-[25px] ">
        <div className="relative flex justify-center items-center h-64 pt-10 bg-[#DAE952]/20">
          <img
            src={piring}
            alt="/"
            className="w-40 md:w-64 md:mt-10 absolute z-10"
            data-aos="fade-up"
          />

          <img
            src={sendok}
            alt="/"
            className="w-16 md:w-30 absolute md:mt-10 left-1/3 -rotate-12 z-10"
            data-aos="fade-right"
          />

          <img
            src={garpu}
            alt="/"
            className="w-16 md:w-30 absolute md:mt-10 right-1/3 rotate-12 z-10"
            data-aos="fade-left"
          />
        </div>
      </div>
      <div className="relative">
        <div
          className="flex flex-col md:flex-row items-center md:items-start p-6 bg-white text-black md:pt-24"
          data-aos="fade-up">
          <div className="md:w-1/2 flex justify-center ">
            <img
              src={imageUrl || food.image}
              alt={food.name || 'Food'}
              className="w-64 h-64 object-cover rounded-lg mb-4 md:mb-0"
            />
          </div>

          <div className="md:w-1/2 flex flex-col items-center md:items-start md:pl-10 border-2 rounded-2xl p-4">
            <h1 className="text-3xl font-bold mb-4">{food.name}</h1>
            <p className="text-lg">{food.detail}</p>
            <p className="text-xl font-bold mt-2">${food.price}</p>
            {/* quantity */}
            <div className="flex items-center my-4">
              <button
                className="px-3 py-1 bg-gray-500 rounded-lg"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
                -
              </button>
              <span className="mx-3">{quantity}</span>
              <button
                className="px-3 py-1 bg-gray-500 rounded-lg"
                onClick={() => setQuantity((prev) => prev + 1)}>
                +
              </button>
            </div>

            <button
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg mt-4"
              onClick={order}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
