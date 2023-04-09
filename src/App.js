import React, { useState, useEffect } from "react";
import { Team } from './models';
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

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Long Island Men's Soccer 2023</h1>
      </header>
      <main>
        <SoccerStandingsTable />
        <Schedule />
      </main>
    </div>
  );
};

//export default App;
export default withAuthenticator(App);
