import Todo2 from "./Todo2";
const TodoList2 = ({ todoList, setTodoList }) => {
    return (
        <div>
            {todoList.map((todoitem) => (<Todo2 setTodoList={setTodoList} todoList={todoList} key={todoitem.id} todoitem={todoitem} ></Todo2>))}
        </div>
    )
}
export default TodoList2;