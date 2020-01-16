import React, { Component } from 'react'
import Section from '../Section/Section';
import './Main.css';
import { tsImportEqualsDeclaration } from '@babel/types';

export default class Main extends Component {
    state = {
        sections: [
        //   {
        //     name: "No Name",
        //     tasks: [
        //       {
        //         desc: "DeMo"
        //       }
        //     ]
        //   },
        //   {
        //     name: "No Name",
        //     tasks: [
        //       {
        //         desc: "DeMo"
        //       }
        //     ]
        //   }
        ]
    }
    addSection(){
        let sections = this.state.sections;
        sections.push(
            {
                name: "No Name",
                tasks: [
                    // {
                    //     desc: "Setup Demo"
                    // }
                ]
            }
        )
        this.setState({
            sections
        })
    }

    addTasks(id){
        debugger
        let sections = this.state.sections;
        // var currSection = sections[id];
        sections[id].tasks.push(
            {
                desc: "Setup Demo"
            }
        )
        this.setState({
            sections
        })
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
