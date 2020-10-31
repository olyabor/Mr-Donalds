import React from 'react';
import styled from 'styled-components';

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
  margin-bottom: 20px;
`;

const Info = styled.div`
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

const BtnAdd = styled.button`
  position: relative;
  width: 250px;
  height: 65px;
  left: 175px;
  top: 220px;
  background: #299b01;
  font-family: Roboto;
  font-size: 21px;
  line-height: 25px;
  color: #ffffff;
  border: transparent;
  outline: none;
  &:hover {
    box-shadow: inset 0 0 50px 30px #207f02;
  }
  &:active {
    outline: 3px solid #299b01;
  }
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
        <Info>
          <p>{openItem.name}</p>
          <p>
            {openItem.price.toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'RUB',
            })}
          </p>
        </Info>
        <BtnAdd>Добавить</BtnAdd>
      </Modal>
    </Overlay>
  );
};