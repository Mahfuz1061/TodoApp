import Todo4 from "./Todo4";


const TodoList4 = ({ todoList, setTodoList }) => {
    return (
        <div>
            {todoList.map((item) => (<Todo4 setTodoList={setTodoList} todoList={todoList} key={item.id} item={item}></Todo4>))}
        </div>
    )
}
export default TodoList4;
