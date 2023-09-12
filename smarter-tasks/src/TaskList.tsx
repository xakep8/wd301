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
export default TaskList;