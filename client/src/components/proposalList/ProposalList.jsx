import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography
  } from "@mui/material";
import ProposalPreviewModal from '../viewProposal/ViewProposalTalent';
import Recommendations from '../recommendations/JobRecommendations';
function ProposalList() {

    const hiredPeople = [
        {
          id: 1,
          name: "ReactJS developer needed",
          jobTitle: "Software Engineer",
          startDate: "2022-10-01",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
        },
        {
          id: 2,
          name: "Looking for Experienced MERN Stack Developer ",
          jobTitle: "Graphic Designer",
          startDate: "2022-09-15",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
        },
        {
          id: 3,
          name: "ReactJS developer needed",
          jobTitle: "Software Engineer",
          startDate: "2022-10-01",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
        },
        {
          id: 4,
          name: "Need a MERN Stack Developer",
          jobTitle: "Graphic Designer",
          startDate: "2022-09-15",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
        },
        {
          id: 5,
          name: "Webapp marketplace for nursery homes/ home cares",
          jobTitle: "Software Engineer",
          startDate: "2022-10-01",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
        },
        {
          id: 6,
          name: "Need a MERN Stack Developer",
          jobTitle: "Graphic Designer",
          startDate: "2022-09-15",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
        },
        {
          id: 7,
          name: "Need a MERN Stack Developer",
          jobTitle: "Graphic Designer",
          startDate: "2022-09-15",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
        },
        {
          id: 8,
          name: "Need a MERN Stack Developer",
          jobTitle: "Graphic Designer",
          startDate: "2022-09-15",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
        },
        {
          id: 9,
          name: "ReactJS developer needed",
          jobTitle: "Software Engineer",
          startDate: "2022-10-01",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
        },
        {
          id: 10,
          name: "Looking for Experienced MERN Stack Developer ",
          jobTitle: "Graphic Designer",
          startDate: "2022-09-15",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
        },
      ];

  return (
    <TableContainer component={Paper} sx={{ marginTop: "20px", padding: "2em", backgroundColor: "white", borderRadius: "8px"}}>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell sx={{fontSize: "1rem", color: "#2b2b2b"}}>Job Title</TableCell>
              <TableCell sx={{fontSize: "1rem", color: "#2b2b2b"}}>Job Role</TableCell>
              <TableCell sx={{fontSize: "1rem", color: "#2b2b2b"}}>Initiated</TableCell>
              <TableCell sx={{fontSize: "1rem", color: "#2b2b2b"}}></TableCell>
              <TableCell sx={{fontSize: "1rem", color: "#2b2b2b"}}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hiredPeople.map((person, index) => (
              <TableRow
                key={person.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f4f5f6" : "white",
                }}
                sx={{width: "100%"}}
              >
              
                <TableCell sx={{ padding: "1em",minWidth: "500px",fontSize: "1rem" , color: "#2b2b2b"}}>{person.name}</TableCell>
                <TableCell sx={{ padding: "1em" , minWidth: "100px", fontSize: "1rem", color: "#2b2b2b"}}>
                  {person.startDate}
                </TableCell>
                <TableCell sx={{ padding: "em" , minWidth: "100px"}}>
                    <Typography>Pending</Typography>
                </TableCell>
                <TableCell sx={{ padding: "1em" , minWidth: "150px", fontSize: "1rem", color: "#2b2b2b"}}>
                  <Recommendations />
                </TableCell>
                <TableCell sx={{ padding: "0em" , minWidth: "100px", fontSize: "1rem"}}>
                <ProposalPreviewModal />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>        
  )
}

export default ProposalList;