import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css"
import { Container } from "react-bootstrap";
import Card from "./components/Card";

const App = () => {
  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 style={{color: '#fff'}}>Fitness Challenge</h1>
      <Card />
    </Container>
  );
};

export default App;
