import "./App.css";
import { useState } from "react";
import PokemonData from "./assets/PokemonData.json";
import PokemonCard from "./components/PokemonCard";
import Stack from '@mui/material/Stack';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
  const [sort, setSort] = useState("Popular");


  const addToCart = (item) => {
    console.log(item.name)
    console.log(cart)
    const exist = cart.find((x) => x.name === item.name);
    if (exist) {
      const newCart = cart.map((x) =>
      x.name === item.id ? {...exist, qty: exist.qty + 1} : x);
      setCart(newCart)
    } else {
      const newCart = [...cart, {...item, qty:1}];
      setCart(newCart)
    }
    setTotal(total + item.price);
  };

  // const removeFromCart = (item) => {
  //   console.log(item.name);
  //   console.log(cart);
  //   setCart([...cart, item]);
  //   setTotal(total - item.price);
  // };

  const removeFromCart = (item) => {
    const exist = cart.find((x) => x.name === item.name);
    if (exist.qty === 1) {
      const newCart = cart.filter((x) => 
      x.name !== item.name);
      setCart(newCart);
    } else {
      const newCart = cart.map((x) => 
      x.name === item.name ? {...exist, qty: exist.qty -1} : x)
      setCart(newCart);
    }
    setTotal(total - item.price);
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
    if(sort === "Popular") { 

        return 1;
        
    } else if (sort === "Alphabetical"){
     
      return a.name.localeCompare(b.name);

    } else if (sort === "Price"){
      
      return a.price - b.price;
    
    } 
  }

  const filteredTypeData = PokemonData.filter(typeFilter)
  const filteredRegionData = filteredTypeData.filter(regionFilter)
  const sortedArray = filteredRegionData.sort(mySortFunction)

  
  return (
    <div className="background">
      <div className="App">
        <h1>Pokémon Starter Trading Cards</h1>
        <div className="appContent">
          <div className="Sidebar">
          
          <Navbar expand="lg" variant="light" bg="light">
            <Stack direction="column" spacing={1}>
            <h4>Filters</h4>

              {/* Sorting */}
              <NavDropdown title="Sort by" onSelect={selectSortType}>
                <NavDropdown.Item eventKey="Popular">Popular</NavDropdown.Item>
                <NavDropdown.Item eventKey="Alphabetical">Alphabetical</NavDropdown.Item>
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

              <div>
                <br></br>
                <h4>Cart</h4>
                {cart.map((item) => (
                  <p>
                    {item.name}: ${item.price}
                  </p>
                ))}
                <p><b>Total: ${total}</b></p>
              </div>
            </Stack>
          </Navbar>
          </div>  
        
          <div className="row-container">
            {sortedArray.map((item, index) => (
                 <PokemonCard  item={item} onAdd={addToCart} onRemove={removeFromCart}/>))
            }
          </div>
          <div>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default App;