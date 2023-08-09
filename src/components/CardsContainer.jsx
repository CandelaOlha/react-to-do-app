import "../styles/CardsContainer.scss";
import PropTypes from "prop-types";
import SectionTitle from "./SectionTitle";
import Card from "./Card";

const CardsContainer = ({ tasks }) => {
  return (
    <section className="cards-container">
      <SectionTitle title="My tasks" />
      {tasks.map((task) => (
        <Card key={task.id} task={task} />
      ))}
    </section>
  );
};

CardsContainer.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default CardsContainer;
