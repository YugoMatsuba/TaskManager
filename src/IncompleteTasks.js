import './incompletetask.css';

function IncompleteTask({incompleteTasks, finishTask, deleteTask}){
    // Tasks are displayed in order of their importance.
    // With each importance level represented by a different color in different div 
    return(
        <div className = "incompleteArea">
          <h3>Incomplete tasks</h3>
          <ul className = "highImportance">
            {incompleteTasks.map((task, index) => {
              if(task[2] == 3){
                return(
                  <li  className = "incompleteTask">
                   <div>
                      <p className = "title">{task[0]}</p>
                      <p>Deadline: {task[1]}</p>
                      <p>High Importance</p>
                      <button className = "finish" onClick = {()=> finishTask(index)}>complete</button>
                      <button className = "delete" onClick = {() => deleteTask(index) }>delete</button>
                    </div>
                  </li>
               );
              }
            })}
          </ul>
          <ul className = "mediumImportance">
          {incompleteTasks.map((task, index) => {
              if(task[2] == 2){
                return(
                  <li  className = "incompleteTask">
                   <div>
                      <p className = "title">{task[0]}</p>
                      <p>Deadline: {task[1]}</p>
                      <p>Medium Importance</p>
                      <button className = "finish" onClick = {()=> finishTask(index)}>complete</button>
                      <button className = "delete" onClick = {() => deleteTask(index) }>delete</button>
                    </div>
                  </li>
               );
              }
            })}
          </ul>
          <ul className = "lowImportance">
          {incompleteTasks.map((task, index) => {
              if(task[2] == 1){
                return(
                  <li  className = "incompleteTask">
                   <div>
                      <p className = "title">{task[0]}</p>
                      <p>Deadline: {task[1]}</p>
                      <p>Low Importance</p>
                      <button className = "finish" onClick = {()=> finishTask(index)}>complete</button>
                      <button className = "delete" onClick = {() => deleteTask(index) }>delete</button>
                    </div>
                  </li>
               );
              }
            })}
          </ul>
        </div>
    );
}


export default IncompleteTask