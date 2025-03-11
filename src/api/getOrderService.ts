import { OrderHistoryResponse } from '../type/order';
import { refreshToken } from './refreshToken';

const ApiUrl = import.meta.env.VITE_API_URL;

export const UserOrderHistory = async (): Promise<OrderHistoryResponse> => {
  try {
    const response = await refreshToken.get(`${ApiUrl}/userFood`);

    return response.data;
  } catch (error: any) {
    console.log('Error:', error.response?.data);
    throw error.response?.data || { message: 'failed to load order history' };
  }
};
