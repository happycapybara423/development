import "./App.css";
import { useState } from "react";
import PokemonData from "./assets/PokemonData.json";
import PokemonCard from "./components/PokemonCard";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Stack from '@mui/material/Stack';

import Nav from 'react-bootstrap/Nav';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
PokemonData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    console.log(item.name);
    console.log(cart);
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  return (
    <div className="background">
      <div className="App">
        <h1>Pokémon Starter Trading Cards</h1>
        <div className="appContent">
          <div className="Sidebar">
          <Navbar expand="lg" variant="light" bg="light">
            <Stack direction="column" spacing={1}>
              <FormControl>
                <FormLabel>Sort By</FormLabel>
                <RadioGroup
                  defaultValue="original"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="original" control={<Radio />} label="Original" />
                  <FormControlLabel value="name" control={<Radio />} label="Name" />
                  <FormControlLabel value="price" control={<Radio />} label="Price" />
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="all"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="all" control={<Radio />} label="All" />
                  <FormControlLabel value="grass" control={<Radio />} label="Grass" />
                  <FormControlLabel value="fire" control={<Radio />} label="Fire" />
                  <FormControlLabel value="water" control={<Radio />} label="Water" />
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Region</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="all"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="all" control={<Radio />} label="All" />
                  <FormControlLabel value="kanto" control={<Radio />} label="Kanto" />
                  <FormControlLabel value="johto" control={<Radio />} label="Johto" />
                  <FormControlLabel value="hoenn" control={<Radio />} label="Hoenn" />
                  <FormControlLabel value="sinnoh" control={<Radio />} label="Sinnoh" />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Navbar>
        </div>  
        
        <div className="row-container">
          {/* TODO: personalize your bakery (if you want) */}
          {PokemonData.map(
            (
              item,
              index // TODO: map bakeryData to BakeryItem components
            ) => (
              <PokemonCard key={index} item={item} onClick={addToCart} /> // replace with BakeryItem component
            )
          )}
        </div>

        <div>
          <h2>Cart</h2>
          {/* TODO: render a list of items in the cart */}
          {cart.map((item, index) => (
            <p>
              {item.name} ${item.price}
            </p>
          ))}
          <h2>Total: ${total}</h2>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;