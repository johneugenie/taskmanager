import React, { Component } from 'react'
import './Task.css';

export default class Task extends Component {

    handleDragStart(e){
        e.stopPropagation();
        this.dragged = e.currentTarget;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.currentTarget);
    }

    handleDragEnd(e){

    }
    
    render() {
        return (
            <div 
            className="SingleCard"
            draggable={true}
            onDragStart={(e)=>this.handleDragStart(e)}
            onDragEnd={(e)=>this.handleDragEnd(e)}>
              {this.props.desc}
            </div>
        )
    }
}
