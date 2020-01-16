import React, { Component } from 'react'
import './Task.css';

export default class Task extends Component {
    render() {
        return (
            <div className="SingleCard">
              {this.props.desc}
            </div>
        )
    }
}
