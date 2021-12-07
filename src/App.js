// import React from 'react';
import { app } from './Components/Firebase/firebaseConfig';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';

function App() {

  const auth = useAuth(app);
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();

  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm
    }}>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu/>
      {openItem.openItem && <ModalItem/> }
      {orderConfirm.openOrderConfirm && 
        <OrderConfirm/>}
    </Context.Provider>
  );
}

export default App;
