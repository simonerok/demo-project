import React, { useEffect, useState } from 'react';
import axios from 'axios';


/* TYPESCRIPT TYPES FOR GAMES */
interface Game {
  id: number;
  name: string;
  // background_image: string;
}

/* Interfaces what we want to show and types for TypeScript */
interface GamesResponse {
  count: number;
  results: Game[];
}

/* Create an axios instance */
const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY // Ensure this matches your environment variable
  },
});

const GameGrid: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GamesResponse>("/games")
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        setError(error.message ? error.message : "An error occurred");
      });
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      <div className="grid">
        {games.map((game) => (
          <div key={game.id}>{game.name}</div>
        ))}
      </div>
    </div>
  );
};

export default GameGrid;