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

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state={
        title:"",
        todoDueDate:"",
        todoDescription:""
    }
  }
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
    this.setState({title:event.target.value});
  };
  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
    this.setState({todoDueDate:event.target.value});
  };
  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
    this.setState({todoDescription:event.target.value});
  };
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
        title: this.state.title,
        todoDueDate:this.state.todoDueDate,
        todoDescription:this.state.todoDescription
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
  };
  render(){
    return (
        <form onSubmit={this.addTask} className="flex flex-col">
            <label for="title">Task Title</label>
            <input className="m-2" id='title' type='text' value={this.state.title} onChange={this.titleChanged}/>
            <label for="todoDescription">Task Description</label>
            <input className="m-2" id='todoDescription' type='text' value={this.state.todoDescription} onChange={this.descriptionChanged}/>
            <label for="todoDueDate">Task Duedate</label>
            <input className="m-2" id='todoDueDate' type='text' value={this.state.todoDueDate} onChange={this.dueDateChanged}/>
            <button type='submit'>Add item</button>
        </form>
    )
  }
}
 export default TaskForm;