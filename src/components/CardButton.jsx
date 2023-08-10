import "../styles/CardButton.scss";
import PropTypes from "prop-types";

const CardButton = ({ text, type, triggerAction }) => {
  return (
    <button className={`card-button ${type}-button`} onClick={triggerAction}>
      {text}
    </button>
  );
};

CardButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  triggerAction: PropTypes.func,
};

export default CardButton;
