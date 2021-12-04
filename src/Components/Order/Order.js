import styled from "styled-components";
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunctions';
import { ButtonCheckout } from "../Style/ButtonCheckout";
import { OrderListItem } from "./OrderListItem";

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  background-color: white;
  width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

const OdrerTitle = styled.h2`
  text-align: center
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;

const EmptyList = styled.p`
  text-align: center;
`;

export const Order = ({ orders, setOrders, setOpenItem }) => {

  const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

  const totalCounter = orders.reduce((result, order) => order.count + result, 0);

  return(
    <OrderStyled>
      <OdrerTitle>ВАШ ЗАКАЗ</OdrerTitle>
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
      <Total>
        <span>Итого</span>
        <span>{totalCounter}</span>
        <TotalPrice>{formatCurrency(total)}</TotalPrice>
      </Total>
      <ButtonCheckout>Оформить</ButtonCheckout>
    </OrderStyled>
  );
}