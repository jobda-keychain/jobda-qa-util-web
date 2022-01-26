import React from 'react';
import styled from 'styled-components';

export const Modal = styled.div`
  padding: 25px;
  background-color: #f8f9fc;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalButton = styled.button`
  width: 140px;
  height: 40px;
  color: white;
  background-color: #00c17c;
  border: none;
  cursor: pointer;
`;

export const ModalWrapper = React.forwardRef((props: any, ref: any) => (
  <Modal {...props} ref={ref}>
    {props.children}
  </Modal>
));
