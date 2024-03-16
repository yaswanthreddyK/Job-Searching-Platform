import React from 'react'
import {Box, Chip} from "@mui/material"
import "./ProposalPreview.css"
import ProfessionalRecommendations from '../recommendations/ProfessionalRecommendations'

function ProposalPreview() {
  return (
    <div className='proposal-preview-data-container'>
        <div className='proposal-content'>
            <div>
                <div className='heading'>Cover Letter</div>
                <p className='light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore delectus placeat pariatur suscipit doloremque. Accusantium eligendi accusamus hic sunt illum! Ab quasi velit culpa quos omnis quibusdam nihil odio laborum optio suscipit saepe voluptatem mollitia quas perferendis, reiciendis ratione quae quis neque voluptatum libero qui laboriosam numquam dolorum. Minus quasi explicabo voluptatibus, ducimus amet id magnam sequi ipsum porro minima. Veritatis excepturi dolorem, libero ad, natus soluta molestiae quas nulla debitis, velit incidunt saepe dicta maxime repellat adipisci fugit accusantium?</p>
            </div>
            <div>
                <div className='heading'>Proposed Bid</div>
                <div className='light bid-amount'>$ 400</div>
            </div>
            <div>
                <div className='heading'>About</div>
                <p className='light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cumque voluptatibus dolore cupiditate aliquam porro magnam natus tempore animi rerum.</p>
            </div>
            <div>
                <div className='heading'>Skills</div>
                <p className='light'>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                 {["NodeJS", "ReactJS", "MongoDB", "NextJS"].map(skill => (
                    <Chip key={skill} label={skill} sx={{backgroundColor: "#9fe4d636", color: "#2b2b2b"}}/>
              ))}
                </Box>
                </p>
            </div>
        </div>
        <div className='professional-recommendation-list'>
            <h3 className='heading'>Recommendations</h3>
          <ProfessionalRecommendations />
        </div>
    </div>
  )
}

export default ProposalPreview