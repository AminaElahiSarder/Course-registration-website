import PropTypes from 'prop-types'

const Names = ({name}) => {
    const {course_name} = name
    return (
        <div className='bg-state-200 rounded-xl'>
            <h3 className='text-xl m-4'>{course_name}</h3>
        </div>
    );
};

Names.propTypes = {
    name: PropTypes.object
}

export default Names;