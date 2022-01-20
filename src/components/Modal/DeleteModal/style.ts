import styled from 'styled-components';
import { Modal } from '../../../style/Modal';

export const ModalContainer = styled(Modal)`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  > span {
    font-size: 24px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;

  > button {
    width: 45%;
    height: 60px;
    border: 1px solid #00c17c;
    font-size: 24px;
    cursor: pointer;
  }

  > button:first-child {
    background-color: #00c17c;
    color: white;
  }

  > button:last-child {
    background-color: white;
    color: #00c17c;
  }
`;
