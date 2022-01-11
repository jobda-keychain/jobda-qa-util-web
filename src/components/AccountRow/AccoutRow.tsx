import { IAccount } from "../../types/account.types";
import { PlatformLabel, EnvironmentLabel } from "../../style/Labels";
import { FaClipboard, FaPen, FaTrash } from 'react-icons/fa';
import { IoArrowRedo } from 'react-icons/io5';
import * as S from "../../style/Row";
import { ButtonGroup, EnvironmentGroup, PlatformGroup } from "./style";

const AccountRow = ({userId, platform, environment}: IAccount): JSX.Element => {
    return (
        <S.Row>
            <EnvironmentGroup><EnvironmentLabel>{environment}</EnvironmentLabel></EnvironmentGroup>
            <PlatformGroup><PlatformLabel type={platform}>{platform}</PlatformLabel></PlatformGroup>
            <div>{userId}</div>

            <ButtonGroup>
                <S.RowButton><FaPen /></S.RowButton>
                <S.RowButton><FaTrash /></S.RowButton>
                <S.RowButton><IoArrowRedo /></S.RowButton>
                <S.RowButton><FaClipboard /></S.RowButton>
            </ButtonGroup>
        </S.Row>
    )
}

export default AccountRow;