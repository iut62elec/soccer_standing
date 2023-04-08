import React, { useState } from 'react';
import './SoccerStandingsTable.css';

const initialStandings = [
  { id: 1, team: 'Team A', played: 10, won: 7, drawn: 2, lost: 1, gf: 20, ga: 10, gd: 10, points: 23 },
  { id: 2, team: 'Team B', played: 10, won: 5, drawn: 4, lost: 1, gf: 18, ga: 10, gd: 8, points: 19 },
  // Add more teams here...
];

const SoccerStandingsTable = () => {
  const [standings, setStandings] = useState(initialStandings);

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
