import styled from 'styled-components';

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

  p {
    position: absolute;
    left: 75.27%;
    right: 7.48%;
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

export const SelectProducts = styled.select`
  position: absolute;
  left: 5.21%;
  right: 60.09%;
  top: 44.8%;
  bottom: 20%;
  border-radius: 15px;
  width: 250px;
`;

export const SelectDays = styled.select`
  position: absolute;
  left: 77.11%;
  right: 9.22%;
  top: 44.8%;
  bottom: 22.4%;
  border-radius: 15px;
`;
