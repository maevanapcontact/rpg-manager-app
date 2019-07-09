import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Log from './Log';
import CreateCharacter from './CreateCharacter';
import InfoBar from './InfoBar';
import Dashboard from './Dashboard';
import MainMenu from './MainMenu';
import Character from './Character';

const client = new ApolloClient({
  uri: 'http://localhost:4000/api',
});

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #f8eed3;
`;

const Content = styled.main`
  padding: 10px;
`;

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Root>
        <InfoBar />
        <Content>
          <Route path="/" exact component={Log} />
          <Route path="/create" exact component={CreateCharacter} />
          <Route path="/character" exact component={Character} />
          <Route path="/quests" exact component={Dashboard} />
          <Route path="/bank" exact component={Dashboard} />
          <Route path="/notes" exact component={Dashboard} />
        </Content>
        <MainMenu />
      </Root>
    </ApolloProvider>
  );
}
