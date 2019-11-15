import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components'

const CharacterList = props => {
  const [characters, setCharacters] = useState ([])
  const [query, setQuery] = useState ("")

  const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `
  const Center = styled.form`
    display: flex;
    justify-content: center;
  `

  const Search = styled.input`
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 30px;
    padding-right: 20px;
    border: 2px solid black;
    border-radius: 10px;
    margin-bottom: 50px;
  `

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          const data = response.data.results.filter(param =>
            param.name.toLowerCase().includes(query.toLowerCase()))
            setCharacters(data)
        })
        .catch(error => {
          console.error('Server error: ', error)
        })
    }

    getCharacters();
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  return (
    <div>
      <Center>
        <Search
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="promp search-name"
          placeholder="Search by character name"
          autoComplete="off"
          />
      </Center>
      
      <Wrap>
      {characters.map(char => (
        <CharacterCard key={char.id} char={char} />
      ))}
      </Wrap>
    </div>
  )
}


function CharacterCard({ char }) {
  const {image, name, status, species} = char;
  return (
    <div className="character-card">
      <img src={image} alt="A character's face" />
      <h2>{name}</h2>
      <div className="character-info">
        <p>Status: {status}</p>
        <p>Species: {species}</p>
      </div>
    </div>
  )
}
export default CharacterList