
import "./App.css";
import AddToDo from "./components/AddToDo/AddToDo";
import ToDo from "./components/ToDo/ToDo";
import TodoContext from "./context";

function App() {
  
  return (
    <div className="App">

      <AddToDo  />
      <ToDo />
    </div>
  );
}

export default App;
