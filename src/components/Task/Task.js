import React, { Component } from 'react'
import './Task.css';
import { endianness } from 'os';

export default class Task extends Component {
    state={
        draggedId: null
    }

    handleDragStart(e){
        
        e.stopPropagation();
        this.dragged = e.currentTarget;
        var taskId = e.currentTarget.getAttribute("taskId");
        var sectionId = e.currentTarget.getAttribute("sectionId");
        e.dataTransfer.effectAllowed = 'move';
        // e.dataTransfer.setData('text', taskId + "$|$" + sectionId);
        e.dataTransfer.setData('text/html', e.currentTarget);
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
