import './app.css';
import IncompleteTask from './IncompleteTasks';
import CompleteTask from './CompleteTasks';
import Input from './Input';
import {useState} from "react";
import logo from './logo.png';

function App() {
  
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [importance, setImportance] = useState("");
  
  const addTask = () => {
    if (taskTitle != "" && dueDate != "" && importance != "" && importance >= 1 && importance <= 3){
      setIncompleteTasks([...incompleteTasks, [taskTitle,dueDate,importance]])
      setTaskTitle("");
      setDueDate("");
      setImportance("");
    }
  }
  
  const deleteTask = (index) =>{
    const newIncompleteTasks = [...incompleteTasks];
    newIncompleteTasks.splice(index, 1);
    setIncompleteTasks(newIncompleteTasks);
  }

  const finishTask = (index) => {
    setCompleteTasks([...completeTasks,incompleteTasks[index]])
    const newIncompleteTasks = [...incompleteTasks];
    newIncompleteTasks.splice(index, 1);
    setIncompleteTasks(newIncompleteTasks);
  }
  const returnTask = (index) => {
    setIncompleteTasks([...incompleteTasks, completeTasks[index]])
    const newCompleteTasks = [...completeTasks];
    newCompleteTasks.splice(index, 1);
    setCompleteTasks(newCompleteTasks);
  }
  const onChangeTitle = (e)=>{
      setTaskTitle(e.target.value)
  }
  const onChangeDueDate = (e) => {
    setDueDate(e.target.value)
  }
  const onChangeImportance = (e) => {
    setImportance(e.target.value)
  }


  return (
    <div className="App">
      <div className = "header">
      <img src={logo} alt="logo"></img>
      </div>      
      <div className = "body">
        <Input
        taskTitle = {taskTitle}
        dueDate = {dueDate}
        importance = {importance}
        onChangeTitle = {onChangeTitle}
        onChangeDueDate = {onChangeDueDate}
        onChangeImportance = {onChangeImportance}
        addTask = {addTask}
        />
        <IncompleteTask 
        incompleteTasks = {incompleteTasks} 
        deleteTask = {deleteTask} 
        finishTask = {finishTask}
        />
        <CompleteTask
        completeTasks = {completeTasks}
        returnTask = {returnTask}
        />
      </div>

      <div className = "footer">
        <p>Copyright © 2024 TaskManager All Rights Reserved.</p>
      </div>

    </div>
  );
}


export default App;

