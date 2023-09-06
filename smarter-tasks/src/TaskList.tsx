import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTask:(idx:number)=>void;
}

const TaskList=(props:Props)=>{
  const list= props.tasks.map((task, idx) => (
    <Task key={idx} idx={idx} taskItem={task} deleteTask={props.deleteTask}/>
  ));
  return <>{list}</>
};

// class TaskList extends React.Component<Props, State> {
  
//   render() {
//     return this.props.tasks.map((task, idx) => (
//       <Task key={idx} title={task.title} todoDueDate={task.todoDueDate} todoDescription={task.todoDescription}/>
//     ));
//   }
// }
export default TaskList;