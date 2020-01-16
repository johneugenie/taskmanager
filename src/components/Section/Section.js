import React, { Component } from 'react'
import styles from './Section.css';
import Task from '../Task/Task';

export default class Section extends Component {

    addTasksInSection(){
        this.props.addTaskHandler(this.props.sectionId)
    }

    // handleOnDrop(e){
    //     // debugger
    //     console.log("Dropped")
    // }

    // handleDragOver(e){
    //     debugger
    //     console.log("Over")
    // }

    dragOverHandler = (event) => {
        event.preventDefault();
    }

    dropHandler = (event) => {
        debugger
        event.preventDefault();
        let target = event.target;
        let sectionId = target.getAttribute("sectionId");
        let taskId = target.getAttribute("taskId");
        console.log(taskId + "$|$" + sectionId);
        
        // let newCard = JSON.parse(event.dataTransfer.getData("text/plain"));
        // this.props.droppedCard(newCard, this.props.card_column);
    }

    render() {
        return (
            <div 
            className="Section"
            onDrop={this.dropHandler}
            onDragOver={this.dragOverHandler}>
                <div className="Header">
                    {this.props.name}
                </div>
                <div className="Tasks">
                {
                    this.props.tasks.map((task, i)=>
                        <Task 
                        desc={task.desc}
                        taskId={i}
                        sectionId={this.props.sectionId}></Task>
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
