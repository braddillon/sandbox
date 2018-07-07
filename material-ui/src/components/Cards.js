import React, {Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  };

const Cards = (props) => {
    const { classes } = props;
    return (
        <Fragment>
        <div align='center' style={{ marginBottom: 20 }}>
        <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/584165/pexels-photo-584165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
        </div>
        </Fragment>
    );
};

export default withStyles(styles)(Cards);