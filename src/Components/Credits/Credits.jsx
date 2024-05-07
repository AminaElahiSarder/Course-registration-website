import PropTypes from 'prop-types';

const Credits = ({ addCredit }) => {
    return (
        <div>
            <h3 className="text-2xl">Total Credit Hour: {addCredit}</h3>
        </div>
    );
};

Credits.propTypes = {
    addCredit: PropTypes.number.isRequired
};

export default Credits;
