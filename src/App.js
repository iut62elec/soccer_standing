import React, { useState, useEffect } from "react";
import { Team } from './models';
import { BrowserRouter as Router, Route, Link, Outlet, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';

//import './App.css';
import SoccerStandingsTable from './SoccerStandingsTable'
import axios from "axios";
import "@aws-amplify/ui-react/styles.css"; // default theme
import { Flex, AmplifyProvider } from "@aws-amplify/ui-react";
import { DataStore } from "@aws-amplify/datastore";
//import { getSFworkflow } from './graphql/queries'
import {Amplify, API, Auth, graphqlOperation, Storage} from 'aws-amplify'
import {  withAuthenticator, AmplifyS3Image } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import Schedule from './Schedule';

Amplify.configure(awsconfig);

class App extends React.Component {
  state = {
    imageUrl: ''
  };

  async componentDidMount() {
    const imageUrl = await Storage.get('soccer_2.jpg');
    this.setState({ imageUrl });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
            <Container>
              <Navbar.Brand>Long Island Men's Soccer 2023</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-nav" />
              <Navbar.Collapse id="navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/standings">
                    Standings
                  </Nav.Link>
                  <Nav.Link as={Link} to="/schedule">
                    Schedules
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Container>
            <Routes>
              <Route path="/" element={<Home imageUrl={this.state.imageUrl} />} />
              <Route path="/standings" element={<SoccerStandingsTable />} />
              <Route path="/schedule" element={<Schedule />} />
            </Routes>
          </Container>
        </div>
      </Router>
    );
  }
}

function Home({ imageUrl }) {
  return (
    <div>
      <h1 className="mb-3"></h1>
      {imageUrl && <img src={imageUrl} alt="Home" className="img-fluid" />}
    </div>
  );
}

//export default App;
export default withAuthenticator(App);
