import React from 'react';
import styled from 'styled-components';

const Root = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-bottom: 1px solid #333;
  font-style: italic;
`;

const Data = styled.p``;

export default function InfoBar() {
  const character = {
    name: 'Maeva',
    title: 'Geek',
    level: 1,
  };

  return (
    <Root>
      <Data>
        {`Name: ${character.name}`}
      </Data>
      <Data>
        {`Title: ${character.title}`}
      </Data>
      <Data>
        {`Level: ${character.level}`}
      </Data>
    </Root>
  );
}
