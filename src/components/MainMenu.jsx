import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bankIcon from '../assets/images/bank_ico.png';
import bookIcon from '../assets/images/notebook_ico.png';
import persoIcon from '../assets/images/perso_ico.png';
import questIcon from '../assets/images/quest_ico.png';

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
  width: 52px;
  height: 52px;
  margin: 0 10px;
  padding: 5px;
  border-radius: 3px;
  box-shadow: 0 2px 5px #000;
  background: #b58b51;
  border: 1px solid #633921;

  &:hover > div {
    background: #600204;
  }
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
        <Elt to="/character"><InnerElt style={{ backgroundImage: `url("${persoIcon}")` }} /></Elt>
        <Elt to="/quests"><InnerElt style={{ backgroundImage: `url("${questIcon}")` }} /></Elt>
        <Elt to="/Bank"><InnerElt style={{ backgroundImage: `url("${bankIcon}")` }} /></Elt>
        <Elt to="/Notes"><InnerElt style={{ backgroundImage: `url("${bookIcon}")` }} /></Elt>
      </Root>
    </Fragment>
  );
}
