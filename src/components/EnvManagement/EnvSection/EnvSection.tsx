import * as S from './style';
import { PublicTab } from '../..';
import { Modal } from '@mui/material';
import StyledPagination from '../../Public/PaginationButton/PaginationButton';
import { ListWrapper, PaginationtWrapper, SectionWrapper } from '../../../style/Section';
import EnvironmentRow from '../EnvironmentList/EnvironmentRow';
import EnvironmentHeader from '../EnvironmentList/EnvironmentHeader';
import useEnvironment from '../../../hooks/useEnvironment';
import EnvironmentModal from '../../Modal/EnvironmentModal/EnvironmentModal';
import DeleteModal from '../../Modal/DeleteModal/DeleteModal';

const EnvSection = () => {
  const {
    pageCount,
    environments,
    isOpenModifyModal,
    isOpenDeleteModal,
    toggleIsOpenModifyModal,
    toggleIsOpenDeleteModal,
    onClickCreateEnvironment,
  } = useEnvironment();

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
              toggleIsOpenModifyModal={toggleIsOpenModifyModal}
              toggleIsOpenDeleteModal={toggleIsOpenDeleteModal}
            />
            <hr />

            <Modal open={isOpenModifyModal} onClose={toggleIsOpenModifyModal}>
              <EnvironmentModal type='modify' environmentValue={environment} />
            </Modal>

            <Modal open={isOpenDeleteModal} onClose={toggleIsOpenDeleteModal}>
              <DeleteModal></DeleteModal>
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
