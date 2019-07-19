import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./components/CharacterCard";
import './App.css';

export default function App() {
  const [data, setData] = useState( []);
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(res => {
        // receive data
        setData(res.data);
        // data receipt successful
        console.log(res.data);
        console.log(setData);

  })
      .catch(error => {
        // data receipt failure
        console.log(error, "Error receiving data");
      });
  }, []);


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {data
        ? <CharacterCard name={data.name}
                         species={data.species}
                         homeworld={data.homeworld}
                         films={data.films} />
        : <div>Loading</div>}
    </div>
  );
}

