import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';

import { FoodList } from '../../../type/foodlist';
import { useNavigate } from 'react-router-dom';

interface SwiperSlide {
  foodlist: FoodList[];
}

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Pagination } from 'swiper/modules';

const imageUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpd0GwHqyS9TdoJRmXuz0Y3e2Olpp9w7g_tA&s';

const Slider: React.FC<SwiperSlide> = ({ foodlist }) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const navigate = useNavigate();

  const click = (id: number) => {
    if (!token) {
      alert('Silakan login terlebih dahulu');
      return;
    }
    navigate(`/checkout/${id}`);
  };

  return (
    <>
      <div
        className="flex items-center justify-center flex-col pt-10"
        data-aos="fade-up"
        data-aos-duration="3000">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%]">
          {foodlist.map((foodlist) => (
            <SwiperSlide key={foodlist.id}>
              <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-black rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                    //   backgroundImage: `url(${foodlist.image || imageUrl})`,
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3 bg-white p-2 rounded-xl">
                  <h1 className="text-xl lg:text-2xl font-bold">
                    {foodlist.name}
                  </h1>
                  <p className="text-[10px] lg:text-[18px]">
                    {foodlist.detail}
                  </p>
                  <p className=" lg:text-2xl">${foodlist.price}</p>
                  <button
                    type="button"
                    onClick={() => click(foodlist.id)}
                    disabled={!token}
                    className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
                    ${
                      token
                        ? 'bg-blue-700 hover:bg-blue-800'
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}>
                    {token ? 'Buy' : 'Belum Login'}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
