import { createContext, useContext, useState } from 'react';

const ordersContext = createContext();

const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  return (
    <ordersContext.Provider value={{ orders, setOrders }}>
      {children}
    </ordersContext.Provider>
  );
};

export const useOrderContext = () => useContext(ordersContext);
export { OrderProvider };
