import React from 'react'
import Filter from '../../components/filter/Filter'
import PostedJobsList from '../../components/postedJobsList/PostedJobsList'
import { Typography } from '@mui/material'
import "./JobsPosted.css"

function JobsPosted() {
  return (
    <div>
      <div className='jobs-posted-container'>
    <div>
        <Typography variant='h5'>Posted Jobs</Typography>
    </div>
    <div className='jobs-list scroll-function'>
    <PostedJobsList />
    </div>
    
      </div>
    </div>
  )
}

export default JobsPosted