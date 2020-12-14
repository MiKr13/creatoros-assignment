import { Grid, Link, Box, Toolbar, List, ListItem, ListItemText, Drawer, IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react'
import PropTypes from 'prop-types'

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nestedRoot: {
        marginTop: "15px",
        fontStyle: 'bold',
    },
    link: {
        color: '#1c1c1c',
        fontWeight: 'bold'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const NavBar = ({ navLink, setActiveNav, activeNav }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const container = window.document.body;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

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
        <>
            <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
                <Grid container spacing={1} className={classes.root}>
                    {navLink.map((el, index) => (
                        <Grid container item xs={3} spacing={5} key={index} className={classes.nestedRoot}>
                            <Link onClick={(event) => changeNav(event, index)} className={`${classes.link} ${index === activeNav ? 'active' : ''}`} href={el.href} >
                                {el.name}
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box display={{ xs: 'block', sm: 'block', md: 'none' }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    container={container}
                    className={classes.drawer}
                    variant="temporary"
                    anchor='right'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <List>
                            {navLink.map((el, index) => (
                                <ListItem button key={index} href={el.href} onClick={(event) => changeNav(event, index)}>
                                    <ListItemText primary={el.name} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </Box>
        </>
    );
}

NavBar.propTypes = {
    navLink: PropTypes.array,
    setActiveNav: PropTypes.func,
    activeNav: PropTypes.number
}

export default NavBar;
