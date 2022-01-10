import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 200px;
  padding-top: 30px;
`;

export const Logo = styled.img`
  width: 260px;
  height: 80px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const AddAccountBtn = styled.button`
  width: 150px;
  height: 50px;
  border: 3px solid #00c17c;
  border-radius: 30px;
  background-color: #ffffff;
  color: #00c17c;
  font-size: 20px;
  font-weight: bold;
  transition-duration: 0.25s;
  cursor: pointer;

  :hover {
    background-color: #00c17c;
    color: #ffffff;
  }
`;
