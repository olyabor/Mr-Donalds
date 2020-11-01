import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from './ButtonCheckout';

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
  left: 37px;
  top: 20px;

  font-family: Pacifico;
  font-size: 30px;
  line-height: 53px;
  color: #000000;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 250px);
`;

export const ModalItem = ({ openItem, setOpenItem }) => {

  function closeModal(e) {
    if(e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  if (!openItem) return null;
  return (
    <Overlay id='overlay' onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Content>
        <HeaderContent>
          <p>{openItem.name}</p>
          <p>
            {openItem.price.toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'RUB',
            })}
          </p>
        </HeaderContent>
        <ButtonCheckout>Добавить</ButtonCheckout>
        </Content>
      </Modal>
    </Overlay>
  );
};