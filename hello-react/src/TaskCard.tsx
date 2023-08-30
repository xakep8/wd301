import React from 'react'
import './TaskCard.css'

interface Tasks{
  title:string;
  dueDate?:string;
  completedAtDate?:string;
  assigneeName:string;
}

const TaskCard = (props:Tasks) => {
  if(props.dueDate){
    return (
      <div className="TaskItem w-full">
        <h2><b>{props.title}</b></h2>
        <p>Due on: {props.dueDate}</p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    )
  }
  else{
    return (
      <div className="TaskItem w-full">
        <h2><b>{props.title}</b></h2>
        <p>Completed on: {props.completedAtDate}</p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    )
  }
}

export default TaskCard