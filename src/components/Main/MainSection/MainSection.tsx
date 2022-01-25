import React, { useState, useEffect } from 'react';
import * as S from './style';
import AccountRow from '../AccountList/AccoutRow';
import StyledPagination from '../../Public/PaginationButton/PaginationButton';
import { ListWrapper, PaginationtWrapper, SectionWrapper } from '../../../style/Section';
import { setting } from '../../../assets/Main';
import { MainFilter, PublicTab } from '../..';
import AccountHeader from '../AccountList/AccountHeader';
import { Account } from './../../../types/account.types';
import useModal from '../../../hooks/useModal';
import { AccountModalType } from '../../../types/modal.types';
import { Modal } from '@mui/material';
import AccountModal from '../../Modal/AccountModal/AccountModal';
import DeleteModal from '../../Modal/DeleteModal/DeleteModal';
import CopyModal from '../../Modal/CopyModal/CopyModal';
import { ModalWrapper } from '../../../style/Modal';
import { getAccountList } from './../../../util/api/Account/index';
import { Platform } from '../../../lib/enum/platform';
import { EnvironmentOptionsType } from './../../../models/vo/index';
import useAutoLogin from './../../../hooks/useAutoLogin';

const MainSection = () => {
  const [pageCount, setPageCount] = useState(1);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<Account>({
    id: 1,
    accountId: '',
    password: '',
    platform: Platform.JOBDA,
    environment: '',
    description: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<EnvironmentOptionsType[]>([]);
  const [tabNumber, setTabNumber] = useState<number>(0);
  const { isOpenModal, toggleIsOpenModal } = useModal();
  const [modalType, setModalType] = useState<AccountModalType>('modify');

  const { autoLogin } = useAutoLogin();

  const getAccounts = async () => {
    try {
      let platform;
      switch (tabNumber) {
        case 0:
          platform = null;
          break;
        case 1:
          platform = 'JOBDA';
          break;
        case 2:
          platform = 'JOBDA_CMS';
      }
      const environment = filters.map(ele => ele.id).join(',');
      const res = await getAccountList(currentPage - 1, platform, environment);
      setAccounts(res.data.data);
      setPageCount(res.data.totalPages);
    } catch (err) {
      throw err;
    }
  };

  const pageHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, tabNumber]);

  useEffect(() => {
    getAccounts();
  }, [currentPage, filters, tabNumber]);

  return (
    <SectionWrapper>
      <S.Header>
        <PublicTab tabNumber={tabNumber} setTabNumber={setTabNumber} />
        <S.EnvBtn to='/env-management'>
          <img src={setting} alt='' />
          <span>환경 관리</span>
        </S.EnvBtn>
      </S.Header>
      {tabNumber !== 0 && (
        <MainFilter filters={filters} setFilters={setFilters} tabNumber={tabNumber} />
      )}
      <ListWrapper>
        <AccountHeader />
        <hr />
        {accounts.map(account => (
          <div key={account.id}>
            <AccountRow
              account={account}
              setModalType={setModalType}
              autoLogin={() => {
                autoLogin(account.id);
              }}
              toggleIsOpenModal={() => {
                setSelectedAccount(account);
                toggleIsOpenModal();
              }}
            />
            <hr />
          </div>
        ))}
      </ListWrapper>

      <PaginationtWrapper>
        <StyledPagination page={currentPage} onChange={pageHandler} count={pageCount} />
      </PaginationtWrapper>

      <Modal open={modalType === 'detail' && isOpenModal} onClose={toggleIsOpenModal}>
        <ModalWrapper>
          <AccountModal id={selectedAccount.id} type='detail' onClose={toggleIsOpenModal} />
        </ModalWrapper>
      </Modal>

      <Modal open={modalType === 'modify' && isOpenModal} onClose={toggleIsOpenModal}>
        <ModalWrapper>
          <AccountModal
            getAccounts={getAccounts}
            id={selectedAccount.id}
            onClose={toggleIsOpenModal}
            type='modify'
          />
        </ModalWrapper>
      </Modal>

      <Modal open={modalType === 'delete' && isOpenModal} onClose={toggleIsOpenModal}>
        <ModalWrapper>
          <DeleteModal
            getAccounts={getAccounts}
            id={selectedAccount.id}
            type='account'
            onClose={toggleIsOpenModal}
          />
        </ModalWrapper>
      </Modal>

      <Modal open={modalType === 'copy' && isOpenModal} onClose={toggleIsOpenModal}>
        <ModalWrapper>
          <CopyModal id={selectedAccount.id} onClose={toggleIsOpenModal} />
        </ModalWrapper>
      </Modal>
    </SectionWrapper>
  );
};

export default MainSection;
