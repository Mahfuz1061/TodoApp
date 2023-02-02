import Todo from "./Todo";


const TodoList = ({ todoList, setTodoList }) => {

    return (

        <div>
            {todoList.map((item) => (<Todo setTodoList={setTodoList} todoList={todoList} key={item.id} item={item}></Todo>))}
        </div>
    )

}

export default TodoList;