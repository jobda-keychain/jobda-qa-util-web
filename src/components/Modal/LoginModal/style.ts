import styled from 'styled-components';
import { Modal, ModalButton } from '../../../style/Modal';

export const LoginModal = styled(Modal)`
  width: 420px;
  height: 500px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LoginModalButton = styled(ModalButton)`
  width: 100%;
  height: 50px;
`;

export const Logo = styled.img`
  width: 130px;
  height: 40px;
  align-self: center;
`;

export const InputWrapper = styled.div`
  margin: 10px 0px;
  & > * {
    width: 100%;
  }
`;

export const DescriptionWrapper = styled.div`
  * {
    margin-bottom: 10px;
  }
`;

export const MultipleDescriptionWrapper = styled.div`
  & > * {
    display: inline;
  }
`;
