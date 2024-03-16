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

function ApplicantList() {

    const hiredPeople = [
        {
          id: 1,
          name: "ReactJS developer needed",
          jobTitle: "Software Engineer",
          startDate: "2022-10-01",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
          applications: 24,
        },
        {
          id: 2,
          name: "Looking for Experienced MERN Stack Developer ",
          jobTitle: "Graphic Designer",
          startDate: "2022-09-15",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
          applications: 14,
        },
        {
          id: 3,
          name: "ReactJS developer needed",
          jobTitle: "Software Engineer",
          startDate: "2022-10-01",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
          applications: 20,
        },
        {
          id: 4,
          name: "Need a MERN Stack Developer",
          jobTitle: "Graphic Designer",
          startDate: "2022-09-15",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
          applications: 34,
        },
        {
          id: 5,
          name: "Webapp marketplace for nursery homes/ home cares",
          jobTitle: "Software Engineer",
          startDate: "2022-10-01",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
          applications: 3,
        },
        {
          id: 6,
          name: "Need a MERN Stack Developer",
          jobTitle: "Graphic Designer",
          startDate: "2022-09-15",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
          applications: 60,
        },
        {
          id: 7,
          name: "Need a MERN Stack Developer",
          jobTitle: "Graphic Designer",
          startDate: "2022-09-15",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
          applications: 24,
        },
        {
          id: 8,
          name: "Need a MERN Stack Developer",
          jobTitle: "Graphic Designer",
          startDate: "2022-09-15",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
          applications: 24,
        },
        {
          id: 9,
          name: "ReactJS developer needed",
          jobTitle: "Software Engineer",
          startDate: "2022-10-01",
          contractUrl: "#",
          imageUrl: "https://via.placeholder.com/50",
          applications: 24,
        },
        {
          id: 10,
          name: "Looking for Experienced MERN Stack Developer ",
          jobTitle: "Graphic Designer",
          startDate: "2022-09-15",
          contractUrl: "#",
          applications: 10,
          imageUrl: "https://via.placeholder.com/50",
        },
      ];

  return (   
    <TableContainer component={Paper} sx={{ marginTop: "20px", width: "1200px"}}>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell sx={{fontSize: "1rem", color: "#2b2b2b"}}>Job Title</TableCell>
              <TableCell sx={{fontSize: "1rem", color: "#2b2b2b"}}>Posted On</TableCell>
              <TableCell sx={{fontSize: "1rem", color: "#2b2b2b", textAlign: "center"}}>Total Applications</TableCell>
              <TableCell sx={{fontSize: "1rem", color: "#2b2b2b"}}>Cancel Job</TableCell>
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
                 {person.name}
                </TableCell>
                <TableCell sx={{  minWidth: "150px", fontSize: "1rem", color: "#2b2b2b"}}>
                  2024-10-20
                </TableCell>
                <TableCell sx={{ minWidth: "100px", fontSize: "1rem", textAlign: "center"}}>
                  {person.applications}
                </TableCell>
                <TableCell sx={{ minWidth: "100px"}}>
                    <button style={{fontSize: "1rem", backgroundColor: " #ff0000"}} className='message-btn'>Cancel</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>        
  )
}

export default ApplicantList;