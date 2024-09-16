// src/hooks/useGames.ts
import { useState, useEffect } from 'react';
import axios from 'axios';


interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get<GamesResponse>('https://api.rawg.io/api/games', {
          params: {
            key: import.meta.env.VITE_API_KEY,
          },
        });
        setGames(response.data.results);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchGames();
  }, []);

  return { games, error };
};

export default useGames;
export default Game;