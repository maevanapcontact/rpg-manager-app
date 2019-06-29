import React from 'react';
import styled from 'styled-components';
import characterData from '../character';

const Root = styled.section`
  max-width: 800px;
  margin: auto;
  padding: 20px 5px;
`;

const HBlock = styled.div`
  display: flex;
  margin: 10px 0;
`;

const VBlock = styled.div`
  margin: 10px 0;
`;

const Name = styled.h2`
  text-align: center;
`;

const Elt = styled.p`
  margin: 0 15px 0 0;
`;

export default function Character() {
  return (
    <Root>
      <Name>{characterData.name}</Name>
      <HBlock>
        <Elt>{`Race: ${characterData.race}`}</Elt>
        <Elt>{`Level: ${characterData.level}`}</Elt>
        <Elt>{`XP: ${characterData.xp}`}</Elt>
      </HBlock>
      <VBlock>
        <Elt>{`Gender: ${characterData.gender}`}</Elt>
        <Elt>{`Profession: ${characterData.profession}`}</Elt>
        <Elt>{`Speed: ${characterData.speed} km/h`}</Elt>
        <Elt>{`Languages: ${characterData.languages[0]}`}</Elt>
        <HBlock>
          <Elt>{`Health: ${characterData.health}`}</Elt>
          <Elt>{`Armor: ${characterData.armor}`}</Elt>
        </HBlock>
      </VBlock>
      <VBlock>
        <Elt>{`Constitution: ${characterData.constitution}`}</Elt>
        <Elt>{`Force: ${characterData.force}`}</Elt>
        <Elt>{`Dexterity: ${characterData.dexterity}`}</Elt>
        <Elt>{`Intelligence: ${characterData.intelligence}`}</Elt>
        <Elt>{`Charisma: ${characterData.charisma}`}</Elt>
        <Elt>{`Wisdom: ${characterData.wisdom}`}</Elt>
      </VBlock>
    </Root>
  );
}
