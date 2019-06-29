import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import InfoBar from './InfoBar';
import Dashboard from './Dashboard';
import MainMenu from './MainMenu';
import Character from './Character';
import Stuff from './Stuff';
import Bag from './Bag';

const Root = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default function App() {
  return (
    <Root>
      <InfoBar />
      <Route path="/" exact component={Dashboard} />
      <Route path="/character" exact component={Character} />
      <Route path="/stuff" exact component={Stuff} />
      <Route path="/bag" exact component={Bag} />
      <MainMenu />
    </Root>
  );
}
