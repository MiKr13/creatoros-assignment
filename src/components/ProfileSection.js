
import { Typography, Container, Grid, Avatar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ScrollButton from './common/ScrollButton';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10)
    },
    large: {
        width: theme.spacing(45),
        height: theme.spacing(45),
    },
    avatar: {
        padding: '20px 40px'
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

const ProfileSection = ({ name, email, image, isLoggedIn }) => {

    const classes = useStyles();

    const spacing = {
        bottom: 0,
        top: 103,
        left: 0,
        right: 100,
    }

    return (
        <Container maxWidth="lg" className={classes.root} id="profile">
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    {isLoggedIn ?
                        <Grid container spacing={5} className={classes.avatar}>
                            <Grid item xs={12} sm={12} md={4}>
                                <Avatar alt={name} src={image} className={classes.large} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} className={classes.center}>
                                <Typography variant="h2">{name}</Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.center}>
                                <Typography variant="h3">{email}</Typography>
                            </Grid>
                        </Grid> :
                        <Grid container spacing={5} className={classes.avatar}>
                            <Grid item xs={12} sm={12} md={4}>
                                <Avatar alt="random" src="https://images.unsplash.com/photo-1607430761186-6b682f1ba4c4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80" className={classes.large} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} className={classes.center}>
                                <Typography variant="h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus nunc.</Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.center}>
                                <Typography variant="h3">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.</Typography>
                            </Grid>
                        </Grid>
                    }
                </Grid>
                <Grid item xs={false}></Grid>
            </Grid>
            <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
                <ScrollButton goingUp={false} scrollTarget="#horeca" threshold={0} spacing={spacing} staticPlace={true} ></ScrollButton>
            </Box>
        </Container>
    );
}

ProfileSection.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
    isLoggedIn: PropTypes.bool
}

export default ProfileSection;
