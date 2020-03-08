import React, {Component} from 'react';
import gql from 'graphql-tag'
import {graphql} from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';
import fetchClientByName from '../queries/fetchClientByName'

class ClientDetailName extends Component {
     
    render(){
        const {clientByName} = this.props.data
        console.log(clientByName)
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>{clientByName ? clientByName[0].name : ""}</h3>
            </div>
        )
    }
};


export default graphql(fetchClientByName,{
    options: (props) => {return {variables: {name: props.match.params.name}}}
})(withRouter(ClientDetailName));
