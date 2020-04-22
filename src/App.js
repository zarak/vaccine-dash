import React, { useReducer, Fragment } from "react";
import reducer from "./reducer";
import "./App.css";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Question } from "./Question";
import { Activities } from "./Activities";

const initialState = {
  selectedIndex: 0
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
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
          <Activities state={state} dispatch={dispatch} />
          <div className="col s12 l6 push-11">
            <div className="canvas" />
          </div>
        </div>
      </div>

      <Question state={state} />
    </Fragment>
  );
}

export default App;
