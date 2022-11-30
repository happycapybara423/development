import "./PokemonCard.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function PokemonCard({ item, onClick }) {
    return (
      <div className="item">
        <img src={item.image}></img>
        <h4>{item.name} &nbsp;•&nbsp; ${item.price}</h4>
        <p>{item.description}</p>
        <Stack direction="row" spacing={1}>
          <Chip label={item.type} />
          <Chip label={item.region} variant="outlined" />
        </Stack>
        <br></br>
        <Button variant="contained" onClick={() => onClick(item)}>Add to Cart</Button>
      </div>
    );
  }