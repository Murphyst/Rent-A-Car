import React from "react";

import "../App.css";
import Form from "./Form/Form";
import Header from "./Header";
import Results from "./Results";

export default props => {
  return (
    <div className="App">
      <Header />
      <Form />
      <Results />
    </div>
  );
};
