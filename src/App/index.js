import React, { Component, Fragment } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../helpers/history";
import { alertActions } from "../actions";
import { PrivateRoute } from "../components/PrivateRoute";
import { Home } from "../Home";
import { Login } from "../Login";
import { Register } from "../Register";

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const alert = this.props;
    return (
      <Fragment>
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
            <Router history={history}>
              <div>
                <PrivateRoute exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              </div>
            </Router>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { alert } = state;
  return {
    alert
  };
};

export default connect(mapStateToProps)(App);
