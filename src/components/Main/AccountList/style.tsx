import styled from 'styled-components';

function getWrapperStyle(type: 'header' | 'row') {
  return type === 'header'
    ? `
        font-weight: bold;
    `
    : `
        color: #494949;
    `;
}

export const EnvironmentWrapper = styled.div<{ type: 'header' | 'row' }>`
  margin-right: 10px;
  width: 10%;
  ${({ type }) => getWrapperStyle(type)}
`;

export const PlatformWrapper = styled.div<{ type: 'header' | 'row' }>`
  margin-right: 10px;
  width: 15%;
  ${({ type }) => getWrapperStyle(type)}
`;

export const UserIdWrapper = styled.div<{ type: 'header' | 'row' }>`
  padding-top: 15px;
  padding-bottom: 15px;
  margin-right: 10px;
  width: 50%;
  height: 100%;
  ${({ type }) => getWrapperStyle(type)};
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  float: right;
  gap: 10px;

  * {
    height: 32px;
    width: 32px;
  }

  button {
    color: #bebebe;
  }
`;
