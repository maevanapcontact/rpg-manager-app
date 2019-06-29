import React from 'react';
import styled from 'styled-components';
import characterData from '../character';

const Root = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-bottom: 1px solid #333;
  font-style: italic;
`;

const Data = styled.p``;

export default function InfoBar() {
  return (
    <Root>
      <Data>
        {`Name: ${characterData.name}`}
      </Data>
      <Data>
        {`Race: ${characterData.race}`}
      </Data>
      <Data>
        {`Level: ${characterData.level}`}
      </Data>
    </Root>
  );
}
