import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export default function CharacterCard(props) {
  console.log(props);
  return (
    <Card>
      <CardMedia
        name={props.name}
        species={props.species}
        homeworld={props.homeworld}
        films={props.films}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">{props.name}</Typography>
        <Divider variant="middle" component="p" />
        <Typography gutterBottom variant="h5" component="h2">{props.species}</Typography>
        <Typography gutterBottom variant="h5" component="h2">{props.homeworld}</Typography>
        <Typography gutterBottom variant="h5" component="h2">{props.films}</Typography>
      </CardContent>
    </Card>
  );
}

