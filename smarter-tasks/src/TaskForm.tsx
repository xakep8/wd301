import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask:(task:TaskItem) => void;
}

interface TaskFormState {
    title:string;
    todoDueDate:string;
    todoDescription:string;
}

const TaskForm=(props:TaskFormProps)=>{
  const [formState,setFormState]=React.useState<TaskFormState>({
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
    setFormState({title:"",todoDescription:"",todoDueDate:""});
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

// class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
//   constructor(props: TaskFormProps) {
//     super(props);
//     this.state={
//         title:"",
//         todoDueDate:"",
//         todoDescription:""
//     }
//   }
//   titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     console.log(event.target.value);
//     this.setState({title:event.target.value});
//   };
//   dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     console.log(event.target.value);
//     this.setState({todoDueDate:event.target.value});
//   };
//   descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     console.log(event.target.value);
//     this.setState({todoDescription:event.target.value});
//   };
//   addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
//     event.preventDefault();
//     const newTask = {
//         title: this.state.title,
//         todoDueDate:this.state.todoDueDate,
//         todoDescription:this.state.todoDescription
//     };
//     this.props.addTask(newTask);
//     this.setState({ title: "" });
//   };
//   render(){
//     return (
//         <form onSubmit={this.addTask} className="flex flex-col">
//             <label>Task Title</label>
//             <input className="m-2" id='todoTitle' type='text' value={this.state.title} onChange={this.titleChanged} required/>
//             <label>Task Duedate</label>
//             <input className="m-2" id='todoDueDate' type='text' value={this.state.todoDueDate} onChange={this.dueDateChanged} required/>
//             <label>Task Description</label>
//             <input className="m-2" id='todoDescription' type='text' value={this.state.todoDescription} onChange={this.descriptionChanged}/>
//             <button id='addTaskButton' type='submit'>Add item</button>
//         </form>
//     )
//   }
// }
 export default TaskForm;