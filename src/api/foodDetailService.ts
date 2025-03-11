import axios from 'axios';
import { FoodList } from '../type/foodlist';

const ApiUrl = import.meta.env.VITE_API_URL;

export const foodDetailApi = async (id: number): Promise<FoodList> => {
  const response = await axios.get(`${ApiUrl}/fooddetail/${id}`);
  return response.data;
};
