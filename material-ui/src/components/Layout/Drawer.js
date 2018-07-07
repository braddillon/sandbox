import React from 'react';

import { Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Hidden from '@material-ui/core/Hidden';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Book';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative'
        }
    },
});

const SideDrawer = props => {
    console.log(props);
    const { classes } = props;

    const drawer = (
        <div
            tabIndex={0}
            role="button"
            onClick={props.toggleDrawer}
            onKeyDown={props.toggleDrawer}
        >
            <div className={classes.list}>
                <List component="nav">
                    <ListItem button component={Link} to="/">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component={Link} to="/buttons">
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Buttons" />
                    </ListItem>
                </List>
                <Divider />
                <List component="nav">
                    <ListItem button component={Link} to="/input">
                        <ListItemText primary="Input" />
                    </ListItem>
                    <ListItem button component={Link} to="/cards">
                        <ListItemText primary="Cards" />
                    </ListItem>
                </List>
            </div>
        </div>
    );

    return (
        <div>
            <Hidden mdUp>
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={props.sidebar}
                    onClose={props.toggleDrawer}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Drawer
                    variant="permanent"
                    open
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>

        </div>
        
    );
};

export default withStyles(styles)(SideDrawer);
