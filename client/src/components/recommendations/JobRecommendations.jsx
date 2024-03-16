import { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Grid, Divider } from '@mui/material';
import JobDetailedCard from "../jobDetailedCard/JobDetailedCard";
import { Link } from 'react-router-dom';
import CompanyRecommendations from './CompanyRecommendations';
import "./JobRecommendations.css"

const JobRecommendations = () => {


  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen} sx={{color: "#4cae9c", border: 0, "&:hover": {backgroundColor: "transparent", border: 0}}}>Recommendations</Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xl" >
        <DialogTitle>Similar Jobs, Companies</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <div className="all-recommendations">

            <div className='job-recommendations'>
            <Link to="jobs/1">
            <JobDetailedCard />
            </Link>
            <Link to="jobs/2">
            <JobDetailedCard />
            </Link>
            <Link to="jobs/3">
            <JobDetailedCard />
            </Link>
            </div>
            <div className='company-recommendations'>
            <CompanyRecommendations />
            </div>
            </div>
            
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default JobRecommendations;
