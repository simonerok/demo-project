import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react"; // Import useState from React
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const onSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  return (
    <Grid
      templateAreas={{
        lg: `"nav nav"
             "aside main"`,
        base: `"nav" "main"`,
      }}
      templateColumns={{
        lg: "200px 1fr",
        base: "1fr",
      }}
    >
      <GridItem pl="2" area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" bg="pink.300" area={"aside"}>
          <GenreList onSelectGenre={onSelectGenre} />
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
