

const Todo4 = ({ item, todoList, setTodoList }) => {

    const handleDelete = () => {

        setTodoList(todoList.filter(work => work.id !== item.id));

    }

    return <div>
        <h2> {item.name}</h2>
        <button onClick={handleDelete}> Done</button>
    </div>
}
export default Todo4;