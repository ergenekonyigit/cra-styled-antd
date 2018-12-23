import React, { Component } from 'react';
import logo from './logo.svg';
import { Header, AppLogo } from './App.style';
import { RoundedButton } from './components/Button';
import 'styled-components/macro';

class App extends Component {
  render() {
    return (
      <div css="text-align: center">
        <Header>
          <AppLogo src={logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <RoundedButton ghost onClick={() => window.location.href='https://reactjs.org'}>Learn React</RoundedButton>
        </Header>
      </div>
    );
  }
}

export default App;
