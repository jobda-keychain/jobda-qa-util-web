import styled from 'styled-components';
import { Modal } from '../../../style/Modal';

export const EnvironmentModal = styled(Modal)`
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  margin: 10px 0px;
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
