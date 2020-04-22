import React, { useReducer, Fragment } from "react";
import reducer from "./reducer";
import "./App.css";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

const initialState = {
  selectedIndex: 0
};

const Activities = selected => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectedIndex } = state;

  const changeActivity = selectedIndex => {
    dispatch({
      type: "SET_ACTIVITY",
      payload: selectedIndex
    });
  };

  const dataActivities = ["cycling", "running", "swimming", "walking"];
  return (
    <div className="col s12 l5">
      {dataActivities.map((a, i) => {
        const active = i === selectedIndex ? "active" : null;
        return (
          <button
            key={i}
            className={`activity ${active}`}
            data-activity={a}
            onClick={() => changeActivity(i)}
          >
            {a}
          </button>
        );
      })}
    </div>
  );
};

function App() {
  const selectedIndex = 0;

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
          <Activities />
          <div className="col s12 l6 push-11">
            <div className="canvas" />
          </div>
        </div>

        <div className="row">
          <form className="col m6 push-m3">
            <p className="flow-text grey-text center">
              How much <span>cycling</span> have you done today?
            </p>
            <input
              className="grey-text"
              name=""
              type="text"
              value=""
              id="cycling"
              placeholder="Distance in m"
            />
            <p className="center pink-text error text-lighten-1">Error</p>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
