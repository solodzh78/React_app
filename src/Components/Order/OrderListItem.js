import styled from "styled-components";
import trashImg from '../../image/trash.svg';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunctions';

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

const TrashButton = styled.button`
  height: 24px;
  width: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ToppingsStyled = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: #9A9A9A;
  margin-top: -16px;
`;

export const OrderListItem = ({ order, orders, setOrders, setOpenItem, index }) => {

  const deleteOrder = () => { setOrders(orders.filter(item => item !== order)) };

  const orderOnclick = (e) => {
    e.target.tagName !== "BUTTON" && setOpenItem({ ...order, index, edit: true });
  }

  const toppingSum = order.topping ? 
    order.topping.filter(item => item.checked).map(item => item.name).join(', ') : 
    null;

  return(
    <>
      <OrderItemStyled onClick={orderOnclick}>
        <ItemName>{order.name} {order.choice}</ItemName>
        <span>{order.count}</span>
        <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
        <TrashButton onClick={deleteOrder}/>
      </OrderItemStyled>
      {toppingSum && <ToppingsStyled>
        {toppingSum}
      </ToppingsStyled>}
    </>
  );
}