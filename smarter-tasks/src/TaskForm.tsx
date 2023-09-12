import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask:(task:TaskItem) => void;
}

interface TaskFormState {
    id:string;
    title:string;
    todoDueDate:string;
    todoDescription:string;
}

const TaskForm=(props:TaskFormProps)=>{
  const [formState,setFormState]=React.useState<TaskFormState>({
    id:"",
    title:"",
    todoDescription:"",
    todoDueDate:"",
  });
  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
    setFormState({...formState,title:event.target.value});
  };
  const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
    setFormState({...formState,todoDueDate:event.target.value});
  };
  const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
    setFormState({...formState,todoDescription:event.target.value});
  };
  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with`);
    if(formState.title.length===0||formState.todoDueDate.length===0){
      return;
    }
    props.addTask(formState);
    setFormState({id:"",title:"",todoDescription:"",todoDueDate:""});
  };
  return (
      <form onSubmit={addTask} className="flex flex-col">
          <label>Task Title</label>
          <input className="m-2" id='todoTitle' type='text' value={formState.title} onChange={titleChanged} required/>
          <label>Task Duedate</label>
          <input className="m-2" id='todoDueDate' type='text' value={formState.todoDueDate} onChange={dueDateChanged} required/>
          <label>Task Description</label>
          <input className="m-2" id='todoDescription' type='text' value={formState.todoDescription} onChange={descriptionChanged}/>
          <button id='addTaskButton' type='submit'>Add item</button>
      </form>
  )
};
export default TaskForm;