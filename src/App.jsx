import AddTodo from "./components/AddToDo";
import Appname from "./components/AppName";
import Items from "./components/TodoItem";
import ItemList from "./components/TodoItems";

function App() {
  const todoitems = [
    {
      id: 1,
      name: "Buy Milk",
      date: "14/07/2024"
    },
    {
      id: 2,
      name: "Go To College",
      date: "14/07/2024"
    },
    {
      id: 3,
      name: "finish react",
      date: "15/07/2024"
    }
  ]
  return (
    <center>
      <Appname />
      <AddTodo />
      <ItemList key={todoitems.id} todoitems={todoitems}/>
      
    </center>
  );
}

export default App;
