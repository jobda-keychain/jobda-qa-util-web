import { IAccount } from "../../types/account.types";
import { PlatformLabel, EnvironmentLabel } from "../../style/Labels";
import { FaClipboard, FaPen, FaTrash } from 'react-icons/fa';
import { IoArrowRedo } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import * as S from "./style";

const AccountRow = ({id, userId, password, platform, environment, description}: IAccount): JSX.Element => {
    return (
        <S.Row>
            <S.RowButton><IoIosArrowForward /></S.RowButton>

            <div style={{width: '12%'}}><PlatformLabel type={platform}>{platform}</PlatformLabel></div>
            <div style={{width: '12%'}}><EnvironmentLabel>{environment}</EnvironmentLabel></div>
            <div>{userId}</div>
            
            <div style={{float: 'right'}}>
                <S.RowButton><FaPen /></S.RowButton>
                <S.RowButton><FaTrash /></S.RowButton>
                <S.RowButton><IoArrowRedo /></S.RowButton>
                <S.RowButton><FaClipboard /></S.RowButton>
            </div>
        </S.Row>
    )
}

export default AccountRow;