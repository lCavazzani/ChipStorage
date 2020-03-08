import React, {Component} from 'react';
import gql from 'graphql-tag'
import {graphql} from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';
import fetchClient from '../queries/fetchClient'

class ClientDetail extends Component {
     
    render(){
        const {client} = this.props.data
        console.log(client)
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>{client ? client.name : ""}</h3>
                
            </div>
        )
    }
};


export default graphql(fetchClient,{
    options: (props) => {return {variables: {id: props.match.params.id}}}
})(withRouter(ClientDetail));
