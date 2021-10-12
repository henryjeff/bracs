import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import TopNavigation from "./components/navigation/TopNavigation";

import MakeBracketRoute from "./routes/MakeBracket";
import BracketRoute from "./routes/Bracket";
import HomeRoute from "./routes/Home";
import SignInRoute from "./routes/SignIn";

import "./App.css";

function Routes() {
  return (
    <div style={styles.body}>
      <Switch>
        {/** Public Routes */}
        <Route exact path="/login" component={SignInRoute} />
        <Route exact path="/" component={HomeRoute} />
        <Route exact path="/view" component={BracketRoute} />
        <Route exact path="/make" component={MakeBracketRoute} />
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
