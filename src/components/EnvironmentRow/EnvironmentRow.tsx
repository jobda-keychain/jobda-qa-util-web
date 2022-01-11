import { PlatformLabel, EnvironmentLabel } from "../../style/Labels";
import { FaPen, FaTrash } from 'react-icons/fa';
import * as S from "../../style/Row";
import { ButtonGroup, ClientDomainGroup, EnvironmentGroup, PlatformGroup, ServerDomainGroup } from "./style";
import { IEnvironment } from "../../types/environment.types";

const EnvironmentRow = ({id, name, serverDomain, clientDomain, platform }: IEnvironment): JSX.Element => {
    return (
        <S.Row>
            <EnvironmentGroup><EnvironmentLabel>{name}</EnvironmentLabel></EnvironmentGroup>
            <PlatformGroup><PlatformLabel type={platform}>{platform}</PlatformLabel></PlatformGroup>
            <ServerDomainGroup><a href={clientDomain}>{clientDomain}</a></ServerDomainGroup> 
            <ClientDomainGroup>{serverDomain}</ClientDomainGroup>

            <ButtonGroup>
                <S.RowButton><FaPen /></S.RowButton>
                <S.RowButton><FaTrash /></S.RowButton>
            </ButtonGroup>
        </S.Row>
    )
}

export default EnvironmentRow;