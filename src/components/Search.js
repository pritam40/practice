import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Search.css';
import Design from './Design';



const Search = () => {
    return (
        <div>
        <Design/>
        <form className="searchbox" noValidate autoComplete="off">  
        <TextField id="filled-basic" label="Enter your location" variant="outlined" fullWidth/>
        <Button variant="contained" color="primary">Search</Button>
      </form>
        </div>
    )
}

export default Search
