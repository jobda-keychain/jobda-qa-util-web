import styled from "styled-components";
import { Modal } from "../../style/Modal";

export const CopyModal = styled(Modal)`
    width: 600px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const FormatInput = styled.input`
    width: 100%;
    height: 50px;
    margin: 5px 0px;
    background-color: #ECECEC;
    border: none;
`

export const HelpWrapper = styled.div`
    margin: 10px 0px;
    color: #939393;
    display: flex;
    gap: 20px;
`

export const ButtonWrapper = styled.div`
    width: fit-content;
    margin-left: auto;
`