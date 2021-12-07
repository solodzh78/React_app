import styled from "styled-components";
import { Overlay, OrderTitle, Total, TotalPrice } from "../Style/ItemsForModal";
import { ButtonCheckout } from "../Style/ButtonCheckout";
import { totalPriceItems, formatCurrency, projection } from '../Functions/secondaryFunctions';
import { ref, set, push } from "firebase/database";
import { db } from "../Firebase/firebaseConfig";
import { useContext } from "react/cjs/react.development";
import { Context } from "../Functions/context";

const Modal = styled.div`
  background-color: white;
  width: 600px;
  padding: 30px;
`;

const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  toppings: ['topping', arr => (arr
    ? (arr.filter(item => item.checked).map(item => item.name).length
      ? arr.filter(item => item.checked).map(item => item.name) : 'no toppings')
    : 'no toppings')],
  choice: ['choice', item => item ? item : 'no choices'],
};

const sendOrder = (db, orders, authentification) => {
  const newOrder = orders.map(projection(rulesData));

  const ordersListRef = ref(db, 'orders');
  set(push(ordersListRef), {
    clientName: authentification.displayName,
    email: authentification.email,
    order: newOrder
  });
};

export const OrderConfirm = () => {

  const { 
    orders: { orders, setOrders },
    auth: { authentification },
    orderConfirm: { setOpenOrderConfirm }
  } = useContext(Context);

  const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

  const closeModal = e => {
    if (e.target.id === 'overlay') setOpenOrderConfirm(false);
  };

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <OrderTitle>{authentification.displayName}</OrderTitle>
        <Text>Осталось только подтвердить ваш заказ</Text>
        <Total>
          <span>Итого</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <ButtonCheckout
          onClick={() => {
            sendOrder(db, orders, authentification);
            setOrders([]);
            setOpenOrderConfirm(false)
          }}>Подтвердить</ButtonCheckout>
      </Modal>
    </Overlay>
  );
};