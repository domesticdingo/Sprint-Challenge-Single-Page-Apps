import React from "react";
import CharacterList from './CharacterList';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Center = styled.div`
  text-align: center;
  margin-bottom: 50px;
`

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Center><Link to = "/">Back to Home</Link></Center>
      <CharacterList />
    </header>
  );
}
