import "../styles/TaskPriority.scss";
import { FaStar } from "react-icons/fa";

const TaskPriority = () => {
  return (
    <div className="card-status-container">
      <FaStar className="card-status-icon" />
      <p className="card-status-text">Priority</p>
    </div>
  );
};

export default TaskPriority;
