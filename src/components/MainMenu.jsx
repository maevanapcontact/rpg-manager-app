import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Root = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 5px;
`;

const MenuBack = styled.div`
  width: 50%;
  min-width: 300px;
  max-width: 800px;
  height: 15px;
  background: #b58b51;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  border-radius: 5px 5px 0 0;
  border: 1px solid #633921;
  border-bottom-width: 5px;
`;

const Elt = styled(Link)`
  display: block;
  width: 50px;
  height: 50px;
  margin: 0 10px;
  padding: 5px;
  border-radius: 3px;
  box-shadow: 0 2px 5px #000;
  background: #b58b51;
  border: 1px solid #633921;
`;

const InnerElt = styled.div`
  width: 100%;
  height: 100%;
  background: #633921;
`;

export default function MainNav() {
  return (
    <Fragment>
      <MenuBack />
      <Root>
        <Elt to="/character"><InnerElt /></Elt>
        <Elt to="/quests"><InnerElt /></Elt>
        <Elt to="/Bank"><InnerElt /></Elt>
        <Elt to="/Notes"><InnerElt /></Elt>
      </Root>
    </Fragment>
  );
}
