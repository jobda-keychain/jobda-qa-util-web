import { PlatformLabel, EnvironmentLabel } from '../../../style/Labels';
import { FaPen, FaTrash } from 'react-icons/fa';
import { Environment } from '../../../types/environment.types';
import { Row } from '../../../style/Row';
import * as S from './style';
import React, { FC } from 'react';
import { EnvironmentModalType } from '../../../types/modal.types';
import { IconButton } from '@mui/material';

interface EnvironmentRowProps {
  environment: Environment;
  setModalType: (modalType: EnvironmentModalType) => void;
  toggleIsOpenModal: () => void;
}

const EnvironmentRow: FC<EnvironmentRowProps> = ({
  environment,
  setModalType,
  toggleIsOpenModal,
}) => {
  const { name, platform, clientDomain, serverDomain } = environment;

  return (
    <Row>
      <S.EnvironmentWrapper type='row'>
        <EnvironmentLabel>{name}</EnvironmentLabel>
      </S.EnvironmentWrapper>
      <S.PlatformWrapper type='row'>
        <PlatformLabel type={platform}>{platform}</PlatformLabel>
      </S.PlatformWrapper>
      <S.ServerDomainWrapper type='row'>
        <a href={clientDomain} target='_blank'>
          {clientDomain}
        </a>
      </S.ServerDomainWrapper>
      <S.ClientDomainWrapper type='row'>{serverDomain}</S.ClientDomainWrapper>

      <S.ButtonWrapper>
        <IconButton
          onClick={() => {
            setModalType('modify');
            toggleIsOpenModal();
          }}
        >
          <FaPen />
        </IconButton>

        <IconButton
          onClick={() => {
            setModalType('delete');
            toggleIsOpenModal();
          }}
        >
          <FaTrash />
        </IconButton>
      </S.ButtonWrapper>
    </Row>
  );
};

export default EnvironmentRow;
