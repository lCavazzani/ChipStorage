import './style/style.css'
import React from "react";
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import ClientList from './components/ClientList';
import ClientCreate from './components/ClientCreate'
import ClientDetail from './components/ClientDetail'


const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <ClientList />
          </Route>
          <Route path="/clients/new" component={ClientCreate} />
          <Route path="/client/:id" component={ClientDetail} />
        </Switch>
      </div>
    </Router>
    </ApolloProvider>

  );
}


ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
