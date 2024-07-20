import './input.css';

function Input({taskTitle,dueDate,importance, onChangeTitle,onChangeDueDate,onChangeImportance, addTask}){
    return(
        <div className = "inputArea">
          <input placeholder = "Enter task title" value = {taskTitle} onChange = {onChangeTitle}></input>
          <input placeholder = "Deadline" value = {dueDate} onChange = {onChangeDueDate}  ></input>
          <input placeholder = "Rate importance" value = {importance} onChange = {onChangeImportance}></input>
          <button onClick = {addTask}>Add Task</button>
          <p>For importance, type a number between 1 to 3 where 3 is of high importance, 2 is of medium importance, and 1 is of low importance.</p>
        </div>
    );
}


export default Input