import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../actions";
import Icon from "@material-ui/core/Icon";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const mapStateToProps = state => {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users
  };
};

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(userActions.getAll());
  }

  handleDeleteUser(id) {
    const { dispatch } = this.props;
    return () => dispatch(userActions.delete(id));
  }

  render() {
    const { user, users } = this.props;
    console.log(user);

    return (
      <>
        <Typography variant="h4">Olá, {user.firstName}!</Typography>
        <Typography variant="h6">Usuários registrados:</Typography>
        {users.loading && <em>Lendo usuários...</em>}
        {users.items && (
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Names</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.items.map((user, index) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      {user.firstName + " " + user.lastName}
                    </TableCell>
                    {user.deleting ? (
                      <span>Deleting...</span>
                    ) : user.deleteError ? (
                      <span className="error">
                        {" "}
                        - ERROR: {user.deleteError}
                      </span>
                    ) : (
                      <TableCell>
                        <Link to="" onClick={this.handleDeleteUser(user.id)}>
                          <Icon>delete_forever</Icon>
                        </Link>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        )}
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </>
    );
  }
}

const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };
