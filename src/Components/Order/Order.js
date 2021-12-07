import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../Functions/context";
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunctions';
import { ButtonCheckout } from "../Style/ButtonCheckout";
import { OrderTitle, Total, TotalPrice,  } from "../Style/ItemsForModal";
import { OrderListItem } from "./OrderListItem";

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;export 
  left: 0;
  background-color: white;
  width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const EmptyList = styled.p`
  text-align: center;
`;

export const Order = () => {

  const { 
    orders: { orders, setOrders }, 
    openItem: { setOpenItem },
    auth: { authentification, logIn },
    orderConfirm: { setOpenOrderConfirm }
  } = useContext(Context);

  const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

  const totalCounter = orders.reduce((result, order) => order.count + result, 0);

  const onClickCheckOut = () => !authentification ? logIn() : setOpenOrderConfirm(true);

  return(
    <OrderStyled>
      <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
      <OrderContent>
        {orders.length ?
        <OrderList>
          {orders.map((item, index) => (
            <OrderListItem 
              key={index}
              index={index}
              orders={orders} 
              setOrders={setOrders} 
              order={item}
              setOpenItem={setOpenItem}
            />))
          }
        </OrderList> :
        <EmptyList>Список заказов пуст</EmptyList>}
      </OrderContent>
      {orders.length > 0 &&
        <>
          <Total>
            <span>Итого</span>
            <span>{totalCounter}</span>
            <TotalPrice>{formatCurrency(total)}</TotalPrice>
          </Total>
          <ButtonCheckout onClick={onClickCheckOut}>Оформить</ButtonCheckout>
        </>
      }
    </OrderStyled>
  );
}