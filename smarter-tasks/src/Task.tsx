import React from "react";
import './TaskCard.css'

interface TaskProp{
    title:string;
    todoDueDate:string;
    todoDescription:string;
}

class Task extends React.Component<TaskProp> {
    render(){
        return(
            <div className="TaskItem shadow-md border border-slate-100">
                <h3 className="text-base font-bold my-1">{this.props.title} ({this.props.todoDueDate})</h3>
                <p className="text-sm text-slate-500">
                Description: {this.props.todoDescription}
                </p>
            </div>
        );
    }
}
export default Task;