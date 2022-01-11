import * as S from "../../style/Row";
import { ButtonGroup, ClientDomainGroup, EnvironmentGroup, PlatformGroup, ServerDomainGroup } from "./style";

const EnvironmentHeader = (): JSX.Element => {
    return (
        <S.Row>
            <EnvironmentGroup>환경</EnvironmentGroup>
            <PlatformGroup>서비스</PlatformGroup>
            <ClientDomainGroup>클라이언트 도메인</ClientDomainGroup>
            <ServerDomainGroup>서버 도메인</ServerDomainGroup>
            
            <ButtonGroup>
                <div>수정</div>
                <div>삭제</div>
            </ButtonGroup>
        </S.Row>
    )
}

export default EnvironmentHeader;