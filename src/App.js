import React, { Fragment } from "react";
import "./App.css";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

function App() {
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
          <div className="col s12 l5">
            <button className="activity active" data-activity="cycling">
              Cycling
            </button>
            <button className="activity" data-activity="running">
              Running
            </button>
            <button className="activity" data-activity="swimming">
              Swimming
            </button>
            <button className="activity" data-activity="walking">
              Walking
            </button>
          </div>
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
