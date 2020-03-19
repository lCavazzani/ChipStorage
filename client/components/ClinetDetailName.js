import React, {Component} from 'react';
import gql from 'graphql-tag'
import {graphql} from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';
import fetchClientByName from '../queries/fetchClientByName'

class ClientDetailName extends Component {
    renderClientChips() {
        return this.props.data.clientByName[0].chips.map(({chipNumber, id, phoneNumber, provider, technician, date}) => {
            return (
                <ul key={id} className="collection">
                    <li className="collection-item">
                      Numero do chip{chipNumber}
                    </li>
                    <li className="collection-item">
                      Numero da linha {phoneNumber}
                    </li>
                    <li className="collection-item">
                      Operadora {provider}
                    </li>
                    <li className="collection-item">
                      tecnico {technician}
                    </li>
                    <li className="collection-item">
                      Data {date}
                    </li>
                </ul>
            )
        })
    }
    render(){
        const {clientByName} = this.props.data
        console.log(clientByName)
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>{clientByName ? clientByName[0].name : ""}</h3>
                <div style={{width: 500}}>
                 <h4>Lojas do {clientByName ? clientByName[0].name : ""}</h4>
                <h5 className="collection">{this.props.data.loading? "loading" : this.props.data.clientByName[0].store}</h5>
                </div>
                <div style={{width: 500}}>
                 <h4>Chips do {clientByName ? clientByName[0].name : ""}</h4>
                <div className="collection">{this.props.data.loading? "loading" : this.renderClientChips()}</div>
                </div>
            </div>
        )
    }
};


export default graphql(fetchClientByName,{
    options: (props) => {return {variables: {name: props.match.params.name}}}
})(withRouter(ClientDetailName));
