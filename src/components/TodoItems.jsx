import Items from "./TodoItem";

function ItemList({todoitems}){
  return <>
  {todoitems.map(item => <Items todoname={item.name} tododate={item.date} />)}
  </>
}
export default ItemList;