import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Root = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 5px 10px;
  border-top: 1px solid #333;
  position: absolute;
  bottom: 0;
`;

const Elt = styled(Link)`
  margin: 0 0 0 5px;
`;

export default function MainNav() {
  return (
    <Root>
      <Elt to="/character">Character</Elt>
      <Elt to="/stuff">Stuff</Elt>
      <Elt to="/bag">Bag</Elt>
    </Root>
  );
}
