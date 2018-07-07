import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200
    }
});

class Input extends Component {
    state = {
        name: 'Squats',
        weight: 255,
        reps: 10
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="name"
                    label="Name"
                    layout="dense"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />

                <TextField
                    id="weight"
                    label="Weight"
                    className={classes.textField}
                    value={this.state.weight}
                    onChange={this.handleChange('weight')}
                    margin="normal"
                />

                <TextField
                    id="reps"
                    label="Reps"
                    className={classes.textField}
                    value={this.state.reps}
                    onChange={this.handleChange('reps')}
                    margin="normal"
                />
            </form>
        );
    }
}

export default withStyles(styles)(Input);
