import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Security, LoginCallback, SecureRoute } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import Home from "./Home";
import Locked from "./Locked";
import Profile from "./Profile";
import HomeUser from "./views/user/HomeUser";
import CreateProfile from "./CreateProfile";
import OtpView from "./views/OtpView";
import { oktaConfig } from "./lib/oktaConfig";

const CALLBACK_PATH = "/login/callback";

const oktaAuth = new OktaAuth(oktaConfig);

const App = () => {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Switch>
        <Route path={["/","/home"]} exact component={Home} />

        <Route path="/auth" exact component={OtpView} />

        <Route path="/create/account" component={CreateProfile} />
        
        <Route path="/profile/user" component={HomeUser} />
        <Route path={CALLBACK_PATH} exact component={LoginCallback} />
        <SecureRoute path="/locked" exact component={Locked} />
        <SecureRoute path="/profile" component={Profile} />
      </Switch>
    </Security>
  );
};

export default App;

/* secure route on entire application
const App = () => { 
  return (
    <Router>
      <Security {...config} >
        <Switch>
          <Route path="/login/callback" component={LoginCallback} />
          <SecureRoute path="/" />
        </Switch>
      </Security>
    </Router>
  );
};
*/
