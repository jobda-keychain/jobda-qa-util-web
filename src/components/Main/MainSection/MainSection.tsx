import { useState } from 'react';
import * as S from './style';
import AccountRow from '../AccountList/AccoutRow';
import StyledPagination from '../../Public/PaginationButton/PaginationButton';
import { ListWrapper, PaginationtWrapper, SectionWrapper } from '../../../style/Section';
import { setting } from '../../../assets/Main';
import { MainFilter, PublicTab } from '../..';
import AccountHeader from '../AccountList/AccountHeader';
import { Account } from './../../../types/account.types';
import { Platform } from '../../../lib/enum/platform';
import useModal from '../../../hooks/useModal';
import { AccountModalType } from '../../../types/modal.types';
import { Modal } from '@mui/material';
import AccountModal from '../../Modal/AccountModal/AccountModal';
import DeleteModal from '../../Modal/DeleteModal/DeleteModal';
import CopyModal from '../../Modal/CopyModal/CopyModal';

const MainSection = () => {
  const [pageCount, setPageCount] = useState(1);
  const [accounts, setAccounts] = useState<Account[]>([
    {
      id: 0,
      userId: 'string',
      password: 'string',
      platform: Platform.JOBDA,
      environment: 'string',
      description: 'string',
    },
  ]);
  const { isOpenModal, toggleIsOpenModal } = useModal();

  const [modalType, setModalType] = useState<AccountModalType>('modify');

  return (
    <SectionWrapper>
      <S.Header>
        <PublicTab />
        <S.EnvBtn to='/env-management'>
          <img src={setting} alt='' />
          <span>환경 관리</span>
        </S.EnvBtn>
      </S.Header>
      <MainFilter />
      <ListWrapper>
        <AccountHeader />
        <hr />
        {accounts.map(account => (
          <div key={account.id}>
            <AccountRow
              account={account}
              setModalType={setModalType}
              toggleIsOpenModal={toggleIsOpenModal}
            />

            <hr />

            <Modal open={modalType === 'detail' && isOpenModal} onClose={toggleIsOpenModal}>
              <AccountModal type='detail'></AccountModal>
            </Modal>

            <Modal open={modalType === 'modify' && isOpenModal} onClose={toggleIsOpenModal}>
              <AccountModal type='modify'></AccountModal>
            </Modal>

            <Modal open={modalType === 'delete' && isOpenModal} onClose={toggleIsOpenModal}>
              <DeleteModal id={account.id} type='account' onClose={toggleIsOpenModal}></DeleteModal>
            </Modal>

            <Modal open={modalType === 'copy' && isOpenModal} onClose={toggleIsOpenModal}>
              <CopyModal account={account}></CopyModal>
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

export default MainSection;
