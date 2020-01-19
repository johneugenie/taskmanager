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
        var taskId = e.currentTarget.getAttribute("taskId");
        var sectionId = e.currentTarget.getAttribute("sectionId");
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text', sectionId + "$|$" + taskId);

        setTimeout(
            ()=> {
                target.style.display = "none";
            }, 
            0
        )
    }

    handleDragEnd(e){
        console.log("end");
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
              {this.props.desc}
            </div>
        )
    }
}
