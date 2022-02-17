import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import TopNavigation from "./components/navigation/TopNavigation";

import MakeBracketRoute from "./routes/MakeBracket";
import BracketRoute from "./routes/ViewBracket";
import HomeRoute from "./routes/Home";
import AboutRoute from "./routes/About";
import SignInRoute from "./routes/SignIn";
import SignUpRoute from "./routes/SignUp";
import NotFoundRoute from "./routes/NotFound";
import ButtonPartyRoute from "./routes/Secret";

import "./App.css";
import { useTokenData } from "./store/selectors";

// require('dotenv').config({path: `${__dirname}/.env`})
// console.log(process.env)

function PrivateRoute({ ...rest }: any) {
  const tokenData = useTokenData();

  if (!tokenData?.accessToken) {
    return <Redirect to="/login" />;
  }
  return <Route {...rest} />;
}

function AnonymousRoute({ ...rest }: any) {
  const tokenData = useTokenData();

  if (tokenData?.accessToken) {
    return <Redirect to="/" />;
  }
  return <Route {...rest} />;
}

function Routes() {
  return (
    <div style={styles.body}>
      <Switch>
        {/** Public Routes */}
        <AnonymousRoute exact path="/login" component={SignInRoute} />
        <AnonymousRoute exact path="/signup" component={SignUpRoute} />
        <Route exact path="/" component={HomeRoute} />
        <Route exact path="/about" component={AboutRoute} />
        <Route exact path="/view/:bracketId" component={BracketRoute} />
        <Route exact path="/make" component={MakeBracketRoute} />
        <Route exact path="/buttonparty" component={ButtonPartyRoute} />
        <Route component={NotFoundRoute} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="wrapper">
            <div className="header">
              <TopNavigation />
            </div>
            <div className="content">
              <Routes />
            </div>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

const styles: StyleSheetCSS = {
  body: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
};

export default App;
