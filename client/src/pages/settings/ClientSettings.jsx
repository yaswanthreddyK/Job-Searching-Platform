import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  CircularProgress,
  IconButton,
  
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const StyledLogoButton = styled(Button)({
  backgroundColor: '#24ae81', 
  color: 'white', 
  '&:hover': {
    backgroundColor: '#24ae81'
  },
});

const StyledFileInput = styled('input')({
  display: 'none', // Hide the original input
});


const useStyles = makeStyles({
  root: {
    padding: '16px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

const profile = {
  name: 'John Doe',
  title: 'Climate Champ',
  location: 'New York, USA',
  email: 'john@example.com',
  phone: '+1234567890',
  aboutMe:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit augue eu ligula ullamcorper, eu scelerisque neque interdum. Duis ac interdum ipsum. Nam vestibulum erat ut quam aliquet volutpat. Sed malesuada euismod magna, a pretium leo eleifend sit amet. Sed nec sapien ligula.',
  
  logo: null, 
  website: '',
  shortDescription: '',
  longDescription: '',
  orgType: '', 
  sectors: '',
  climateBased: false,
  agreeToTerms: false,
};

const ClientSettings = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(profile);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        isUploading: true,
      }));

      // Simulate file upload
      setTimeout(() => {
        const reader = new FileReader();
        reader.onload = () => {
          setFormData((prevFormData)=>{
            return {
            ...prevFormData,
            logo: reader.result, 
            isUploading: false,
          }
        });
        };
        reader.readAsDataURL(file);
      }, 1000);
    }
  };

  const handleCancelUpload = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      logo: '',
      isUploading: false,
    }));
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked,
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };




  return (
    <Card className={classes.root+ " settings-container"}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Edit Profile
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Company Name"
            name="company"
            value={formData.title}
            onChange={handleChange}
          />
         <FormControl >
            <FormLabel sx={{marginBottom:"0.5em"}}>Logo</FormLabel>
            {formData.logo && (
              <div>
                <img src={formData.logo} alt="Logo Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                <IconButton onClick={handleCancelUpload}  >
                  <CancelIcon/>
                </IconButton>
              </div>
            )}
            {!formData.logo && (
              <label htmlFor="logo-input"  className='logo-upload-btn'>
                <StyledLogoButton component="span" disabled={formData.isUploading}>
                  {formData.isUploading ? <CircularProgress size={24} sx={{color: "white"}} /> :<span >Upload Logo</span>}
                </StyledLogoButton>
              </label>
            )}
            <StyledFileInput
              id="logo-input"
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
              disabled={formData.isUploading}
            />
          </FormControl>
          <TextField
            label="Company Website"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
          <TextField
            label="Short Description"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            multiline
            rows={2}
          />
          <TextField
            label="Long Description"
            name="longDescription"
            value={formData.longDescription}
            onChange={handleChange}
            multiline
            rows={4}
          />
          <TextField
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          <FormControl>
            <FormLabel>Organization Type</FormLabel>
            <Select
              value={formData.orgType}
              onChange={handleSelectChange}
              name="orgType"
            >
              <MenuItem value="type1">Type 1</MenuItem>
              <MenuItem value="type2">Type 2</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Sectors</FormLabel>
            <Select
              value={formData.sectors}
              onChange={handleSelectChange}
              name="sectors"
            >
              <MenuItem value="sector1">Sector 1</MenuItem>
              <MenuItem value="sector2">Sector 2</MenuItem>
            </Select>
          </FormControl>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.climateBased}
                  onChange={handleCheckboxChange}
                  name="climateBased"
                />
              }
              label="Is it a climate-based organization?"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.agreeToTerms}
                  onChange={handleCheckboxChange}
                  name="agreeToTerms"
                />
              }
              label="Agree to Terms and Conditions"
            />
          </FormGroup>
          <div className={classes.buttonContainer}>
            <Button type="submit" variant="contained" color="primary" sx={{backgroundColor: "#24ae81", "&:hover" : {backgroundColor: "#24ae81"}}}>
              Save Changes
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ClientSettings;
