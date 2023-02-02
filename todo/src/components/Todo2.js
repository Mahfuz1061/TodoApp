

const Todo2 = ({ todoitem, setTodoList, todoList }) => {

    const deleteTodo = () => {
        //alert("Delete Working")
        setTodoList(todoList.filter((item) => item.id !== todoitem.id))

    };
    return (
        <div>
            <h2>{todoitem.name}</h2>
            <button onClick={deleteTodo}>Done</button>
        </div>
    )
}
export default Todo2;