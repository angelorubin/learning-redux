import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

export default class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes} color="inherit" aria-label="Menu" />
            <Typography variant="h6" color="inherit" className={classes}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
