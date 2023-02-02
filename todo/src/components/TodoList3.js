import Todo3 from "./Todo3";


const TodoList3 = ({ todoList, setTodoList }) => {
    return (
        <div>{todoList.map((item) => (<Todo3 setTodoList={setTodoList} todoList={todoList} key={item.id} item={item}></Todo3>))}</div>
    )
}
export default TodoList3;