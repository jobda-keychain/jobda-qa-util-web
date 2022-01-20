import { styled, Autocomplete } from '@mui/material';
import { Modal } from '../../../style/Modal';

export const ModalContainer = styled(Modal)`
  width: 800px;
  height: 600px;

  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
  }

  textarea {
    width: 100%;
    height: 160px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #e9eaed;
    font-size: 16px;
    resize: none;
    outline: none;
  }

  textarea:disabled {
    background-color: #dadbdd;
  }
`;

export const Title = styled('span')`
  font-size: 30px;
`;

export const EnvInput = styled(Autocomplete)`
  width: 100%;
`;

export const AuthInputsContainer = styled('div')`
  display: flex;
  justify-content: space-between;

  > div {
    width: calc(50% - 40px);
  }
`;

export const ButtonContainer = styled('div')`
  display: flex;
  justify-content: flex-end;

  > button {
    width: 200px;
    height: 60px;
    border: none;
    background-color: #00c17c;
    color: #ffffff;
    font-size: 24px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
