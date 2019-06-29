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
    head,
    torso,
    legs,
    hands,
    feet,
  } = characterData.stuff;
  return (
    <Root>
      <Elt>{`Head: ${head}`}</Elt>
      <Elt>{`Torso: ${torso}`}</Elt>
      <Elt>{`Legs: ${legs}`}</Elt>
      <Elt>{`Hands: ${hands}`}</Elt>
      <Elt>{`Feet: ${feet}`}</Elt>
    </Root>
  );
}
