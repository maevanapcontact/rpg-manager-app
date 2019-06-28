import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import InfoBar from './InfoBar';
import Dashboard from './Dashboard';
import MainMenu from './MainMenu';

const Root = styled.main``;

export default function App() {
  return (
    <Root>
      <InfoBar />
      <Route path="/" exact component={Dashboard} />
      <MainMenu />
    </Root>
  );
}
