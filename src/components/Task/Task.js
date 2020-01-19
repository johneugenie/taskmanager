import React, { Component } from 'react'
import './Task.css';
import { endianness } from 'os';

export default class Task extends Component {
    state={
        draggedId: null
    }

    handleDragStart(e){
        const target = e.target;
        e.stopPropagation();
        this.dragged = e.currentTarget;
        let taskId = e.currentTarget.getAttribute("taskId");
        let sectionId = e.currentTarget.getAttribute("sectionId");
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text', sectionId + "$|$" + taskId);

    }

    handleDragEnd(e){
        console.log("end");
    }

    handleBlur = (e) => {
        console.log("Blurred");
        let taskId = e.target.getAttribute("taskId");
        let sectionId = e.target.getAttribute("sectionId");
        let value = e.target.innerText;
        this.props.updateTaskHandler(parseInt(taskId),parseInt(sectionId), value)
    }

    render() {
        return (
            <div 
            className="SingleCard"
            draggable={true}
            taskId={this.props.taskId}
            sectionId={this.props.sectionId}
            onDragStart={(e)=>this.handleDragStart(e)}
            onDragEnd={(e)=>this.handleDragEnd(e)}>
              <span
              onBlur={this.handleBlur} 
              taskId={this.props.taskId}
              sectionId={this.props.sectionId}
              suppressContentEditableWarning={true}
              contentEditable={true}>
                {this.props.desc}
              </span>
            </div>
        )
    }
}
