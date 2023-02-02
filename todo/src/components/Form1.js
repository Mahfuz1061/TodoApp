import shortid from "shortid"


const Form1 = ({ todo, setTodo, todoList, setTodoList }) => {

    const handleChange = (event) => {
        setTodo(event.target.value)
        console.log(todo)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, { name: todo, id: shortid.generate() }])
        console.log(todoList)
        setTodo("")

    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={todo}></input>
            <button type="submit"> ADD </button>
        </form>
    )
}
export default Form1;