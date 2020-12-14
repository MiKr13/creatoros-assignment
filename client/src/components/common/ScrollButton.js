import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import PropTypes from 'prop-types';

const ScrollButton = ({ goingUp, scrollTarget, spacing, threshold, staticPlace }) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            position: staticPlace ? 'absolute' : 'fixed',
            bottom: spacing ? theme.spacing(spacing.bottom) : 'unset',
            top: spacing ? theme.spacing(spacing.top) : 'unset',
            left: spacing ? theme.spacing(spacing.left) : 'unset',
            right: spacing ? theme.spacing(spacing.right) : 'unset',
        },
    }));

    const classes = useStyles();

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(scrollTarget);

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const trigger = useScrollTrigger({
        threshold,
    });

    return (
        <>
            {staticPlace ?
                <div onClick={handleClick} className={classes.root}>
                    {goingUp ? <KeyboardArrowUp aria-label={`Scroll back to ${goingUp ? 'top' : 'bottom'}`} /> : <KeyboardArrowDown aria-label={`Scroll back to ${goingUp ? 'top' : 'bottom'}`} />}
                </div>
                :
                <Zoom in={trigger}>
                    <div onClick={handleClick} role="presentation" className={classes.root}>
                        <Fab size="small" aria-label={`Scroll back to ${goingUp ? 'top' : 'bottom'}`}>
                            {goingUp ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                        </Fab>
                    </div>
                </Zoom>
            }
        </>
    );
};

ScrollButton.propTypes = {
    goingUp: PropTypes.bool.isRequired,
    scrollTarget: PropTypes.string.isRequired,
    spacing: PropTypes.object,
    threshold: PropTypes.number.isRequired,
    staticPlace: PropTypes.bool.isRequired
};

export default ScrollButton;
