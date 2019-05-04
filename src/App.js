import React, { Fragment } from "react";
import List from "./js/components/List";
import Form from "./js/components/Form";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Header from "./js/components/Header";

function App() {
  return (
    <>
      <CssBaseline>
        <Header />
        <Typography variant="h4" gutterBottom>
          Learning Redux
        </Typography>
        <Form />
        <List />
      </CssBaseline>
    </>
  );
}

export default App;
