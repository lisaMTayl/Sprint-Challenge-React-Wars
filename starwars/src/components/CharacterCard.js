import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1),
  },
}));



export default function CharacterCard(props) {
  const classes = useStyles();
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

        {/* A Styled Links */}
        {/* Name */}
        <Typography variant="h3" component="h2">{props.name}</Typography>

        {/* Divider */}
        <Divider variant="middle" component="p" />

        {/* Species */}
        <Typography variant="h5" component="h2">Species:
          <Link href={props.species} className={classes.link}> Link</Link>
        </Typography>

        {/* Gender */}
        <Typography variant="h5" component="h2">Species:
          <Link href={props.gender} className={classes.link}> Link</Link>
        </Typography>

        {/* Hair Color */}
        <Typography variant="h5" component="h2">Hair Color:
          <Link href={props.hairColor} className={classes.link}> Link</Link>
        </Typography>

        {/* Eye Color */}
        <Typography variant="h5" component="h2">Eye Color:
          <Link href={props.eyeColor} className={classes.link}> Link</Link>
        </Typography>

        {/* Homeworld */}
        <Typography variant="h5" component="h2">Homeworld:
          <Link href={props.homeworld} className={classes.link}> Link</Link>
        </Typography>



      </CardContent>
    </Card>

  );
}

