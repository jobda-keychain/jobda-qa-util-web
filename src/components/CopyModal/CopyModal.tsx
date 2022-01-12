import React, { useState } from "react";
import { ModalButton } from "../../style/Modal";
import * as S from "./style";

const CopyModal = (): JSX.Element => {
    const [format, setFormat] = useState('');

    const onChangeFormat = (e: React.ChangeEvent<HTMLInputElement>) => setFormat(e.target.value);

    return (
        <S.CopyModal>
            <div>
                <h3>클립보드에 복사</h3>
                
                <S.HelpWrapper>
                    <p>환경 = !(Env)</p>
                    <p>아이디 = !(Id)</p>
                    <p>비밀번호 = !(Pw)</p>
                    <p>서비스 = !(Ser)</p>
                </S.HelpWrapper>
            </div>

            <div>
                <h4>포멧</h4>
                <S.FormatInput
                    value={format}
                    placeholder='환경: !(Env), 아이디: !(Id), 비밀번호: !(Pw), 서비스: !(Ser)'
                    onChange={onChangeFormat} />
            </div>

            <S.ButtonWrapper><ModalButton>복사</ModalButton></S.ButtonWrapper>
        </S.CopyModal>
    )
}

export default CopyModal;