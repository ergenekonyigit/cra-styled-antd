import styled from 'styled-components';
import AntButton from 'antd/lib/button';
import 'antd/lib/button/style/css';

export const Button = styled(AntButton)`
  background-color: #2e81e8;
  border-color: #276ec5;
  color: #ffffff;

  &:hover {
    background-color: #276ec5;
    border-color: #276ec5;
    color: #ffffff;
  }

  &.ant-btn-background-ghost {
    border-color: #b8d4f7;

    &:hover {
      border-color: #276ec5;
    }
  }
`;

export const RoundedButton = styled(Button)`
  &.ant-btn {
    border-radius: 30px;
  }
`;
