import { OrderResponse } from '../type/order';
import { refreshToken } from './refreshToken';

const ApiUrl = import.meta.env.VITE_API_URL;

export const OrderApi = async (
  foods: { food_id: number; quantity: number }[]
): Promise<OrderResponse> => {
  try {
    const response = await refreshToken.post(`${ApiUrl}/foodbuy`, { foods });
    // console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log('Error:', error.response?.data);
    throw error.response?.data || { message: 'Login failed' };
  }
};
