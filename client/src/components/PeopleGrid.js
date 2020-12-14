import { Container, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
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

const PeopleGrid = ({ people, width }) => {
    const classes = useStyles();

    const getGridListCols = () => {
        if (isWidthUp('xl', width)) {
            return 3;
        }

        if (isWidthUp('lg', width)) {
            return 2;
        }

        if (isWidthUp('md', width)) {
            return 2;
        }

        return 1;
    }

    const getCellHeight = () => {
        if (isWidthUp('lg', width)) {
            return 400;
        }

        if (isWidthUp('md', width)) {
            return 300;
        }

        return 200;
    }

    return (
        <Container maxWidth="lg" className={classes.root} id="profile">
            <GridList cellHeight={getCellHeight()} cols={getGridListCols()} spacing={20} className={classes.gridList}>
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

export default withWidth()(PeopleGrid);
