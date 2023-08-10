import "../styles/Form.scss";
import PropTypes from "prop-types";
import { useState } from "react";
import SectionTitle from "./SectionTitle";

const Form = ({ addTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: false,
    status: false,
  });

  const { title, description, priority, status } = task;

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({
      ...task,
      id: Date.now(),
      status: status === "completed",
    });
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    setTask({
      ...task,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <SectionTitle title="Add new task" />
      <div className="form-element-container">
        <label className="form-label">
          Title
          <input
            className="form-element"
            type="text"
            name="title"
            value={title}
            placeholder="Write task title..."
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-element-container">
        <label className="form-label">
          Description
          <textarea
            className="form-element form-text-area"
            name="description"
            value={description}
            placeholder="Write task description..."
            onChange={handleChange}
          ></textarea>
        </label>
      </div>
      <div className="form-element-container form-checkbox-container">
        <input
          className="form-element form-checkbox"
          type="checkbox"
          name="priority"
          checked={priority}
          onChange={handleChange}
        />
        <label htmlFor="priority" className="form-label">
          Give this task priority
        </label>
      </div>
      <div className="form-element-container">
        <label className="form-label">
          Status
          <select
            className="form-element"
            name="status"
            onChange={handleChange}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </label>
      </div>
      <input className="form-button" type="submit" value="Add task" />
    </form>
  );
};

Form.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default Form;
