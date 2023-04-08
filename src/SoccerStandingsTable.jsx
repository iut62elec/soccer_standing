import React, { useState, useEffect } from 'react';
import './SoccerStandingsTable.css';

// AWS Amplify
import { API, graphqlOperation } from 'aws-amplify';
import { listTeams } from './graphql/queries';

const SoccerStandingsTable = () => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    fetchStandings();
  }, []);

  const fetchStandings = async () => {
    try {
      const teamData = await API.graphql(graphqlOperation(listTeams));
      const teams = teamData.data.listTeams.items;
      setStandings(teams);
    } catch (error) {
      console.error('Error fetching standings:', error);
    }
  };
  return (
    <div className="soccer-standings-container">
      <table className="soccer-standings-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Drawn</th>
            <th>Lost</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {standings
            .sort((a, b) => b.points - a.points || b.gd - a.gd || b.gf - a.gf)
            .map((team, index) => (
              <tr key={team.id}>
                <td>{index + 1}</td>
                <td>{team.team}</td>
                <td>{team.played}</td>
                <td>{team.won}</td>
                <td>{team.drawn}</td>
                <td>{team.lost}</td>
                <td>{team.gf}</td>
                <td>{team.ga}</td>
                <td>{team.gd}</td>
                <td>{team.points}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SoccerStandingsTable;
