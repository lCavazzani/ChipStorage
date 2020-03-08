import React, {Component} from 'react';
import gql from 'graphql-tag'
import {graphql} from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';

class ClientCreate extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "", 
            store: ""
        }
    }
    onSubmit(event) {
        event.preventDefault();
        console.log("submit")
       this.props.history.push(`/clientName/${this.state.name}`)
    }
     
    render(){
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Procure pelo Cliente</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Nome do Cliente</label>
                    <input 
                    onChange={event => this.setState({ name: event.target.value })}
                    value={this.state.name}
                    />
                    <input 
                    type="submit"
                    />
                </form>
            </div>
        )
    }
};


export default (withRouter(ClientCreate));
