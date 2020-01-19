import React, { Component } from 'react'
import styles from './Section.css';
import Task from '../Task/Task';

export default class Section extends Component {

    addTasksInSection(){
        this.props.addTaskHandler(this.props.sectionId)
    }

    updateTaskDesc(taskId, sectionId, value){
        this.props.updateTaskHandler(taskId, sectionId, value);
    }

    updateSectionName(sectionId, value){
        this.props.updateSectionHandler(sectionId, value);
    }

    dragOverHandler = (event) => {
        event.preventDefault();
    }

    dropHandler = (event) => {
        event.preventDefault();
        let target = event.target;
        let toSectionId = target.getAttribute("sectionId");
        let toTaskId = target.getAttribute("taskId");
        let passedOnData = event.dataTransfer.getData("text");
        let splitArray = passedOnData.split("$|$");
        let fromTaskId = splitArray[1];
        let fromSectionId = splitArray[0];
        if(toSectionId && fromTaskId && fromTaskId){
            if(!toTaskId){
                toTaskId = "0";
            }
            this.props.moveTaskHandler(
                parseInt(fromSectionId),
                parseInt(toSectionId),
                parseInt(fromTaskId),
                parseInt(toTaskId)
            )
        }
    }

    handleBlur = (e) => {
        let sectionId = e.target.getAttribute("sectionId");
        let value = e.target.innerText;
        this.updateSectionName(parseInt(sectionId), value);
    }

    render() {
        return (
            <div 
            className="Section"
            sectionId={this.props.sectionId}
            onDrop={this.dropHandler}
            onDragOver={this.dragOverHandler}>
                <div className="Header">
                    <span 
                    contenteditable="true"
                    onBlur={this.handleBlur} 
                    suppressContentEditableWarning={true}
                    sectionId={this.props.sectionId}>
                        {this.props.name}
                    </span>
                </div>
                <div className="Tasks">
                {
                    this.props.tasks.map((task, i)=>
                        <Task 
                        desc={task.desc}
                        taskId={i}
                        sectionId={this.props.sectionId}
                        updateTaskHandler={this.props.updateTaskHandler}></Task>
                    )
                }
                </div>
                <div 
                className="AddTaskButton"
                onClick={this.addTasksInSection.bind(this)}>
                    Add Task
                </div>
            </div>
        )
    }
}
