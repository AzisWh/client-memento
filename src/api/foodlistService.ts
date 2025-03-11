import axios from 'axios';
import { FoodList } from '../type/foodlist';

const ApiUrl = import.meta.env.VITE_API_URL;

export const foodListApi = async (): Promise<FoodList[]> => {
  const response = await axios.get(`${ApiUrl}/foodlist`);
  return response.data;
};
