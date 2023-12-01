import React, {createContext, useEffect, useState} from 'react';
import {SaleItem, Cart} from '../@types/Sale';

export const CartContext = createContext<Cart | null>(null);

export const CartProvider = ({children}) => {
  const [items, setItems] = useState<SaleItem[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);

  const saveItem = (item: SaleItem) => {
    setItems([...items, item]);
  };

  const clearCart = () => {
    setItems([]);
  };

  const removeItem = (item: SaleItem) => {
    setItems(prevState => prevState.filter(i => i.id !== item.id));
  };

  const increaseItemQty = (item: SaleItem) => {
    setItems(prevState =>
      prevState.map(i => {
        if (i.id === item.id) {
          return {...i, qty: i.qty + 1};
        }
        return i;
      }),
    );
  };

  const decreaseItemQty = (item: SaleItem) => {
    setItems(prevState =>
      prevState.map(i => {
        if (i.id === item.id) {
          return {...i, qty: i.qty - 1 >= 0 ? i.qty - 1 : 0};
        }
        return i;
      }),
    );
  };

  useEffect(() => {
    const totalAmt = items.reduce((acc, cur) => {
      return acc + cur.price * cur.qty;
    }, 0);
    setCartTotal(totalAmt);
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        cartTotal,
        clearCart,
        removeItem,
        saveItem,
        increaseItemQty,
        decreaseItemQty,
      }}>
      {children}
    </CartContext.Provider>
  );
};
