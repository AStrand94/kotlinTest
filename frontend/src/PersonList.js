import React, {Component} from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ItemList from './ItemList.js';

export default class PersonList extends Component{

    constructor(props){
        super(props);

        this.state = {
            persons: [],
            isLoaded: false
        }
    }

    componentDidMount(){
        fetch("http://localhost:8080/persons")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        persons: result
                    });

                    this.state.persons.forEach(p => {
                        console.log('PERSON:' + p.name);
                        console.log(p.items);
                    })

                }
            )
    }

    render(){
        return <ListGroup>
                {this.state.persons.map((p,i) => (
                    <ListGroupItem key={i}>
                        {p.name}
                        <ItemList items={p.items}/>
                    </ListGroupItem>
                ))}
            </ListGroup>

    }

    removePerson = () => {
        this.setState({
            persons: this.state.persons.splice(0,this.state.persons.length-1)
        });
    }

}