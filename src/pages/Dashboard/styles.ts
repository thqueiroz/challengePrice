import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 99px;
  left: 306px;
  top: 114px;

  background: #ffffff;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  strong {
    position: absolute;
    width: 117px;
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

  p {
    position: absolute;
    width: 264px;
    height: 80px;
    left: 410px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 182px;
  height: 45px;
  left: 885px;
  top: 18px;
  border-radius: 15px;
  transition: background-color 0.2s;

  background: #e4fcfa;

  cursor: pointer;
  &:hover {
    background: ${shade(0.2, '#E4FCFA')};
  }
`;
