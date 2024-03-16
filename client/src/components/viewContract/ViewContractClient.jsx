import { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Grid, Divider } from '@mui/material';

const ContractPreviewModal = ({ contract= {client: "yaswanth", startDate: "24/2/24", endDate: "1/3/24", amount: "$400" }}) => {


  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen} sx={{color: "#4cae9c", border: 0, "&:hover": {backgroundColor: "transparent", border: 0}}}>View Contract</Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md" >
        <DialogTitle>Contract Preview</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Name:</Typography>
              <Typography>{contract.client}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Start Date:</Typography>
              <Typography>{contract.startDate}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">End Date:</Typography>
              <Typography>{contract.endDate}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Amount:</Typography>
              <Typography>{contract.amount}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            {/* Add more contract details as needed */}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContractPreviewModal;
