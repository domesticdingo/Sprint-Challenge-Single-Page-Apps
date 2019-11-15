import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Head = styled.header`
  text-align: center;
`

const Welcome = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Head>
        <h1>Welcome to the ultimate fan site!</h1>
        <Welcome>
          <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
          />
        </Welcome>
        <div className="nav-link">
          <Link to = "/characters">Characters</Link>
        </div>
      </Head>
    </section>
  );
}
