import styled from 'styled-components';

export const ModalWrapper = styled.form`
  width: 600px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  background-color: #f8f9fc;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HelpWrapper = styled.div`
  margin: 10px 0px;
  color: #939393;
  display: flex;
  gap: 20px;
`;

export const ButtonWrapper = styled.div`
  width: fit-content;
  margin-left: auto;
`;
