import React, { useState } from 'react';
import ApplicantList from "../../components/applicantList/ApplicantList"
import Filter from "../../components/filter/Filter"
import "./Applications.css"
import { Typography } from '@mui/material';


function Applications() {

  return (
    <div>
      <div className='applications-container'>
      <Typography variant='h5' >Applications</Typography>
        <div className='applicants-list scroll-function'>
        <ApplicantList />
        </div>
        <div className='applicants-list scroll-function'>
          <ApplicantList />
        </div>
      </div>
    </div>
  )
}

export default Applications