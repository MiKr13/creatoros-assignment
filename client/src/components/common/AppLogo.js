import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        fontWeight: 800,

        '&::before': {
            content: '"-"',
            lineHeight: 0,
            border: '10px black solid',
            position: 'absolute',
            top: 80,
            borderTop: 'none',
        }
    },
}));

const AppLogo = ({ text }) => {
    const classes = useStyles();

    return (
        <Typography id="logo" variant="h3" className={classes.root} >{text}</Typography>
    );
}

AppLogo.propTypes = {
    text: PropTypes.string
};

export default AppLogo;
