import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 200px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background-color: white;
  border-radius: 20px;

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
