import React, { useState } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const CREATE_CHARACTER = gql`
  mutation addCharacter(
    $name: String!,
    $race: String!,
    $picture: String,
    $gender: String,
    $profession: String,
    $health: Int,
    $armor: Int,
    $force: Int,
    $dexterity: Int,
    $wisdom: Int,
    $constitution: Int,
    $charisma: Int,
    $intelligence: Int,
    $money: Float
  ) {
    addCharacter(
      name: $name,
      race: $race,
      picture: $picture,
      gender: $gender,
      profession: $profession,
      health: $health,
      armor: $armor,
      force: $force,
      dexterity: $dexterity,
      wisdom: $wisdom,
      constitution: $constitution,
      charisma: $charisma,
      intelligence: $intelligence,
      money: $money
    ) {
      id
    }
  }
`;

const Root = styled.section`
  width: 100%;
  max-width: 600px;
  margin: 0 auto 100px auto;
  padding: 10px;
`;

const CharacterForm = styled.form``;

const InnerForm = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 20px auto;
`;

const Img = styled.div`
  width: 100%;
  max-width: 300px;
  height: 500px;
  background: #333;
  margin: 80px auto 20px auto;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  color: #633921;
  font-size: 1.2em;
`;

const Name = styled(Label)`
  display: block;
  margin: auto;
  text-align: center;
`;

const LabelContent = styled.span`
  width: 120px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 150px;
  background-color: none;
  background: #f8eed3;
  border: none;
  border-bottom: 2px solid #633921;
  color: #633921;
  font-style: italic;
  font-size: 1em;
`;

const GenderChoice = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 20px 0;
`;

const Gender = styled.button`
  padding: 5px 10px;
  border-radius: 3px;
  border: 5px solid #b58b51;
  background: #633921;
  color: #fff;
  font-weight: 600;
  margin: 5px 10px;

  &:hover {
    cursor: pointer;
    background: #600204;
    text-decoration: underline;
  }
`;

const Submit = styled(Gender)`
  display: block;
  margin: auto;
  font-size: 1.2em;
`;

function HandleSubmit(evt) {
  evt.preventDefault();
}

export default function CreateCharacter() {
  const [picture, setPicture] = useState('male');
  const [gender, setGender] = useState('male');
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [profession, setProfession] = useState('');
  const [health, setHealth] = useState(1);
  const [armor, setArmor] = useState(0);
  const [force, setForce] = useState(1);
  const [dexterity, setDexterity] = useState(1);
  const [wisdom, setWisdom] = useState(1);
  const [constitution, setConstitution] = useState(1);
  const [charisma, setCharisma] = useState(1);
  const [intelligence, setIntelligence] = useState(1);
  const [money, setMoney] = useState(0);

  return (
    <Mutation mutation={CREATE_CHARACTER}>
      {addCharacter => (
        <Root>
          <CharacterForm onSubmit={HandleSubmit}>
            <Img />
            <GenderChoice>
              <Gender
                type="button"
                onClick={() => {
                  setGender('male');
                  setPicture('male');
                }}
              >
                Male
              </Gender>
              <Gender
                type="button"
                onClick={() => {
                  setGender('female');
                  setPicture('female');
                }}
              >
                Female
              </Gender>
            </GenderChoice>
            <Name>
              <Input type="text" value={name} placeholder="Name" onChange={evt => setName(evt.target.value)} />
            </Name>
            <InnerForm>
              <Label>
                <LabelContent>Race:</LabelContent>
                <Input type="text" value={race} placeholder="Race" onChange={evt => setRace(evt.target.value)} />
              </Label>
              <Label>
                <LabelContent>Profession:</LabelContent>
                <Input type="text" value={profession} placeholder="Profession" onChange={evt => setProfession(evt.target.value)} />
              </Label>
              <Label>
                <LabelContent>Health:</LabelContent>
                <Input type="number" value={health} min={0} max={100} onChange={evt => setHealth(evt.target.value)} />
              </Label>
              <Label>
                <LabelContent>Armor:</LabelContent>
                <Input type="number" value={armor} min={0} max={100} onChange={evt => setArmor(evt.target.value)} />
              </Label>
              <Label>
                <LabelContent>Force:</LabelContent>
                <Input type="number" value={force} min={0} max={100} onChange={evt => setForce(evt.target.value)} />
              </Label>
              <Label>
                <LabelContent>Dexterity:</LabelContent>
                <Input type="number" value={dexterity} min={0} max={100} onChange={evt => setDexterity(evt.target.value)} />
              </Label>
              <Label>
                <LabelContent>Wisdom:</LabelContent>
                <Input type="number" value={wisdom} min={0} max={100} onChange={evt => setWisdom(evt.target.value)} />
              </Label>
              <Label>
                <LabelContent>Constitution:</LabelContent>
                <Input type="number" value={constitution} min={0} max={100} onChange={evt => setConstitution(evt.target.value)} />
              </Label>
              <Label>
                <LabelContent>Charisma:</LabelContent>
                <Input type="number" value={charisma} min={0} max={100} onChange={evt => setCharisma(evt.target.value)} />
              </Label>
              <Label>
                <LabelContent>Intelligence:</LabelContent>
                <Input type="number" value={intelligence} min={0} max={100} onChange={evt => setIntelligence(evt.target.value)} />
              </Label>
              <Label>
                <LabelContent>Money:</LabelContent>
                <Input type="number" value={money} min={0} max={100} onChange={evt => setMoney(evt.target.value)} />
              </Label>
            </InnerForm>
            <Submit
              type="submit"
              onClick={(evt) => {
                evt.preventDefault();
                addCharacter({
                  variables: {
                    name,
                    race,
                    picture,
                    gender,
                    profession,
                    health: parseInt(health, 10),
                    armor: parseInt(armor, 10),
                    force: parseInt(force, 10),
                    dexterity: parseInt(dexterity, 10),
                    wisdom: parseInt(wisdom, 10),
                    constitution: parseInt(constitution, 10),
                    charisma: parseInt(charisma, 10),
                    intelligence: parseInt(intelligence, 10),
                    money: parseFloat(money),
                  },
                });
              }}
            >
              Create Character
            </Submit>
          </CharacterForm>
        </Root>
      )}
    </Mutation>
  );
}
