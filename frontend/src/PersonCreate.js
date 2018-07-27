import React, {Component} from 'react';
import {Alert, Button, ControlLabel, FormControl, FormGroup} from "react-bootstrap";

export default class PersonCreate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            age: -1
        };

        this.handlePersonChange = this.handlePersonChange.bind(this);
        this.createPerson = this.createPerson.bind(this);
    }

    createPerson(){
        const data = this.state;
        fetch('http://localhost:8080/person', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                //person: data
                name: data.name,
                age: data.age
            })
        }).then(() => this.showSuccessMsg(true)).catch(() => this.showSuccessMsg(false))
    }

    showSuccessMsg(success){
        let msg = undefined;
        if (success) {
            msg = document.getElementById("successAlert");
            msg.style.display = "block";
        } else {
            msg = document.getElementById("errAlert");
            msg.style.display = "block";
        }
        window.setTimeout(PersonCreate.hideMsg(msg),3000)
    }

    static hideMsg(element){
        element.style.display = 'none'
    }

    handlePersonChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    render(){
        const style = {display: 'none'};
        return <div>
            <Alert id="successAlert" bsStyle="success" style={style}>Person {this.state.name} created</Alert>
            <Alert id="errAlert" bsStyle="danger" style={style}>Failed to create {this.state.name}</Alert>
            <form>
            <FormGroup
                controlId="formBasicText"
            >
                <ControlLabel>Create person</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Name"
                    name="name"
                    onClick={this.handlePersonChange}
                />
            </FormGroup>

            <FormGroup
                controlId="formBasicText"
            >
                <FormControl
                    type="number"
                    placeholder="Age"
                    name="age"
                    onClick={this.handlePersonChange}
                />
            </FormGroup>

            <Button onClick={this.createPerson}>Create</Button>
        </form>
        </div>
    }
}