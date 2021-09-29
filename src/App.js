import React from "react";

import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import CountDetails from "./components/CountDetails.component";
import ScheduledCount from "./components/ScheduledCount.component";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component ={ScheduledCount}/>
        <Route path="/count-details/:id" component={CountDetails} /> 
      </Switch>
    </Router>
  );
}

export default App;
