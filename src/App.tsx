import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  useLocation,
} from "react-router-dom";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Bracket from "./components/bracket/Bracket";
import TopNavigation from "./components/navigation/TopNavigation";
import BracketRoute from "./routes/MakeBracket";
import MakeBracketRoute from "./routes/Bracket";
import "./App.css";

function Routes() {
  return (
    <div style={styles.body}>
      <Switch>
        {/** Public Routes */}
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
              {/* <GlobalAlertQueue /> */}
            </div>
            {/* <div className="sidebar-1">
              <div className="sticky-spacer"></div>
              <div className="sticky-content">
                <SideNavigation />
              </div>
            </div> */}
            <div className="content">
              {/* <div className="sticky-content"> */}
              <Routes />
              {/* </div> */}
            </div>
          </div>
        </Router>
      </PersistGate>
    </Provider>
    // <div className="App" style={{ width: 4000, height: 4000 }}>
    //   <Bracket />
    // </div>
  );
}

const styles: StyleSheetCSS = {
  body: {},
};

export default App;
