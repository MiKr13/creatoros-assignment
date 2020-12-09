import { Toolbar, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

const AppBar = ({ Left, Center, Right }) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
        },
    }));

    const classes = useStyles();

    return (
        <Toolbar className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs>
                    {Left ? Left : null}
                </Grid>
                <Grid item xs={6}>
                    {Center ? Center : null}
                </Grid>
                <Grid item xs>
                    {Right ? Right : null}
                </Grid>
            </Grid>
        </Toolbar>
    );
}

AppBar.propTypes = {
    Left: PropTypes.object,
    Center: PropTypes.object,
    Right: PropTypes.object,
}

export default AppBar;
