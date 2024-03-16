import React from 'react';
import {
  Card,
  CardMedia,
  Typography,
  Divider,
  Chip,
  Box
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./JobCard.css";
import { MonetizationOn, Money } from '@mui/icons-material';

function ProfessionalCard({ job }) {
  const { name, image, profession, hourlyRate, location, fullTime, skills } = job;

  return (
    <div className='job-card'>

    <Card sx={{ display: 'flex', flexDirection: 'column', padding: "1em", backgroundColor: "white", margin: "1em", width: "100%"}}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'column' } }}>
        {/* Left side (image) */}
        <CardMedia
          component="img"
          sx={{ width: 70, height: 70, borderRadius: '0%', objectFit: 'cover', marginRight: "0.5em"}}
          image={image}
          alt={name}
          />
        {/* Right side (name, profession, and skills) */}
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, ml: { xs: 0, md: 1 } }}>
          {/* Name and profession */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <Typography variant="h5">{name}</Typography>
              <Typography variant="subtitle1">{profession}</Typography>
            </div>
            {/* Hourly rate */}
            <Typography variant="subtitle1" sx={{display: "flex", gap: "0.5em"}}>
              <MonetizationOn className='icon'/>
              {hourlyRate}
              </Typography>
          </Box>
          {/* Introduction */}
          <Divider sx={{ my: 1 }} />
          {/* Skills */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {/* Replace with actual skills */}
            {skills.map(skill => (
              <Chip key={skill} label={skill} sx={{backgroundColor: "#9fe4d636", color: "#2b2b2b"}}/>
              ))}
          </Box>
        </Box>
      </Box>
      <Divider sx={{ my: 1 }} />
      {/* Location and full-time/part-time */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, pb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LocationOnIcon sx={{ mr: 1, color: "#4cae9b"}} />
          <Typography variant="subtitle2">{location}</Typography>
        </Box>
        <Typography variant="subtitle2">{fullTime ? 'Full-Time' : 'Part-Time'}</Typography>
      </Box>
    </Card>
              </div>
  );
}

export default ProfessionalCard;




