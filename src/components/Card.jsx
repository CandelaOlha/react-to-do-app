import "../styles/Card.scss";
import PropTypes from "prop-types";
import TaskStatus from "./TaskStatus";
import TaskPriority from "./TaskPriority";
import CardButton from "./CardButton";

const Card = ({ task }) => {
  const { title, description, priority, status } = task;

  return (
    <div className="card-container">
      <TaskStatus status={status} />
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
        <CardButton text="Delete" type="delete" />
      </div>
    </div>
  );
};

Card.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Card;
