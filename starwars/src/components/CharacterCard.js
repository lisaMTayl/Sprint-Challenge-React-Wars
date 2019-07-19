import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {CardHeader} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';



export default function CharacterCard(props) {
  console.log(props);
  return (
    <Card>
      <CardContent
        name={props.name}
        species={props.species}
        homeworld={props.homeworld}
        films={props.films}
      />

    </Card>
  );
}

