import React, { Fragment } from "react";
import { store } from "./redux";
import "./App.css";
// import M from "materialize-css";
import { Question } from "./components/Question";
import { Activities } from "./components/Activities";
import { Canvas } from "./components/Canvas";
import { Provider } from "react-redux";
import data from "./trialData";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <div className="nav z-depth-0">
          <div className="section center">
            <h3 className="white-text center">- The Dojo -</h3>
          </div>
        </div>

        <div className="section center">
          <p className="grey-text flow-text">A fitness tracker for ninjas</p>
        </div>

        <div className="container section">
          <div className="row">
            <Activities />
            <div className="col s12 l6 push-11">
              {/* <div className="canvas" /> */}
              <Canvas data={data} />
            </div>
          </div>
        </div>

        <Question />
      </Fragment>
    </Provider>
  );
}

export default App;
