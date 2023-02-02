import shortid from "shortid";


const Form4 = ({ todo, setTodo, todoList, setTodoList }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, { name: todo, id: shortid.generate() }]);
        console.log(todoList);
        setTodo("")

    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input onChange={e => setTodo(e.target.value)} value={todo} type="text"></input>
            </div>
            <div>
                <button type="submit"> ADD </button>
            </div>
        </form>

    )
}
export default Form4;