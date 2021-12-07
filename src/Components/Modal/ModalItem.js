import React from 'react';
import styled from "styled-components";
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunctions';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppins } from '../Hooks/useTopping';
import { useChoices } from '../Hooks/useChoices';
import { Overlay } from '../Style/ItemsForModal';
import { useContext } from 'react/cjs/react.development';
import { Context } from '../Functions/context';
import { ContextItem } from '../Functions/contextItem';



const Modal = styled.div`
  position: relative;
  background-color: #fff;
  width: 600px;
  height: 600px;
`;

const Banner = styled.div`
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 200px);
  padding: 30px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Pacifico', cursive;
  font-weight: 700;
  font-size: 30px;
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalItem = () => {

  const { openItem: { openItem, setOpenItem }, orders: { orders, setOrders } } = useContext(Context);
  const counter = useCount(openItem);
  const toppings = useToppins(openItem);
  const choices = useChoices(openItem);

  const closeModal = e => { 
    if (e.target.id === 'overlay') setOpenItem(null);
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    setOpenItem(null);
  };

  const addToOrder = e => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <ContextItem.Provider value={ { counter, toppings, choices, openItem } }>
      <Overlay id="overlay" onClick={closeModal}>
        <Modal>
          <Banner img={openItem.img} />
          <Content>
            <HeaderContent>
              <p>{openItem.name}</p>
              <p>{formatCurrency(openItem.price)}</p>
            </HeaderContent>
            <CountItem/>
            {openItem.toppings && <Toppings/>}
            {openItem.choices && <Choices/>}
            <TotalPriceItem>
              <span>Цена:</span>
              <span>{formatCurrency(totalPriceItems(order))}</span>
            </TotalPriceItem>
            <ButtonCheckout onClick={openItem.edit ? editOrder : addToOrder}>
              {openItem.edit ? "Редактировать" : "Добавить"}
            </ButtonCheckout>
          </Content>
        </Modal>
      </Overlay>
    </ContextItem.Provider>
    
  )
};