import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from './Image';


const TextImage = ({ id, heading, subheading, imageUrl }) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            height: '100%',
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(10)
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        center: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'left',
            flexDirection: 'column'
        }
    }));

    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid id={id} container spacing={5}>
                <Grid item xs={6} className={classes.center}>
                    <Typography variant="h2">{heading}</Typography>
                    <Typography variant="h6">{subheading}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Image
                        src={imageUrl}
                        alt={heading}
                        height={80}
                        width={80} />
                </Grid>
            </Grid>
        </Container>
    );
};

TextImage.propTypes = {
    id: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    imageUrl: PropTypes.string
}

export default TextImage;
