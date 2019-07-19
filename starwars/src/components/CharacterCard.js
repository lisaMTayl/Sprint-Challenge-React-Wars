import React from 'react';


export default function CharacterCard(props) {
  console.log(props);
  return (
    <div>
      <div
        name={props.name}
        species={props.species}
        homeworld={props.homeworld}
        films={props.films}
      />

    </div>
  );
}

