import React, { useEffect, useState } from 'react';
import { UserOrderHistory } from '../../api/getOrderService';
import { OrderHistoryResponse } from '../../type/order';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { Button } from '../../components/Button/Button';

const OrderHistory: React.FC = () => {
  const [orderHistory, setOrderHistory] = useState<OrderHistoryResponse | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await UserOrderHistory();
        setOrderHistory(response);
      } catch (error) {
        console.error('Error fetching order history:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!orderHistory || orderHistory.purchases.length === 0)
    return <p>No purchase history .</p>;

  const imageUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpd0GwHqyS9TdoJRmXuz0Y3e2Olpp9w7g_tA&s';

  return (
    <div className="relative bg-[#DAE952]/20">
      <Navbar />
      <div className="relative pt-10 ">
        <div className="p-6 mt-24 md:mt-10 space-y-6">
          <h1 className="text-2xl font-bold mb-4 " data-aos="fade-up">
            Order History
          </h1>
          <div data-aos="fade-up">
            <Button
              text="Back to Product"
              type="button"
              onClick={() => navigate('/product')}
              className="md:flex duration-300 hover:bg-lime-400 text-black hover:text-white bg-[#DAE952]"
            />
          </div>
          {orderHistory.purchases.map((purchase) => (
            <div
              data-aos="fade-up"
              key={purchase.id}
              className="border p-4 mb-4 rounded-lg shadow-lg">
              <img
                src={imageUrl || purchase.food.image}
                alt={purchase.food.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold">{purchase.food.name}</h2>
              <p>Quantity: {purchase.quantity}</p>
              <p>Total Price: ${purchase.total_price}</p>
              <p className="text-sm text-gray-500">
                Purchased on:{' '}
                {new Date(purchase.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
