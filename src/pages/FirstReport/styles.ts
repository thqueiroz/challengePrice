import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: absolute;
  width: 1134%;
  height: 99px;
  left: 306px;
  top: 114px;

  background: #ffffff;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  strong {
    position: absolute;
    height: 28px;
    left: 32px;
    top: 35px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #000000;

    mix-blend-mode: normal;
  }
`;

export const Search = styled.div`
  position: absolute;
  width: 922px;
  height: 125px;
  left: 338px;
  top: 241px;

  border: 1px solid #ffffff;
  box-sizing: border-box;

  div {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    background: #ffffff;
  }

  strong {
    position: absolute;
    left: 2.28%;
    right: 54.77%;
    top: 12%;
    bottom: 65.6%;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  background: #e4fcfa;
  left: 3.21%;
  right: 60.09%;
  top: 35.8%;
  bottom: 20%;
  border-radius: 15px;
  width: 250px;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  height: 56px;
  cursor: pointer;
  &:hover {
    background: ${shade(0.2, '#E4FCFA')};
  }
`;
