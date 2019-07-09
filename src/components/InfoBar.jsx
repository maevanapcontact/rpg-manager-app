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

const Root = styled.header`
  display: flex;
  position: relative;
`;

const Avatar = styled.div`
  height: 60px;
  width: 60px;
  padding: 5px;
  border-radius: 50px;
  background: #b58b51;
  position: absolute;
  top: 5px;
  left: 10px;
  z-index: 10;
  border: 1px solid #633921;
`;

const InnerAvatar = styled.div`
  width: 100%;
  height: 100%;
  background: #333;
  border-radius: 50%;
`;

const Infos = styled.div`
  padding: 5px 10px 5px 20px;
  margin: 5px 0 0 0;
  padding 5px;
  position: absolute;
  top: 5px;
  left: 55px;
  border-radius: 0 60px 60px 0;
  background: #b58b51;
  border: 1px solid #633921;
`;

const InnerInfos = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 10px 5px 20px;
  display: flex;
  background: #633921;
  border-radius: 0 60px 60px 0;
`;

const Data = styled.p`
  padding: 0 10px;
  font-weight: 600;
  color: #fff;
`;

const InnerBorder = styled.div`
  height: 18px;
  width: 5px;
  background: #b58b51;
  border-radius: 5px;
`;

export default function InfoBar() {
  return (
    <Query query={GET_CHARACTER} variables={{ id: '5d24df2965d9430324cdf65b' }}>
      {({ loading, error, data }) => {
        if (loading || error) {
          return <Root />;
        }

        const { character } = data;

        return (
          <Root>
            <Avatar>
              <InnerAvatar />
            </Avatar>
            <Infos>
              <InnerInfos>
                <Data>{character.name}</Data>
                <InnerBorder />
                <Data>{character.race}</Data>
                <InnerBorder />
                <Data>{`lvl: ${character.level}`}</Data>
              </InnerInfos>
            </Infos>
          </Root>
        );
      }}
    </Query>
  );
}
