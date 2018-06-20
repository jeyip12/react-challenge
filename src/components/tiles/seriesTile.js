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

function SeriesTile(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>
            Series
          </Typography>
        </CardContent>
        <Link to='/series'>
          <CardActions>
            <Button size="large">Display More Movie Series</Button>
          </CardActions>
        </Link>
      </Card>
    </div>
  );
}

SeriesTile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SeriesTile);