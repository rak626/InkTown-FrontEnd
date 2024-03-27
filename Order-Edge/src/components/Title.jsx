import PropTypes from 'prop-types';


const Title = ({ text }) => {
  return (
    <h2 className="text-lg font-semibold mb-4">{text}</h2>
  );
};
Title.propTypes = {
   text: PropTypes.string.isRequired,
};

export default Title;
