
import Image from 'material-ui-image';
import PropTypes from 'prop-types';

const Images = ({ src, alt, height, width }) => {
    const style = {
        height: height ? `${height} px` : 'auto',
        width: width ? `${width} px` : 'auto',
    }

    return (
        <Image style={style} src={src} alt={alt} />
    );
}

Image.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    alt: PropTypes.string,
    src: PropTypes.string,
}

export default Images;
