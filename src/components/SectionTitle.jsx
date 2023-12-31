import "../styles/SectionTitle.scss";
import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  return <h2 className="section-title">{title}</h2>;
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
