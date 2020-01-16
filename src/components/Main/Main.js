import React, { Component } from 'react'
import Section from '../Section/Section';
import './Main.css';
import { tsImportEqualsDeclaration } from '@babel/types';

export default class Main extends Component {
    state = {
        sections: []
    }
    
    // Function to add a section to the board
    addSection(){
        let sections = this.state.sections;
        sections.push(
            {
                name: "No name",
                tasks: []
            }
        )
        this.setState({
            sections
        })
    }

    // Function to add a task to a section
    addTasks(id){
        let sections = this.state.sections;
        sections[id].tasks.push(
            {
                desc: "No description"
            }
        )
        this.setState({
            sections
        })
    }

    // Function to move tasks between sections
    moveTask(){
        // let sections = this.state.sections;
        // sections[id].tasks.push(
        //     {
        //         desc: "No description"
        //     }
        // )
        // this.setState({
        //     sections
        // })
    }
    
    render() {
        return (
            <>
            {
                this.state.sections.map((section, i) => 
                    <Section 
                    tasks={section.tasks}
                    name={section.name}
                    addTaskHandler={this.addTasks.bind(this)}
                    sectionId={i}>
                    </Section>
                )
            }
            <div 
            className="AddSectionButton"
            onClick={this.addSection.bind(this)}>
                Add Section
            </div>
            </>
        )
    }
}
