import "../styles/TaskStatus.scss";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";

const TaskStatus = ({ status, modifyTaskStatus }) => {
  return (
    <div
      onClick={modifyTaskStatus}
      className={`task-status-container ${status ? "completed" : "pending"}`}
    >
      <FaCheck
        className={`task-status-icon ${status ? "completed" : "pending"}`}
      />
    </div>
  );
};

TaskStatus.propTypes = {
  status: PropTypes.bool.isRequired,
  modifyTaskStatus: PropTypes.func.isRequired,
};

export default TaskStatus;
