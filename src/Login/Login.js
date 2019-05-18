import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import { userActions } from "../actions";

const styles = theme => ({
  button: {
    marginTop: "0.5rem"
  }
});

class Login extends Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      username: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { loggingIn, classes } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <Fragment>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form name="form" onSubmit={this.handleSubmit}>
          <FormGroup
            className={
              "form-group" + (submitted && !username ? " has-error" : "")
            }
          >
            <TextField
              name="username"
              label="username"
              value={username}
              onChange={this.handleChange}
              margin="normal"
            />
            {submitted && !username && (
              <div className="help-block">Username is required</div>
            )}
          </FormGroup>
          <FormGroup
            className={
              "form-group" + (submitted && !password ? " has-error" : "")
            }
          >
            <TextField
              name="password"
              label="password"
              value={password}
              type="password"
              onChange={this.handleChange}
              margin="normal"
            />
            {submitted && !password && (
              <div className="help-block">Password is required</div>
            )}
          </FormGroup>
          <FormGroup>
            <Button
              variant="contained"
              color="primary"
              className="btn btn-primary"
              margin="normal"
              type="submit"
            >
              Login
            </Button>
            {loggingIn && (
              <img
                alt=""
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              />
            )}

            <Button
              className={classes.button}
              color="secondary"
              component={Link}
              to="/register"
              variant="contained"
            >
              Register
            </Button>
          </FormGroup>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
};

const connectedLogin = connect(mapStateToProps)(withStyles(styles)(Login));

export { connectedLogin as Login };
