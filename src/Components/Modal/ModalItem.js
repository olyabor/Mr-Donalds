import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from '../Hooks/useTopping';
import { useChoices } from '../Hooks/useChoices';

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 20;
`;

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 520px;
  height: 53px;
  top: 20px;

  font-family: Pacifico;
  font-size: 30px;
  line-height: 53px;
  color: #000000;
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 250px);
  padding: 0 40px;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

  const counter = useCount();
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);
  
  const closeModal = (e) => {
    if(e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <Overlay id='overlay' onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Content>
        <HeaderContent>
          <p>{openItem.name}</p>
          <p>
            {formatCurrency(openItem.price)}
          </p>
        </HeaderContent>
        <CountItem {...counter}/>
        {openItem.toppings && <Toppings {...toppings}/>}
        {openItem.choices && <Choices {...choices} openItem={openItem}/>}
        <TotalPriceItem>
          <span>Цена:</span>
          <span>{formatCurrency(totalPriceItems(order))}</span>
        </TotalPriceItem>
        <ButtonCheckout 
        onClick={addToOrder}
        disabled={order.choices && !order.choice} //Если есть выбор, должен быть отмечен, иначе блокируем кнопку Добавить
        >Добавить</ButtonCheckout>
        </Content>
      </Modal>
    </Overlay>
  );
};