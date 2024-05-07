import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({ handleAddToName, handleCreditHour, handleAddPrice, handleAddToCredit }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []); // added empty dependency array to ensure useEffect only runs once

    return (
        <div className="grid grid-cols-3 gap-6 ml-20">
            {courses.map(course => (
                <Course
                    key={course.id}
                    course={course}
                    handleAddToName={handleAddToName}
                    handleCreditHour={handleCreditHour}
                    handleAddPrice={handleAddPrice}
                    handleAddToCredit={handleAddToCredit}
                />
            ))}
        </div>
    );
};

Courses.propTypes = {
    handleAddToName: PropTypes.func.isRequired,
    handleCreditHour: PropTypes.func.isRequired,
    handleAddPrice: PropTypes.func.isRequired,
    handleAddToCredit: PropTypes.func.isRequired
};

export default Courses;
