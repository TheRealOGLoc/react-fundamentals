import ToDoListItem from "./ToDoListItem";

const ToDoList = () => {
    return (
        <ul>
            <ToDoListItem toDo="Learn React" />
            <ToDoListItem toDo="Learn the MERN-Stack" />
        </ul>
    )
}


export default ToDoList;