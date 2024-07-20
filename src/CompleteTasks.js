import './completetask.css';

function CompleteTask({completeTasks, returnTask}){
    return( 
    <div className = "completeArea">
        <h3>Complete tasks</h3>
        <ul>
        {completeTasks.map((task, index) => {
              return(
                <li  className = "completeTask">
                  <div>
                    <p className = "title">{task[0]}</p>
                    <p>Deadline: {task[1]}</p>
                    {task[2] == 3 && <p>High Importance</p>}
                    {task[2] == 2 && <p>Medium Importance</p>}
                    {task[2] == 1 && <p>Low Importance</p>}
                    <button className = "return" onClick = {() => returnTask(index) }>return</button>
                  </div>
                </li>
              );
            })}
        </ul>
        </div>
    );
}

export default CompleteTask