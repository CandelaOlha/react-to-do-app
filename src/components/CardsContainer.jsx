import "../styles/CardsContainer.scss";
import PropTypes from "prop-types";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import EmptyState from "./EmptyState";

const CardsContainer = ({ tasks, deleteTask, modifyTaskStatus }) => {
  return (
    <section className="cards-container">
      <SectionTitle title="My tasks" />
      {tasks.map((task) => (
        <Card
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          modifyTaskStatus={modifyTaskStatus}
        />
      ))}
      {tasks.length === 0 && <EmptyState />}
    </section>
  );
};

CardsContainer.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  modifyTaskStatus: PropTypes.func.isRequired,
};

export default CardsContainer;
