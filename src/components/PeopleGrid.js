import { Container, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from './common/Image';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10)
    },
    tileBar: {
        backgroundColor: 'unset',
        fontWeight: 'bolder',
        fontSize: 'xx-large !important',
    }
}));

const PeopleGrid = ({ people }) => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.root} id="profile">
            <GridList cellHeight={400} cols={3} spacing={20} className={classes.gridList}>
                {people.map((person, index) => (
                    <GridListTile key={index} cols={1}>
                        <Image
                            src={person.img}
                            alt={person.title} />
                        <GridListTileBar
                            title={person.title}
                            subtitle={<span>{person.job}</span>}
                            className={classes.tileBar}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </Container>
    )
};

export default PeopleGrid;
