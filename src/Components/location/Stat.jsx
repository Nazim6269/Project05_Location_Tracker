import PropTypes from "prop-types";

/* Small stat block */
const Stat = ({ label, value }) => (
  <div className="bg-white/20 backdrop-blur-lg rounded-xl p-3 text-center">
    <p className="text-xs opacity-80">{label}</p>
    <p className="text-sm font-semibold">{value}</p>
  </div>
);

//defining proptypes
Stat.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

export default Stat;
