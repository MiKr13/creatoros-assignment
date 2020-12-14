import { Toolbar, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import NotificationButton from '../NotificationButton'

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
                <Grid item xs={6} sm={6} md>
                    {Left ? Left : null}
                </Grid>
                <Grid item xs={6} sm={6} md={5}>
                    {Center ? Center : null}
                </Grid>
                <Grid item xs={6} sm={6} md>
                    {Right ? Right : null}
                </Grid>
                <Grid item xs={6} sm={6} md>
                    <NotificationButton />
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
