import React from "react";
import Router from "next/router";

class Index extends React.Component {
  componentDidMount() {
    Router.push("/apple-tree");
  }

  render() {
    return null;
  }
}

export default Index;
