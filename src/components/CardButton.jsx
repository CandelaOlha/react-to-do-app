import "../styles/CardButton.scss";
import PropTypes from "prop-types";

const CardButton = ({ text, type }) => {
  return <button className={`card-button ${type}-button`}>{text}</button>;
};

CardButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default CardButton;
