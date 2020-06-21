import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 114px;
  left: 0px;
  top: 0px;

  background: #000000;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    position: absolute;
    width: 250px;
    height: 74px;
    left: 42px;
    top: 20px;
  }

  strong {
    position: absolute;
    width: 76px;
    height: 28px;
    left: 1200px;
    top: 43px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #ffffff;
  }

  svg {
    position: absolute;
    width: 39px;
    height: 29px;
    left: 1353px;
    top: 43px;
  }
`;
