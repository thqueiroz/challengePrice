import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: absolute;
  width: 306px;
  height: 100%;
  left: 0px;
  top: 114px;

  border: 1px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: #ffffff;

  img {
    position: absolute;
    left: 6.21%;
    right: 63.73%;
    top: 2.2%;
    bottom: 87.91%;

    border-radius: 50%;
  }

  strong {
    position: absolute;
    left: 39.54%;
    right: 6.21%;
    top: 4.07%;
    bottom: 92.86%;

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
    left: 39.54%;
    right: 43.46%;
    top: 8.57%;
    bottom: 89.12%;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    color: #a0a0a0;

    mix-blend-mode: normal;
  }
`;

export const Title = styled.div`
  position: absolute;
  left: 5.88%;
  right: 43.46%;
  top: 14.95%;
  bottom: 81.98%;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  color: #000000;

  mix-blend-mode: normal;
`;

export const Dashboard = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 20.88%;
  bottom: 71.54%;

  border: 1px solid #d4d4d4;
  box-sizing: border-box;

  &:hover {
    background: ${shade(0.2, '#fff')};
  }

  svg {
    position: absolute;
    left: 10%;
    right: 78.43%;
    top: 25%;
    bottom: 10.14%;
  }

  p {
    position: absolute;
    left: 38.56%;
    right: 38.24%;
    top: 24.64%;
    bottom: 44.93%;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    color: #a0a0a0;
  }
`;

export const FirstReport = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 29.89%;
  bottom: 62.53%;

  border: 1px solid #d4d4d4;
  box-sizing: border-box;

  &:hover {
    background: ${shade(0.2, '#fff')};
  }

  svg {
    position: absolute;
    left: 10%;
    right: 78.43%;
    top: 25%;
    bottom: 10.14%;
  }

  p {
    position: absolute;
    left: 38.56%;
    right: 33.01%;
    top: 24.64%;
    bottom: 44.93%;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    color: #a0a0a0;
  }
`;

export const SecondReport = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 38.9%;
  bottom: 53.52%;

  border: 1px solid #d4d4d4;

  box-sizing: border-box;

  &:hover {
    background: ${shade(0.2, '#fff')};
  }

  svg {
    position: absolute;
    left: 10%;
    right: 78.43%;
    top: 25%;
    bottom: 10.14%;
  }

  p {
    position: absolute;
    left: 38.56%;
    right: 33.01%;
    top: 24.64%;
    bottom: 44.93%;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    color: #a0a0a0;
  }
`;
