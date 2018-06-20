import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: '50vw',
    height: '100vh',
  },
  title: {
    fontSize: 40,
  }, 
};

function MovieTile(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>
            Movies
          </Typography>
        </CardContent>
        <Link to='/movies'>
          <CardActions>
            <Button size="large">Display More Movies</Button>
          </CardActions>
        </Link>
      </Card>
    </div>
  );
}

MovieTile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieTile);