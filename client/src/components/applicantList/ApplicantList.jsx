import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
  } from "@mui/material";
import ProposalPreviewModal from "../viewProposal/ViewProposalTalent";
import "./ApplicantList.css";

function ApplicantList() {

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
      ];

  return (   
    <TableContainer component={Paper} sx={{ marginTop: "20px", width: "1200px"}}>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell sx={{fontSize: "1rem", color: "#2b2b2b"}}>Profile</TableCell>
              <TableCell sx={{fontSize: "1rem", color: "#2b2b2b"}}>Name</TableCell>
              <TableCell sx={{fontSize: "1rem", color: "#2b2b2b"}}>Job Applied to</TableCell>
              <TableCell sx={{fontSize: "1rem", color: "#2b2b2b"}}></TableCell>
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
              
                <TableCell sx={{padding: "0em 0 0 0.5em",Width: "100px",fontSize: "1rem" , color: "#2b2b2b"}}>
                  <img className='applicant-img' src='../../../img/man.png' alt="" />
                </TableCell>
                <TableCell sx={{  minWidth: "150px", fontSize: "1rem", color: "#2b2b2b"}}>
                  John Doe
                </TableCell>
                <TableCell sx={{ minWidth: "500px", fontSize: "1rem", color: "#2b2b2b"}}>
                  {person.name}
                </TableCell>
                <TableCell sx={{ minWidth: "100px", fontSize: "1rem"}}>
                  <ProposalPreviewModal />
                </TableCell>
                <TableCell sx={{ minWidth: "100px"}}>
                    <button style={{fontSize: "1rem"}} className='message-btn'>Invite</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>        
  )
}

export default ApplicantList;