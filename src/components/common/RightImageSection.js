
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from './Image'

const RightImageSection = ({ id, src, alt, height, width }) => {

    return (
        <Grid id={id} container spacing={5}>
            <Grid item md={5} xs={false}></Grid>
            <Grid item md={7} xs={12}>
                <Image alt={alt} src={src} height={height} width={width} />
            </Grid>
        </Grid>
    );
}

RightImageSection.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    alt: PropTypes.string,
    src: PropTypes.string,
    id: PropTypes.string,
}

export default RightImageSection;
