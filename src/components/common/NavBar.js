import { Grid, Link } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

const NavBar = ({ navLink, setActiveNav, activeNav }) => {
    const useStyles = makeStyles((theme) => ({
        nestedRoot: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: "15px",
            fontStyle: 'bold',
            alignItems: 'center',
        },
        link: {
            color: '#1c1c1c',
            fontWeight: 'bold'
        }
    }));

    const classes = useStyles();

    const changeNav = (event, index) => {
        event.preventDefault();
        setActiveNav(index);
        window.location.href = navLink[index].href;
        const anchor = document.querySelector(navLink[index].href);
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    return (
        <Grid container spacing={1} className={classes.root}>
            {navLink.map((el, index) => (
                <Grid container item xs={3} spacing={5} key={index} className={classes.nestedRoot}>
                    <Link onClick={(event) => changeNav(event, index)} className={`${classes.link} ${index === activeNav ? 'active' : ''}`} href={el.href} >
                        {el.name}
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
}

NavBar.propTypes = {
    navLink: PropTypes.array,
    setActiveNav: PropTypes.func,
    activeNav: PropTypes.number
}

export default NavBar;
