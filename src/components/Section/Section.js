import React, { Component } from 'react'
import styles from './Section.css';
import Task from '../Task/Task';

export default class Section extends Component {

    addTasksInSection(){
        this.props.addTaskHandler(this.props.sectionId)
    }

    handleDragOver(){
        console.log("Over")
    }

    render() {
        return (
            <div 
            className="Section"
            onDragOver={(e)=>this.handleDragOver(e)}>
                <div className="Header">
                    {this.props.name}
                </div>
                <div className="Tasks">
                {
                    this.props.tasks.map((task, i)=>
                        <Task 
                        desc={task.desc}
                        taskId={i}></Task>
                    )
                }
                <div 
                className="AddTaskButton"
                onClick={this.addTasksInSection.bind(this)}>
                    Add Task
                </div>
                </div>
            </div>
        )
    }
}
