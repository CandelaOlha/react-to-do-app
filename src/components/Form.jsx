import "../styles/Form.scss";
import SectionTitle from "./SectionTitle";

const Form = () => {
  return (
    <form>
      <SectionTitle title="Add new task" />
      <div className="form-element-container">
        <label className="form-label">
          {" "}
          Title
          <input
            className="form-element"
            type="text"
            name="title"
            placeholder="Write task title..."
          />
        </label>
      </div>
      <div className="form-element-container">
        <label className="form-label">
          {" "}
          Description
          <textarea
            className="form-element form-text-area"
            name="description"
            placeholder="Write task description..."
          ></textarea>
        </label>
      </div>
      <div className="form-element-container form-checkbox-container">
        <input
          className="form-element form-checkbox"
          type="checkbox"
          name="priority"
        />
        <label htmlFor="priority" className="form-label">
          Give this task priority
        </label>
      </div>
      <div className="form-element-container">
        <label className="form-label">
          {" "}
          Status
          <select className="form-element" name="status">
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </label>
      </div>
      <input className="form-button" type="submit" value="Add task" />
    </form>
  );
};

export default Form;
