import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";

export default class Login extends Component {
  render() {
    return (
      <>
        <FormControl>
          <Typography variant="h4">Login</Typography>
          <TextField id="email" label="Email" value="" onChange={() => {}} />
          <TextField
            id="password"
            label="Password"
            value=""
            onChange={() => {}}
          />
          <Button variant="contained" className={""}>
            SignIn
          </Button>
        </FormControl>
      </>
    );
  }
}
