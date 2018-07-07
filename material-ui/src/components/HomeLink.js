import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

const HomeLink = (props) => {
    const { classes } = props;

    return (
        <div align='left'>
                <Button component={Link} to='/' size="small" variant="raised" color="secondary" className={classes.button}>
                    Home
                </Button>
        </div>
    );
};

export default withStyles(styles)(HomeLink);
