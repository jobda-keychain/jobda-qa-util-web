import styled from "styled-components";

function getWrapperStyle(type: 'header' | 'item') {
    return type === 'header' ? `
        font-weight: bold;
    `: `
        color: #494949;
    `;
}

export const EnvironmentWrapper = styled.div<{type: 'header' | 'item'}>`
    width: 10%;
    ${({ type }) => getWrapperStyle(type)}
`;

export const PlatformWrapper = styled.div<{type: 'header' | 'item'}>`
    width: 15%;
    ${({ type }) => getWrapperStyle(type)}
`;

export const ClientDomainWrapper = styled.div<{type: 'header' | 'item'}>`
    width: 30%;
    ${({ type }) => getWrapperStyle(type)}
`;

export const ServerDomainWrapper = styled.div<{type: 'header' | 'item'}>`
    width: 30%;
    ${({ type }) => getWrapperStyle(type)}
`;

export const ButtonWrapper = styled.div`
    float: right;
    gap: 10px;
`;