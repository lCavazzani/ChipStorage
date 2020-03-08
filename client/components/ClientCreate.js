import React, {Component} from 'react';
import gql from 'graphql-tag'
import {graphql} from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';
import fetchClient from '../queries/fetchClients'

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
        this.props.mutate({
            variables: {
                name: this.state.name,
                store: this.state.store
            },
            refetchQueries: [{query: fetchClient}]
        }).then(() => this.props.history.push('/'))
    }
     
    render(){
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Adicione um cliente</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Nome do Cliente</label>
                    <input 
                    onChange={event => this.setState({ name: event.target.value })}
                    value={this.state.name}
                    />
                    <label>Nome da loja</label>
                    <input 
                    onChange={event => this.setState({ store: event.target.value })}
                    value={this.state.store}
                    />
                    <input 
                    type="submit"
                    />
                </form>
            </div>
        )
    }
};

const mutation = gql` 
    mutation AddClient($name: String, $store: String) {
        addClient(name: $name, store: $store){
      name, store
    }
  }
`

export default graphql(mutation)(withRouter(ClientCreate));
