import React from 'react'
import { useSelector } from 'react-redux';
import Task from './Task';
function TaskList() {
    const tasks = useSelector(state=>state.tasks);

  return (
    <div>
     {tasks.map((task)=>{
return <Task task={task}/>;
     })} 
     
    </div>
  )
}

export default TaskList