import styled from "styled-components";
import trashImg from '../../image/trash.svg';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunctions';

const OrderItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 15px 0;
  cursor: pointer;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 10px;
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
  width: 100%;
  font-size: 14px;
  line-height: 16px;
  color: #9A9A9A;
`;

const Item2Part = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-between;
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
        <Item2Part>
          <ItemName>{order.name} {order.choice}</ItemName>
          <span>{order.count}</span>
        </Item2Part>
        <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
        <TrashButton onClick={deleteOrder}/>
        {toppingSum && <ToppingsStyled>
        {toppingSum}
      </ToppingsStyled>}
      </OrderItemStyled>
    </>
  );
}