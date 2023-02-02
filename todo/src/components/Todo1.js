

const Todo1 = ({ item, todoList, setTodoList }) => {

    const deleteTodo = () => {
        setTodoList(todoList.filter((itema) => itema.id !== item.id))
    }
    return <div>
        <h1> {item.name}</h1>
        <button onClick={deleteTodo} type="text">Done</button>
    </div>
}

export default Todo1;