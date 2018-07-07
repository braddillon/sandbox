import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import NavigationIcon from '@material-ui/icons/Navigation';
import AddIcon from '@material-ui/icons/Add';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    extendedIcon: {
        marginRight: theme.spacing.unit
    },
    input: {
        display: 'none'
    }
});

const Buttons = props => {
    const { classes } = props;

    return (
        <Fragment>
            <div style={{ marginBottom: 20 }}>
                <Button variant="contained" className={classes.button}>
                    Default
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    Primary
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                >
                    Secondary
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    disabled
                    className={classes.button}
                >
                    Disabled
                </Button>
                <Button
                    variant="contained"
                    href="#contained-buttons"
                    className={classes.button}
                >
                    Link
                </Button>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button
                        variant="contained"
                        component="span"
                        className={classes.button}
                    >
                        Upload
                    </Button>
                </label>
            </div>

            <div style={{ marginBottom: 20 }}>
                <IconButton className={classes.button} aria-label="Delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton
                    className={classes.button}
                    aria-label="Delete"
                    disabled
                    color="primary"
                >
                    <DeleteIcon />
                </IconButton>
                <IconButton
                    color="secondary"
                    className={classes.button}
                    aria-label="Add an alarm"
                >
                    <Icon>alarm</Icon>
                </IconButton>
                <IconButton
                    color="primary"
                    className={classes.button}
                    aria-label="Add to shopping cart"
                >
                    <AddShoppingCartIcon />
                </IconButton>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="icon-button-file"
                    type="file"
                />
                <label htmlFor="icon-button-file">
                    <IconButton
                        color="primary"
                        className={classes.button}
                        component="span"
                    >
                        <PhotoCamera />
                    </IconButton>
                </label>
            </div>

            <div style={{ marginBottom: 20 }}>
                <Button
                    variant="fab"
                    color="primary"
                    aria-label="add"
                    className={classes.button}
                >
                    <AddIcon />
                </Button>
                <Button
                    variant="fab"
                    color="secondary"
                    aria-label="edit"
                    className={classes.button}
                >
                    <Icon>edit_icon</Icon>
                </Button>
                <Button
                    variant="extendedFab"
                    aria-label="delete"
                    className={classes.button}
                >
                    <NavigationIcon className={classes.extendedIcon} />
                    Extended
                </Button>
                <Button
                    variant="fab"
                    disabled
                    aria-label="delete"
                    className={classes.button}
                >
                    <DeleteIcon />
                </Button>
            </div>
        </Fragment>
    );
};

export default withStyles(styles)(Buttons);
