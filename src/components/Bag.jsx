import React from 'react';
import styled from 'styled-components';
import characterData from '../character';

const Root = styled.section`
  max-width: 800px;
  margin: auto;
  padding: 20px 5px;
`;

const Elt = styled.p``;

export default function Stuff() {
  const {
    money,
  } = characterData.bag;
  return (
    <Root>
      <Elt>{`Money: ${money}€`}</Elt>
    </Root>
  );
}
