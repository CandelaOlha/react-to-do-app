import "../styles/TaskStatus.scss";
import { FaCheck } from "react-icons/fa";

const TaskStatus = () => {
  return (
    <div className="task-status-container">
      <FaCheck className="task-status-icon" />
    </div>
  );
};

export default TaskStatus;
