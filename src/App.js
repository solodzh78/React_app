// import React from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyCxnWv5KbpxOlM8HoLrmbVtbqQ3w7oYRq4",
  authDomain: "mrdonaldsss.firebaseapp.com",
  projectId: "mrdonaldsss",
  storageBucket: "mrdonaldsss.appspot.com",
  messagingSenderId: "1093090726045",
  appId: "1:1093090726045:web:a64bd40ddd81476ad3c474"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function App() {

  const auth = useAuth(app);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order db={db} {...orders} {...openItem} {...auth}/>
      <Menu {...openItem}/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/> }
    </>
  );
}

export default App;
