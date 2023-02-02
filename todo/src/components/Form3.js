import shortid from 'shortid'

const Form3 = ({ todo, setTodo, todoList, setTodoList }) => {

    const handleChange = (event) => {
        setTodo(event.target.value)

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, { name: todo, id: shortid.generate() }])
        console.log(todoList)
        setTodo("")

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={todo}></input>
                <button type="submit"> ADD </button>
            </form>
        </div>
    )
}

export default Form3;