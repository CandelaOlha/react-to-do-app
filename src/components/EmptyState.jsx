import "../styles/emptyState.scss";
import emptyState from "../media/empty-state.svg";

const EmptyState = () => {
  return (
    <div className="empty-state-container">
      <img className="empty-state-image" src={emptyState} alt="Empty state" />
      <p className="empty-state-text">No tasks added yet.</p>
    </div>
  );
};

export default EmptyState;
