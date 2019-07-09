import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_CHARACTER = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      race
      level
      xp
      picture
      gender
      profession
      health
      armor
      intelligence
      force
      dexterity
      wisdom
      constitution
      charisma
    }
  }
`;

const Root = styled.section`
  max-width: 600px;
  margin: 80px auto 0 auto;
  padding: 10px;
  background: #ccc;
  border: 1px solid #633921;
  border-radius: 3px;
`;

const Img = styled.div`
  background: #333;
  width: 150px;
  height: 150px;
  margin: 0 auto 20px auto;
`;

const HBlock = styled.div`
  display: flex;
  margin: 20px 0;
`;

const VBlock = styled.div`
  margin: 20px 0;
`;

const Name = styled.h2`
  text-align: center;
  padding: 0 0 10px 0;
  margin: 0 0 20px 0;
  border-bottom: 1px solid #633921;
`;

const Elt = styled.p`
  margin: 5px 15px 5px 0;
`;

const EltTitle = styled.span`
  font-weight: 600;
`;

export default function Character() {
  return (
    <Query query={GET_CHARACTER} variables={{ id: '5d24df2965d9430324cdf65b' }}>
      {({ loading, error, data }) => {
        if (loading) {
          return <Root>Loading character...</Root>;
        }
        if (error) {
          return <Root>Impossible to load character...</Root>;
        }

        const { character } = data;

        return (
          <Root>
            <Name>{character.name}</Name>
            <Img />
            <HBlock
              style={{
                justifyContent: 'center',
              }}
            >
              <Elt>
                <EltTitle>Race: </EltTitle>
                {character.race}
              </Elt>
              <Elt>
                <EltTitle>Level: </EltTitle>
                {character.level}
              </Elt>
              <Elt>
                <EltTitle>XP: </EltTitle>
                {character.xp}
              </Elt>
            </HBlock>
            <VBlock>
              <Elt>
                <EltTitle>Gender: </EltTitle>
                {character.gender}
              </Elt>
              <Elt>
                <EltTitle>Profession: </EltTitle>
                {character.profession}
              </Elt>
              <Elt>
                <EltTitle>Money: </EltTitle>
                {character.money}
              </Elt>
              <HBlock>
                <Elt>
                  <EltTitle>Health: </EltTitle>
                  {character.health}
                </Elt>
                <Elt>
                  <EltTitle>Armor: </EltTitle>
                  {character.armor}
                </Elt>
              </HBlock>
            </VBlock>
            <VBlock>
              <Elt>
                <EltTitle>Constitution: </EltTitle>
                {character.constitution}
              </Elt>
              <Elt>
                <EltTitle>Force: </EltTitle>
                {character.force}
              </Elt>
              <Elt>
                <EltTitle>Dexterity: </EltTitle>
                {character.dexterity}
              </Elt>
              <Elt>
                <EltTitle>Intelligence: </EltTitle>
                {character.intelligence}
              </Elt>
              <Elt>
                <EltTitle>Charisma: </EltTitle>
                {character.charisma}
              </Elt>
              <Elt>
                <EltTitle>Wisdom: </EltTitle>
                {character.wisdom}
              </Elt>
            </VBlock>
          </Root>
        );
      }}
    </Query>
  );
}
