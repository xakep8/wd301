import './TaskCard.css'

const TaskCard = (props) => {
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