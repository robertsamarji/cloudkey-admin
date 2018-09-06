import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import "tabler-react/dist/Tabler.css";
import HomePage from "./HomePage";
import CloudkeysPage from "./database/CloudkeysPage";
import KeyBlanksPage from "./database/KeyBlanksPage";
import KeyCardsPage from "./database/KeyCardsPage";
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
      <Route exact path="/cloudkeys" component={CloudkeysPage} />
      <Route exact path="/key-blanks" component={KeyBlanksPage} />
      <Route exact path="/key-cards" component={KeyCardsPage} />
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
