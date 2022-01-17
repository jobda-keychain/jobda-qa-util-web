import { PlatformLabel, EnvironmentLabel } from '../../../style/Labels';
import { FaPen, FaTrash } from 'react-icons/fa';
import { IEnvironment } from '../../../types/environment.types';
import { Row, RowButton } from '../../../style/Row';
import * as S from './style';
import { FC, useState } from 'react';
import { Modal } from '@mui/material';
import EnvironmentModal from '../../Modal/EnvironmentModal/EnvironmentModal';
import DeleteModal from '../../Modal/DeleteModal/DeleteModal';

interface EnvironmentRowProps {
  environment: IEnvironment;
}

const EnvironmentRow: FC<EnvironmentRowProps> = ({ environment }) => {
  const { name, platform, clientDomain, serverDomain } = environment;

  const [isOpenModifyModal, setIsOpenModifyModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const toggleIsOpenModifyModal = () => {
    setIsOpenModifyModal(!isOpenModifyModal);
  };

  const toggleIsOpenDeleteModal = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };

  return (
    <Row>
      <S.EnvironmentWrapper type='row'>
        <EnvironmentLabel>{name}</EnvironmentLabel>
      </S.EnvironmentWrapper>
      <S.PlatformWrapper type='row'>
        <PlatformLabel type={platform}>{platform}</PlatformLabel>
      </S.PlatformWrapper>
      <S.ServerDomainWrapper type='row'>
        <a href={clientDomain}>{clientDomain}</a>
      </S.ServerDomainWrapper>
      <S.ClientDomainWrapper type='row'>{serverDomain}</S.ClientDomainWrapper>

      <S.ButtonWrapper>
        <RowButton onClick={toggleIsOpenModifyModal}>
          <FaPen />
        </RowButton>
        <RowButton onClick={toggleIsOpenDeleteModal}>
          <FaTrash />
        </RowButton>
      </S.ButtonWrapper>

      <Modal open={isOpenModifyModal} onClose={toggleIsOpenModifyModal}>
        <EnvironmentModal type='modify' value={environment}></EnvironmentModal>
      </Modal>

      <Modal open={isOpenDeleteModal} onClose={toggleIsOpenDeleteModal}>
        <DeleteModal></DeleteModal>
      </Modal>
    </Row>
  );
};

export default EnvironmentRow;
