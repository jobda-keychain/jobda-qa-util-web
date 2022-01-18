import { useState, useEffect } from 'react';
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
import { ModalWrapper } from '../../../style/Modal';
import { getAccountList } from './../../../util/api/AccountList/index';
import { EnvironmentFilter } from './../../../types/filter.types';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<EnvironmentFilter[]>([]);
  const [tabNumber, setTabNumber] = useState<number>(0);
  
  const { isOpenModal, toggleIsOpenModal } = useModal();
  const [modalType, setModalType] = useState<AccountModalType>('modify');

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
    getAccounts();
  }, [tabNumber, filters, currentPage]);

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
              toggsOpenModal={toggleIsOpenModal}
            />

            <hr />

            <Modal open={modalType === 'detail' && isOpenModal} onClose={toggleIsOpenModal}>
              <ModalWrapper>
                <AccountModal type='detail' onClose={toggleIsOpenModal}></AccountModal>
              </ModalWrapper>
            </Modal>

            <Modal open={modalType === 'modify' && isOpenModal} onClose={toggleIsOpenModal}>
              <ModalWrapper>
                <AccountModal type='modify'></AccountModal>
              </ModalWrapper>
            </Modal>

            <Modal open={modalType === 'delete' && isOpenModal} onClose={toggleIsOpenModal}>
              <ModalWrapper>
                <DeleteModal id={account.id} type='account' onClose={toggleIsOpenModal} />
              </ModalWrapper>
            </Modal>

            <Modal open={modalType === 'copy' && isOpenModal} onClose={toggleIsOpenModal}>
              <ModalWrapper>
                <CopyModal account={account}></CopyModal>
              </ModalWrapper>
            </Modal>
          </div>
        ))}
      </ListWrapper>
      <PaginationtWrapper>
        <StyledPagination page={currentPage} onChange={pageHandler} count={pageCount} />
      </PaginationtWrapper>
    </SectionWrapper>
  );
};

export default MainSection;
