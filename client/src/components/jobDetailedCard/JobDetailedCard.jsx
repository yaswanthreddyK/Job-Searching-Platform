import { LocationCity, Payment, Verified, VerifiedUserOutlined } from '@mui/icons-material'
import { Box, Chip } from '@mui/material'
import React from 'react'
import "./JobDetailedCard.css"

function JobDetailedCard() {
  return (
    <div>
      <div>
        <div className='job-card-container'>
          <div className=''>
              Posted 29 minutes ago.
          </div>
          <div className='job-title font-bold'>
            Developer to Code React Frontend
          </div>
          <div className='job-details'>
              <div className='job-type'>Fixed price</div>
              <div className='experience'>Entry Level</div>
              <div className='estimated-budget'>Est budget: $ 100</div>
          </div>
          <div className='job-description font-light'>
          We are seeking a skilled Full Stack Web Developer proficient in the MERN (MongoDB, Express.js, React.js, Node.js) stack to join our team. As a Full Stack Web Developer, you will be responsible for developing and maintaining web applications, from front-end to back-end. Your primary focus will be on implementing user interfaces, integrating with databases, and ensuring high performance and responsiveness of applications. Key Responsibilities: Develop user-friendly web interfaces using React.js 
          </div>
          <div className='skills'>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {/* Replace with actual skills */}
            {['NodeJS', 'ReactJS', 'MongoDB'].map(skill => (
              <Chip key={skill} label={skill} sx={{backgroundColor: "#9fe4d636"}}/>
              ))}
          </Box>
          </div>
          <div className='client-details'>
              <div className='payment-verified'>
                <Verified className='icon' />
                Payment verified
              </div>
              <div className='money-spent'>$500 Spent</div>
              <div className='location'>
                <LocationCity className="icon"/>
                California, USA
              </div>
          </div>
          <div className='no-of-proposals'>
            Proposals : 5 - 10
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetailedCard