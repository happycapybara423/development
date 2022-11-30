import "./App.css";
import { useState } from "react";
import PokemonData from "./assets/PokemonData.json";
import PokemonCard from "./components/PokemonCard";
import Stack from '@mui/material/Stack';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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
	const [type, setType] = useState("All");
	const [region, setRegion] = useState("All");
  const [sort, setSort] = useState("popular");

  const addToCart = (item) => {
    console.log(item.name);
    console.log(cart);
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  const typeFilter = item => {
    // all items should be shown when no filter is selected
    if(type === "All") { 
      return true
    } else if (type === item.type) {
      return true
    } else {
      return false
    }
  }

  const regionFilter = item => {
    // all items should be shown when no filter is selected
    if(region === "All") { 
      return true
    } else if (region === item.region) {
      return true
    } else {
      return false
    }
  }

  const filteredTypeData = PokemonData.filter(typeFilter)
  const filteredRegionData = filteredTypeData.filter(regionFilter)


  const selectFilterType = eventKey => {
    setType(eventKey);
  };
  
  const selectFilterRegion = eventKey => {
    setRegion(eventKey);
  };

  const selectSortType = eventKey => {
    console.log(eventKey)
    setSort(eventKey);
  };

  const mySortFunction = (a, b) => {
    
  }

  const sortedArray = filteredRegionData.sort(mySortFunction)

  
  
  return (
    <div className="background">
      <div className="App">
        <h1>Pokémon Starter Trading Cards</h1>
        <div className="appContent">
          <div className="Sidebar">
            
          <Navbar expand="lg" variant="light" bg="light">
            <Stack direction="column" spacing={1}>

              {/* Sorting */}
              <NavDropdown title="Sort by" onSelect={selectSortType}>
                <NavDropdown.Item eventKey="All">All</NavDropdown.Item>
                <NavDropdown.Item eventKey="Name">Name</NavDropdown.Item>
                <NavDropdown.Item eventKey="Price">Price</NavDropdown.Item>
              </NavDropdown>

              {/* Filter by Type */}
              <NavDropdown title="Type" onSelect={selectFilterType}>
                <NavDropdown.Item eventKey="All">All</NavDropdown.Item>
                <NavDropdown.Item eventKey="Grass">Grass</NavDropdown.Item>
                <NavDropdown.Item eventKey="Fire">Fire</NavDropdown.Item>
                <NavDropdown.Item eventKey="Water">Water</NavDropdown.Item>
              </NavDropdown>

              {/* Filter by Region */}
              <NavDropdown title="Region" onSelect={selectFilterRegion}>
                <NavDropdown.Item eventKey="All">All</NavDropdown.Item>
                <NavDropdown.Item eventKey="Kanto">Kanto</NavDropdown.Item>
                <NavDropdown.Item eventKey="Johto">Johto</NavDropdown.Item>
                <NavDropdown.Item eventKey="Hoenn">Hoenn</NavDropdown.Item>
                <NavDropdown.Item eventKey="Sinnoh">Sinnoh</NavDropdown.Item>
              </NavDropdown>

            </Stack>
          </Navbar>
        </div>  
        
        <div className="row-container">
          {sortedArray.map((item, index) => (
              <PokemonCard key={index} item={item}  onClick={addToCart} /> 
            )
          )}
        </div>

        <div>
          <h2>Cart</h2>
          {cart.map((item) => (
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