import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import axios from 'axios';
import { useEffect, useState } from 'react';


const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    /* access env fil med key */
    key: import.meta.env.API_KEY
  },
});

interface Game {
  id: number;
  name: string;
  //background_image: string;
}

/* interfaces what we want to show */
interface GamesResponse {
  count: number;
  results: Game[];
}



function App() {
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
    <Grid
      templateAreas={{
        lg: `"nav nav"
             "aside main"`,
        base: `"nav" "main"`
      }}
    >
      <GridItem pl='2' area={'nav'}>
        <NavBar/>
      </GridItem> 
      <Show above="lg">
      <GridItem pl='2' bg='pink.300' area={'aside'}>
        Aside
      </GridItem>
      </Show>
      <GridItem pl='2' bg='green.300' area={'main'}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App
