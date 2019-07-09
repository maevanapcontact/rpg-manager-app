import React from 'react';
import styled from 'styled-components';

const Root = styled.section`
  width: 100%;
  max-width: 600px;
  margin: 80px auto 20px auto;
`;

const Img = styled.div`
  width: 250px;
  height: 250px;
  margin: auto;
  background: #333;
`;

const Content = styled.p`
  font-size: 1.5em;
  text-align: center;
  margin: 30px 0;
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Btn = styled.button`
  padding: 5px 10px;
  border-radius: 3px;
  border: 5px solid #b58b51;
  background: #633921;
  color: #fff;
  font-weight: 600;
  font-size: 1.2em;
  margin: 5px 10px;

  &:hover {
    cursor: pointer;
    background: #600204;
    text-decoration: underline;
  }
`;

export default function Log() {
  return (
    <Root>
      <Img />
      <Content>Welcome new soul! Do you have a character?</Content>
      <Buttons>
        <Btn type="button">Yes! Log me in!</Btn>
        <Btn type="button">Not yet! Sign me up!</Btn>
      </Buttons>
    </Root>
  );
}
