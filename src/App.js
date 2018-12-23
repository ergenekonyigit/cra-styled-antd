import React, { Component } from 'react';
import logo from './logo.svg';
import { Header, AppLogo, Button } from './App.style';
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
          <Button onClick={() => window.location.href='https://reactjs.org'}>Learn React</Button>
        </Header>
      </div>
    );
  }
}

export default App;
