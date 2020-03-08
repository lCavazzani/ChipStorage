import React, {Component} from 'react';
import fetchClients from '../queries/fetchClients'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo';
import ClientSearch from './ClientSearch';
// import {
//     Link
//   } from "react-router-dom";
class ClientList extends Component {
    // onSongDelete(id) {
    //     this.props.mutate({
    //         variables:{
    //             id
    //         }
    //     }).then(() => this.props.data.refetch());
    // }
     renderClients() {
        return this.props.data.clients.map(({name, id}) => {
            return (
                <li key={id} className="collection-item">
                    {name}
                <i
                className="material-icons"
                // onClick={() => this.onSongDelete(id)}
                >delete</i>
                </li>
            )
        })
    }
    render(){
        return (
            <div>
                <ClientSearch /> 
                <div>
                <ul className="collection">{this.props.data.loading? "loading" : this.renderClients()}</ul>
                {/* <Link to="/songs/new" className="btn-floating btn-large red right"><i className="material-icons">add</i></Link> */}
                </div>
            </div>
        )
    }
};
const mutation =  gql `
mutation DeleteClient($id: ID) {
    deleteClient(id: $id){
        id
    }
}
`;


export default graphql(mutation)(
    graphql(fetchClients)(ClientList)
);
