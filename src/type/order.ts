import { FoodList } from './foodlist';

export interface OrderItem {
  food_name: string;
  quantity: number;
  price_per_item: string;
  subtotal: number;
}

export interface OrderResponse {
  message: string;
  user: string;
  total_price: number;
  items: OrderItem[];
}

// history
export interface OrderHistoryResponse {
  message: string;
  purchases: OrderDetail[];
}

export interface OrderDetail {
  id: number;
  user_id: number;
  food_id: number;
  quantity: number;
  total_price: string;
  created_at: string;
  updated_at: string;
  food: FoodList;
}
