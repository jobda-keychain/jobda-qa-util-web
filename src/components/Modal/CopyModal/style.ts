import styled from 'styled-components';
import { Modal } from '../../../style/Modal';

export const CopyModal = styled(Modal)`
  width: 600px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
