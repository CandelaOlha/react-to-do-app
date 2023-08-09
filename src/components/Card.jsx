import "../styles/Card.scss";
import TaskStatus from "./TaskStatus";
import TaskPriority from "./TaskPriority";
import CardButton from "./CardButton";

const Card = () => {
  return (
    <div className="card-container">
      <TaskStatus />
      <div className="card">
        <div className="card-title-container">
          <h2 className="card-title">Task title</h2>
          <TaskPriority />
        </div>
        <p className="card-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <CardButton text="Edit" type="edit" />
        <CardButton text="Delete" type="delete" />
      </div>
    </div>
  );
};

export default Card;
