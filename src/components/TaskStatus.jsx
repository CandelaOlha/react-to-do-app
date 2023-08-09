import "../styles/TaskStatus.scss";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";

const TaskStatus = ({ status }) => {
  return (
    <div className={`task-status-container ${status ? "completed" : "pending"}`}>
      <FaCheck className={`task-status-icon ${status ? "completed" : "pending"}`} />
    </div>
  );
};

TaskStatus.propTypes = {
  status: PropTypes.bool.isRequired,
};

export default TaskStatus;
