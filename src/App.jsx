import "./App.scss";
import Form from "./components/Form";
import CardsContainer from "./components/CardsContainer";

const tasks = [
  {
    id: 1,
    title: "Task 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    priority: true,
    status: true,
  },
  {
    id: 2,
    title: "Task 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    priority: false,
    status: false,
  },
  {
    id: 3,
    title: "Task 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    priority: true,
    status: false,
  },
];

const App = () => {
  return (
    <div className="content-container">
      <Form />
      <CardsContainer tasks={tasks} />
    </div>
  );
};

export default App;
