import React, { Component } from 'react'
import styles from './Section.css';
import Task from '../Task/Task';

export default class Section extends Component {

    addTasksInSection(){
        this.props.addTaskHandler(this.props.sectionId)
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

        if(toSectionId && toTaskId){
            this.props.moveTaskHandler(
                parseInt(fromSectionId),
                parseInt(toSectionId),
                parseInt(fromTaskId),
                parseInt(toTaskId)
            )
        }
        
        // this.props.droppedCard(newCard, this.props.card_column);
    }

    render() {
        return (
            <div 
            className="Section">
                <div className="Header">
                    {this.props.name}
                </div>
                <div className="Tasks"
                onDrop={this.dropHandler}
                onDragOver={this.dragOverHandler}>
                {
                    this.props.tasks.map((task, i)=>
                        <Task 
                        desc={task.desc}
                        taskId={i}
                        sectionId={this.props.sectionId}></Task>
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
