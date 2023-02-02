import Todo1 from "./Todo1"


const TodoList1 = ({ todoList, setTodoList }) => {
    return (
        <div>{todoList.map((item) => (<Todo1 setTodoList={setTodoList} todoList={todoList} key={item.id} item={item}></Todo1>))}</div>
    )
}

export default TodoList1;