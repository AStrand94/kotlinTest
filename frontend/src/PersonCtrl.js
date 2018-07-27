import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import {Switch, Link, Route} from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import PersonList from './PersonList';
import PersonCreate from "./PersonCreate";

export default class PersonCtrl extends Component{
    render(){

        return <Grid>
                <ButtonToolbar>
                    <Link to='/'><Button bsStyle="primary">View Persons</Button></Link>
                    <Link to='/create'><Button bsStyle="primary">Create new Person</Button></Link>
                </ButtonToolbar>
            <Row>
                <Switch>
                    <Route exact path='/' component={PersonList}/>
                    <Route path='/create' component={PersonCreate}/>
                </Switch>
            </Row>
        </Grid>;
    }
}