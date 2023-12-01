import {Showtime} from './Showtimes';

export type SaleItem = {
  id: string;
  price: number;
  name: string;
  qty: number;
  type: 'food' | 'ticket';
  image?: string;
  showtime?: Showtime;
  movie?: string;
  seats?: string[];
  size?: string;
};

export type Cart = {
  items: SaleItem[];
  cartTotal: number;
  clearCart: () => void;
  saveItem: (item: SaleItem) => void;
  removeItem: (item: SaleItem) => void;
  increaseItemQty: (item: SaleItem) => void;
  decreaseItemQty: (item: SaleItem) => void;
};
