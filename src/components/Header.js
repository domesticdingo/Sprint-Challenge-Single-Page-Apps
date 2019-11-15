import React from "react";
import CharacterList from './CharacterList';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link to = "/">Back to Home</Link>
      <CharacterList />
    </header>
  );
}
