import "../styles/Card.scss";
import PropTypes from "prop-types";
import TaskStatus from "./TaskStatus";
import TaskPriority from "./TaskPriority";
import CardButton from "./CardButton";

const Card = ({ task, deleteTask, modifyTaskStatus }) => {
  const { id, title, description, priority, status } = task;

  return (
    <div className="card-container">
      <TaskStatus
        status={status}
        modifyTaskStatus={() => modifyTaskStatus(id)}
      />
      <div className="card">
        <div className="card-title-container">
          <h2 className={`card-title ${status && "completed-task"}`}>
            {title}
          </h2>
          {priority && <TaskPriority />}
        </div>
        <p className={`card-description ${status && "completed-task"}`}>
          {description}
        </p>
        <CardButton text="Edit" type="edit" />
        <CardButton
          text="Delete"
          type="delete"
          triggerAction={() => deleteTask(id)}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  modifyTaskStatus: PropTypes.func.isRequired,
};

export default Card;
