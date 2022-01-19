import * as S from './style';
import { PublicTab } from '../..';
import { Modal } from '@mui/material';
import StyledPagination from '../../Public/PaginationButton/PaginationButton';
import { ListWrapper, PaginationtWrapper, SectionWrapper } from '../../../style/Section';
import EnvironmentRow from '../EnvironmentList/EnvironmentRow';
import EnvironmentHeader from '../EnvironmentList/EnvironmentHeader';
import useEnvironmentList from '../../../hooks/useEnvironmentList';
import EnvironmentModal from '../../Modal/EnvironmentModal/EnvironmentModal';
import DeleteModal from '../../Modal/DeleteModal/DeleteModal';
import React, { useState } from 'react';
import useModal from '../../../hooks/useModal';
import { EnvironmentModalType } from '../../../types/modal.types';
import { ModalWrapper } from '../../../style/Modal';

const EnvSection = () => {
  const { pageCount, environments } = useEnvironmentList();
  const { isOpenModal, toggleIsOpenModal } = useModal();

  const [modalType, setModalType] = useState<EnvironmentModalType>('modify');

  return (
    <SectionWrapper>
      <S.TabBox>
        <PublicTab />
      </S.TabBox>

      <ListWrapper>
        <EnvironmentHeader />
        <hr />

        {environments.map(environment => (
          <div key={environment.id}>
            <EnvironmentRow
              environment={environment}
              setModalType={setModalType}
              toggleIsOpenModal={toggleIsOpenModal}
            />
            <hr />

            <Modal open={modalType === 'modify' && isOpenModal} onClose={toggleIsOpenModal}>
              <ModalWrapper>
                <EnvironmentModal
                  type='modify'
                  environmentValue={environment}
                  onClose={toggleIsOpenModal}
                />
              </ModalWrapper>
            </Modal>

            <Modal open={modalType === 'delete' && isOpenModal} onClose={toggleIsOpenModal}>
              <ModalWrapper>
                <DeleteModal type='environment' id={environment.id} onClose={toggleIsOpenModal} />
              </ModalWrapper>
            </Modal>
          </div>
        ))}
      </ListWrapper>

      <PaginationtWrapper>
        <StyledPagination count={pageCount} />
      </PaginationtWrapper>
    </SectionWrapper>
  );
};

export default EnvSection;
