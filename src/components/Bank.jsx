import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_CHARACTER = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      money
      transactions {
        description
        action
        amount
        number
      }
    }
  }
`;

const Root = styled.section`
  width: 100%;
  max-width: 600px;
  margin: 80px auto 10px auto;
`;

const Money = styled.p`
  width: 100%;
  text-align: right;
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: 2px solid #633921;
  padding: 5px;
  color: #633921;
`;

const Transactions = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0 0 0;
`;

const Tr = styled.tr`
  border: 1px solid #633921;

  &:nth-child(even) {
    background: #d1ab77;
  }
`;

const Td = styled.td`
  border: 1px solid #633921;
  padding: 5px;
`;

export default function Bank() {
  return (
    <Query query={GET_CHARACTER} variables={{ id: '5d276702944fff0f243a195f' }}>
      {({ loading, error, data }) => {
        if (loading) {
          return <Root>Loading bank...</Root>;
        }
        if (error) {
          return <Root>Impossible to load bank...</Root>;
        }

        const { character } = data;
        const { money, transactions } = character;

        return (
          <Root>
            <Money>{`Current money: ${money}`}</Money>
            <Transactions>
              <Tr
                style={{
                  backgroundColor: '#633921',
                  color: '#fff',
                  fontWeight: '600',
                }}
              >
                <Td>Description</Td>
                <Td>Outcome</Td>
                <Td>Income</Td>
              </Tr>
              {transactions.map(item => (
                <Tr>
                  <Td>{item.description}</Td>
                  <Td>{item.action === 'substract' && item.amount}</Td>
                  <Td>{item.action === 'add' && item.amount}</Td>
                </Tr>
              ))}
            </Transactions>
          </Root>
        );
      }}
    </Query>
  );
}
