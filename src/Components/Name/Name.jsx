import Credits from "../Credits/Credits";
import Names from "../Names/Names";
import PropTypes from 'prop-types';

const Name = ({ names, credit, price, addCredit}) => {
  return (
    <div className="ml-10 mt-10 bg-indigo-200 rounded-xl p-6 space-y-2">
      <h3 className='text-2xl'>Credit Hour Remaining: {credit}</h3>
      <p className="border-b-2"></p>
      <h2 className="text-2xl">Course Name: {names.length}</h2>
      {
        names.map((name, idx) => <Names key={idx} name={name}></Names>)
      }
      <p className="border-b-2"></p>
      <Credits addCredit={addCredit} />
      <p className="border-b-2"></p>
      <h3 className="text-2xl">total Price: {price} USD</h3>

      
    </div>
  );
};

Name.propTypes = {
  names: PropTypes.arrayOf(PropTypes.object).isRequired,
  credit: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  addCredit: PropTypes.number.isRequired
}

export default Name;
