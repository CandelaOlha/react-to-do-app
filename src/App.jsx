import "./App.scss";
import Form from "./components/Form";
import CardsContainer from "./components/CardsContainer";

const App = () => {
  return (
    <div className="content-container">
      <Form />
      <CardsContainer />
    </div>
  );
};

export default App;
