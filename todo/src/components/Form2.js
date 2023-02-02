import shortid from "shortid";


const Form2 = ({ todo, setTodo, todoList, setTodoList }) => {

    const handleChange = (e) => {
        setTodo(e.target.value)
        //console.log(todo)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList([...todoList, { name: todo, id: shortid.generate() }])
        console.log(todoList)
        setTodo("")

    }
    return (<div>
        <form onSubmit={handleSubmit}>
            <label>Add a todo:</label>
            <input onChange={handleChange} type="text" value={todo}></input>
            <button type="submit"> ADD </button>
        </form>
    </div>)

}

export default Form2;