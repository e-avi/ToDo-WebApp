import AddTodo from "./components/AddToDo";
import Appname from "./components/AppName";
import Item1 from "./components/TodoItem1";
import Item2 from "./components/TodoItem2";
import "./App.css"

function App() {
  return (
    <center>
      <Appname />
      <AddTodo />
      <div className="TodoContainer">
      <Item1 />
      <Item2 />
      </div>
    </center>
  );
}

export default App;
