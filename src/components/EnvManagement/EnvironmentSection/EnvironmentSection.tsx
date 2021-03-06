import * as S from './style';
import { Modal } from '@mui/material';
import StyledPagination from '../../Public/PaginationButton/PaginationButton';
import { ListWrapper, PaginationtWrapper, SectionWrapper } from '../../../style/Section';
import { useEffect, useReducer, useState } from 'react';
import useModal from '../../../hooks/useModal';
import { EnvironmentModalType } from '../../../types/modal.types';
import { ModalWrapper } from '../../../style/Modal';
import { Environment } from '../../../types/environment.types';
import { Platform } from '../../../lib/enum/platform';
import { getEnvironmentList } from '../../../util/api/environment';
import { accountReducer } from '../../../hooks/useAccountReducer';
import { AccountStateInterface } from '../../../types/account.types';
import { PublicTab } from '../../Public';
import { EnvironmentHeader, EnvironmentRow } from '..';
import { DeleteModal, EnvironmentModal } from '../../Modal';

const initialState: AccountStateInterface = {
  currentPage: 1,
  tabNumber: 0,
};

const EnvironmentSection = () => {
  const [pageCount, setPageCount] = useState(1);
  const [environments, setEnvironments] = useState<Environment[]>([]);
  const [selectedEnvironment, setSelectedEnvironment] = useState<Environment>({
    id: 0,
    name: '',
    serverDomain: '',
    clientDomain: '',
    platform: Platform.JOBDA,
  });
  const { isOpenModal, toggleIsOpenModal } = useModal();
  const [state, dispatch] = useReducer(accountReducer, initialState);
  const { currentPage, tabNumber } = state;

  const getEnvironments = async () => {
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
      const res = await getEnvironmentList(currentPage - 1, platform);
      setEnvironments(res.data.data);
      setPageCount(res.data.totalPages);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    getEnvironments();
  }, [tabNumber, currentPage]);

  const pageHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch({
      type: 'CHANGE_PAGE',
      payload: {
        value,
      },
    });
  };

  const [modalType, setModalType] = useState<EnvironmentModalType>('modify');

  return (
    <SectionWrapper>
      <div>
        <S.TabBox>
          <PublicTab tabNumber={tabNumber} dispatch={dispatch} />
        </S.TabBox>
        <ListWrapper>
          <EnvironmentHeader />
          <hr />
          {environments.map(environment => (
            <div key={environment.id}>
              <EnvironmentRow
                environment={environment}
                setModalType={setModalType}
                toggleIsOpenModal={() => {
                  setSelectedEnvironment(environment);
                  toggleIsOpenModal();
                }}
              />
              <hr />
            </div>
          ))}
        </ListWrapper>
      </div>

      <PaginationtWrapper>
        <StyledPagination page={currentPage} onChange={pageHandler} count={pageCount} />
      </PaginationtWrapper>
      <Modal open={modalType === 'modify' && isOpenModal} onClose={toggleIsOpenModal}>
        <ModalWrapper>
          <EnvironmentModal
            type='modify'
            environmentValue={selectedEnvironment}
            onClose={toggleIsOpenModal}
            refresh={getEnvironments}
          />
        </ModalWrapper>
      </Modal>
      <Modal open={modalType === 'delete' && isOpenModal} onClose={toggleIsOpenModal}>
        <ModalWrapper>
          <DeleteModal
            type='environment'
            id={selectedEnvironment.id}
            onClose={toggleIsOpenModal}
            getAccounts={getEnvironments}
          />
        </ModalWrapper>
      </Modal>
    </SectionWrapper>
  );
};

export default EnvironmentSection;
