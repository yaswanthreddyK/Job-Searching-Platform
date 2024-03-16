import React, { useState } from 'react';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from '@mui/material';
import "./SearchInput.css"
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputAdornment from '@mui/material/InputAdornment';
import { Search } from '@mui/icons-material';

function SearchInput() {
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');

  const handleJobTypeChange = (event) => {
    setJobType(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for job type:", jobType, "and location:", location);
  };

  return (
    <div className='search-input'>
      <Grid container spacing={2} alignItems="center" sx={{width: "80vw"}}>
        <Grid item xs={12} md={4} >
          <TextField
            label="Search Jobs, People"
            variant="outlined"
            value={jobType}
            onChange={handleJobTypeChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search className='icon'/>
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="location-label">Location</InputLabel>
            <Select
              labelId="location-label"
              value={location}
              onChange={handleLocationChange}
              label="Location"
              fullWidth
              startAdornment={(
                <InputAdornment position="start">
                  <LocationOnIcon className='icon'/>
                </InputAdornment>
              )}
            >
              <MenuItem value="New York">New York</MenuItem>
              <MenuItem value="Los Angeles">Los Angeles</MenuItem>
              <MenuItem value="Chicago">Chicago</MenuItem>
              {/* Add more menu items as needed */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={2} style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            onClick={handleSearch}
            fullWidth
            sx={{ backgroundColor: "#4cae9b", minWidth: "10em" , "&:hover" : {backgroundColor: "#4cae9b"}}}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchInput;
