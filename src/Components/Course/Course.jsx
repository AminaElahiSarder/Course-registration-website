import PropTypes from 'prop-types';

const Course = ({ course, handleAddToName, handleCreditHour, handleAddPrice, handleAddToCredit }) => {
  const { course_name, description, img, price, credit } = course;

  const handleSelectCourse = () => {
    handleAddToName(course);
    handleCreditHour(credit);
    handleAddPrice(price);
    handleAddToCredit(credit);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl space-y-5">
      <figure className="px-10 pt-10">
        <img src={img} alt="Course" className="rounded-xl w-62 h-56" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold text-xl">{course_name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={handleSelectCourse}>Select</button>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.shape({
    course_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    credit: PropTypes.number.isRequired
  }).isRequired,
  handleAddToName: PropTypes.func.isRequired,
  handleCreditHour: PropTypes.func.isRequired,
  handleAddPrice: PropTypes.func.isRequired,
  handleAddToCredit: PropTypes.func.isRequired
};

export default Course;
