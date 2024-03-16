import React, { useState } from 'react';
import { TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, InputAdornment, Select, MenuItem, Input, Button, CircularProgress } from '@mui/material';
import "./ProposalForm.css";

function ProposalForm() {
  const [coverLetter, setCoverLetter] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [price, setPrice] = useState({ hourly: 5, fixed: 5 });
  const [time, setTime] = useState('');
  const [resume, setResume] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleCoverLetterChange = (event) => {
    setCoverLetter(event.target.value);
  };

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  const handleHourlyRateChange = (event) => {
    setPrice({ ...price, hourly: event.target.value });
  };

  const handleFixedPriceChange = (event) => {
    setPrice({ ...price, fixed: event.target.value });
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleSubmit = () => {
    setUploading(true);
    // Simulate upload process
    setTimeout(() => {
      setUploadStatus('Upload successful');
      setUploading(false);
    }, 2000);
  };

  return (
    <div className='proposal-flex-direction'>
      <TextField
        label="Cover Letter"
        multiline
        rows={4}
        value={coverLetter}
        onChange={handleCoverLetterChange}
        fullWidth
        margin="normal"
        variant="outlined"
        sx={{ width: "100%" }}
      />
      <FormControl component="fieldset">
        <FormLabel component="legend">Payment Type</FormLabel>
        <RadioGroup aria-label="payment-type" name="payment-type" value={paymentType} onChange={handlePaymentTypeChange}>
          <FormControlLabel value="Full Time" control={<Radio />} label="Full Time" />
          <FormControlLabel value="Part Time" control={<Radio />} label="Part Time" />
          <FormControlLabel value="fixed" control={<Radio />} label="Fixed Price" />
          {paymentType === 'fixed' && (
            <TextField
              label="Price"
              type="number"
              value={price.fixed}
              onChange={handleFixedPriceChange}
              fullWidth
              margin="normal"
              variant="outlined"
              inputProps={{ min: 5 }}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          )}
          <FormControlLabel value="hourly" control={<Radio />} label="Hourly Rate" />
          {paymentType === 'hourly' && (
            <TextField
              label="Rate"
              type="number"
              value={price.hourly}
              onChange={handleHourlyRateChange}
              fullWidth
              margin="normal"
              variant="outlined"
              inputProps={{ min: 5 }}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          )}
        </RadioGroup>
      </FormControl>
      <FormControl fullWidth margin="normal" variant="outlined" sx={{ maxWidth: "200px" }}>
        <Select
          value={time}
          onChange={handleTimeChange}
          displayEmpty
          inputProps={{ 'aria-label': 'time' }}
        >
          <MenuItem value="" disabled>
            Select Time
          </MenuItem>
          <MenuItem value={1}>1 Day</MenuItem>
          <MenuItem value={3}>3 Days</MenuItem>
          <MenuItem value={7}>1 Week</MenuItem>
          <MenuItem value={14}>2 Weeks</MenuItem>
          {/* Add more options as needed */}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <Input
          type="file"
          onChange={handleResumeChange}
          sx={{ display: 'none' }} // Hide the default input appearance
          inputProps={{ accept: '.pdf,.doc,.docx' }} // Accept only certain file types
          id="upload-resume"
        />
        <label htmlFor="upload-resume">
          <Button variant="contained" component="span" sx={{backgroundColor: "#4cae9b",'&:hover': {backgroundColor: "#4cae9b"}}}>
            Upload Resume
          </Button>
        </label>
      </FormControl>
      {uploading && <CircularProgress />} {/* Show progress indicator when uploading */}
      {uploadStatus && <div>{uploadStatus}</div>} {/* Show upload status */}
      <div className="submit-button ">
        <Button variant="contained" onClick={handleSubmit} sx={{backgroundColor: "#4cae9b", '&:hover': {backgroundColor: "#4cae9b"}}}>Submit</Button>
      </div>
    </div>
  );
}

export default ProposalForm;
