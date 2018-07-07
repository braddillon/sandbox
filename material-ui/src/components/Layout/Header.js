import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      }
});

const Header = props => {
    const { classes } = props;

    let toolbarButton = null;
    if (!props.sidebar) {
        toolbarButton = (
        <IconButton
            className={[classes.menuButton, classes.navIconHide].join(' ')}
            color="inherit"
            aria-label="Menu"
            onClick={props.clickButton}
        >
            <MenuIcon />
        </IconButton>
        )
    }

    return (
        <div className={classes.root} style={{ marginBottom: 20 }}>
            <AppBar position="static">
                <Toolbar>
                    {toolbarButton}
                    <Typography
                        variant="title"
                        color="inherit"
                        className={classes.flex}
                    >
                        Material-UI Sandbox
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(Header);
