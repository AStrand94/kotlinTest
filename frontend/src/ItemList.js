import React, { Component } from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';

export default class ItemList extends Component {

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            items: props.items
        }
    }
    render(){
        if (this.state.items != null && this.state.items.length > 0) {
            return <ListGroup>
                {this.state.items.map((i, index) => ItemList.displayItem(i, index))}
            </ListGroup>
        }
        return ""
    }

    static displayItem(item, index) {
        return <ListGroupItem key={index}>{item.description}</ListGroupItem>
    }

}