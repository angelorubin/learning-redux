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
    return (
      <div>
        <h1>Olá, {user.firstName}!</h1>
        <p>Você está logado.</p>
        <h3>Todos os usuários registrados:</h3>
        {users.loading && <em>Lendo usuários...</em>}
        {users.items && (
          <Table>
            <TableHead>
              <TableRow>Username</TableRow>
              <TableRow>Action</TableRow>
            </TableHead>

            {users.items.map((user, index) => (
              <div key={user.id}>
                {user.firstName + " " + user.lastName}
                {user.deleting ? (
                  <em> - Deleting...</em>
                ) : user.deleteError ? (
                  <span className="error"> - ERROR: {user.deleteError}</span>
                ) : (
                  <span>
                    <a onClick={this.handleDeleteUser(user.id)}>
                      <Icon>delete_forever</Icon>
                    </a>
                  </span>
                )}
              </div>
            ))}
          </Table>
        )}
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users
  };
};

const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };
