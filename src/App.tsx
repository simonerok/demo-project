import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar';

function App() {
  return (
    <Grid
      templateAreas={{
        lg: `"nav nav"
             "aside main"`,
        base: `"nav" "main"`
      }}
    >
      <GridItem pl='2' bg='orange.300' area={'nav'}>
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
