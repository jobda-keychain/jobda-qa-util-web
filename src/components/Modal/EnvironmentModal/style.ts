import styled from 'styled-components';

export const ModalWrapper = styled.form`
  padding: 25px;
  background-color: #f8f9fc;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputFormWrapper = styled.div`
  * {
    margin-bottom: 5px;
  }
`;

export const InputWrapper = styled.div`
  & > * {
    width: 100%;
  }
`;

export const MultipleInputWrapper = styled.div<{ count: number }>`
  display: flex;
  gap: 20px;
  & > * {
    width: ${props => 100 / props.count}%;
    height: 55px;
  }
`;

export const ButtonWrapper = styled.div`
  width: fit-content;
  margin-left: auto;
`;
