
import styles from "../style.module.css"
const Todo = ({ item, todoList, setTodoList }) => {
    const deleteTodo = () => {
        setTodoList(todoList.filter((itema) => itema.id !== item.id))
    }
    return (
        <div>
            <div className={styles.todoItem}>
                <h3 className={styles.todoname}> {item.name} </h3>
                <button onClick={deleteTodo} className={styles.deletebutton}> Done </button>
            </div>
        </div>
    )
}


export default Todo;