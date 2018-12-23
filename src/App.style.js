import AntButton from 'antd/lib/button';
import styled, { keyframes } from 'styled-components/macro';
import 'antd/lib/button/style/css';

export const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppLogo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 40vmin;
`;

export const Button = styled(AntButton)`
  background-color: #2e81e8;
  border-color: #276ec5;
  color: #ffffff;

  &:hover {
    background-color: #276ec5;
    border-color: #276ec5;
    color: #ffffff;
  }
`;
