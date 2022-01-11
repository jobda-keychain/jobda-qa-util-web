import * as S from "../../style/Row";
import { ButtonGroup, EnvironmentGroup, PlatformGroup, UserIdGroup } from "./style";

const AccountHeader = (): JSX.Element => {
    return (
        <S.Row>
            <EnvironmentGroup>환경</EnvironmentGroup>
            <PlatformGroup>서비스</PlatformGroup>
            <UserIdGroup>아이디</UserIdGroup>
            
            <ButtonGroup>
                <div>수정</div>
                <div>삭제</div>
                <div>이동</div>
                <div>복사</div>
            </ButtonGroup>
        </S.Row>
    )
}

export default AccountHeader;