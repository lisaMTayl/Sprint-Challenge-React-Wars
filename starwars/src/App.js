import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./components/CharacterCard";
import './App.css';
import Container from '@material-ui/core/Container';

export default function App() {

  const [characters, setCharacters] = useState( []);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(res => {
        // receive data
        setCharacters(res.data.results);
        // data receipt successful
        console.log(res.data.results);

  })
      .catch(error => {
        // data receipt failure
        console.log(error, "I'm broken!");
      });
  }, []);


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <Container className="App" maxWidth="md">
      <h1 className="Header">React Wars</h1>


       {characters.map(data => (

     <CharacterCard name={data.name}
                    species={data.species}
                    gender={data.gender}
                    homeworld={data.homeworld}
                    hairColor={data.hair_color}
                    eyeColor={data.eye_color} />
      ))}
    </Container>
  );
}


