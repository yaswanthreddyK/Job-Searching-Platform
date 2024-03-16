import React from 'react'
import ProposalList from '../../components/proposalList/ProposalList'
import Filter from "../../components/filter/Filter"
import "./Proposals.css"
import { Typography } from '@mui/material'

function Proposals() {
  return (
    <div className='proposals-container'>

    <div className='proposal-heading'>
    <Typography variant='h4' gutterBottom>Proposals</Typography>
    </div>
    <div>
        <ProposalList />
    </div>
    </div>
  )
}

export default Proposals