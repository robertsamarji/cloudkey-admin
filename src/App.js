import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import "tabler-react/dist/Tabler.css";
import { Card, Button } from "tabler-react";
import HomePage from "./HomePage";
import UsersPage from "./database/UsersPage";
import NewOrdersPage from "./orders/NewOrdersPage";
import ProcessedOrdersPage from "./orders/ProcessedOrdersPage";
import NewScansPage from "./scans/NewScansPage";
import ProcessedScansPage from "./scans/ProcessedScansPage";

type Props = {||};

function App(props: Props): React.Node {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/users" component={UsersPage} />
      <Route exact path="/new-orders" component={NewOrdersPage} />
      <Route exact path="/processed-orders" component={ProcessedOrdersPage} />
      <Route exact path="/new-scans" component={NewScansPage} />
      <Route exact path="/processed-scans" component={ProcessedScansPage} />
      </Switch>
    </Router>
  );
}

export default App;