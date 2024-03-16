import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Slider,
  FormControlLabel,
  Checkbox,
  FormGroup,
  TextField,
} from "@mui/material";
import "./Jobs.css";
import JobCard from "../../components/jobCard/JobCard";
import {Link} from "react-router-dom";
import {Search, ViewModule} from "@mui/icons-material";
import JobDetailedCard from "../../components/jobDetailedCard/JobDetailedCard";

function Jobs() {
  const jobPosts = [
    {
      name: "Google",
      image: "../../../img/company1.png",
      profession: "Software Engineer",
      hourlyRate: "$80k - $100k",
      location: "Mountain View, CA, USA",
      fullTime: true,
      skills: ["Java", "Python", "JavaScript", "Angular", "SQL"],
      intro: "Google is seeking a talented software engineer to join our team. As a software engineer at Google, you will work on cutting-edge projects and collaborate with a diverse team of engineers. We are looking for candidates with strong programming skills and a passion for innovation."
    },
    {
      name: "Microsoft",
      image: "../../../img/company2.png",
      profession: "Data Scientist",
      hourlyRate: "$80k - $100k",
      location: "Redmond, WA, USA",
      fullTime: true,
      skills: ["Python", "R", "Machine Learning", "Azure", "Big Data"],
      intro: "Microsoft is hiring a data scientist to join our AI & Research team. As a data scientist at Microsoft, you will work on challenging problems and have the opportunity to make a real impact. We are looking for candidates with strong analytical skills and a passion for data-driven insights."
    },
    {
      name: "Amazon",
      image: "../../../img/company3.jpeg",
      profession: "Cloud Architect",
      hourlyRate: "$80k - $100k",
      location: "Seattle, WA, USA",
      fullTime: true,
      skills: ["AWS", "Azure", "Google Cloud", "DevOps", "Microservices"],
      intro: "Amazon Web Services (AWS) is looking for a talented cloud architect to join our team. As a cloud architect at AWS, you will design and implement scalable cloud solutions for our customers. We are looking for candidates with deep expertise in cloud technologies and a track record of success."
    },
    {
      name: "Apple",
      image: "../../../img/company4.png",
      profession: "iOS Developer",
      hourlyRate: "$80k - $100k",
      location: "Cupertino, CA, USA",
      fullTime: true,
      skills: ["Swift", "Objective-C", "iOS SDK", "Xcode", "UIKit"],
      intro: "Apple is seeking an experienced iOS developer to join our iOS engineering team. As an iOS developer at Apple, you will play a key role in building innovative and user-friendly iOS applications. We are looking for candidates with a passion for mobile development and a commitment to quality."
    },
    {
      name: "Facebook",
      image: "../../../img/company5.png",
      profession: "Product Designer",
      hourlyRate: "$80k - $100k",
      location: "Menlo Park, CA, USA",
      fullTime: true,
      skills: ["UI/UX Design", "Sketch", "Figma", "Prototyping", "User Research"],
      intro: "Facebook is hiring a product designer to join our design team. As a product designer at Facebook, you will work on designing intuitive and engaging products that millions of people use every day. We are looking for candidates with a strong design portfolio and a passion for user-centered design."
    },
    {
      name: "Netflix",
      image: "../../../img/company6.png",
      profession: "Frontend Developer",
      hourlyRate: "$80k - $100k",
      location: "Los Gatos, CA, USA",
      fullTime: true,
      skills: ["JavaScript", "React", "Redux", "CSS", "HTML"],
      intro: "Netflix is seeking a talented frontend developer to join our streaming experience team. As a frontend developer at Netflix, you will work on building and optimizing the user interface for our streaming platform. We are looking for candidates with a strong technical background and a passion for delivering exceptional user experiences."
    },
    {
      name: "Uber",
      image: "../../../img/company7.jpeg",
      profession: "Backend Engineer",
      hourlyRate: "$80k - $100k",
      location: "San Francisco, CA, USA",
      fullTime: true,
      skills: ["Java", "Spring Boot", "Microservices", "Kubernetes", "Databases"],
      intro: "Uber is hiring a backend engineer to join our engineering team. As a backend engineer at Uber, you will work on building and scaling the backend systems that power our global transportation platform. We are looking for candidates with strong software engineering skills and a passion for solving complex problems."
    },
    {
      name: "Tesla",
      image: "../../../img/company8.png",
      profession: "Autopilot Engineer",
      hourlyRate: "$80k - $100k",
      location: "Palo Alto, CA, USA",
      fullTime: true,
      skills: ["Computer Vision", "Deep Learning", "C++", "Python", "Robotics"],
      intro: "Tesla is seeking an autopilot engineer to join our Autopilot team. As an autopilot engineer at Tesla, you will work on developing and improving the autonomous driving capabilities of our vehicles. We are looking for candidates with expertise in computer vision, deep learning, and robotics."
    },
    {
      name: "SpaceX",
      image: "../../../img/company9.png",
      profession: "Spacecraft Engineer",
      hourlyRate: "$80k - $100k",
      location: "Hawthorne, CA, USA",
      fullTime: true,
      skills: ["Aerospace Engineering", "Rocket Propulsion", "Spacecraft Design", "CAD", "Simulation"],
      intro: "SpaceX is hiring a spacecraft engineer to join our Starship development team. As a spacecraft engineer at SpaceX, you will work on designing, testing, and launching next-generation spacecraft. We are looking for candidates with a strong background in aerospace engineering and a passion for space exploration."
    },
    {
      name: "Adobe",
      image: "../../../img/company10.png",
      profession: "UI/UX Designer",
      hourlyRate: "$80k - $100k",
      location: "San Jose, CA, USA",
      fullTime: true,
      skills: ["Adobe XD", "Adobe Illustrator", "UI Design", "UX Design", "Wireframing"],
      intro: "Adobe is seeking a talented UI/UX designer to join our design team. As a UI/UX designer at Adobe, you will work on designing innovative and user-friendly digital experiences across our suite of creative tools. We are looking for candidates with a strong design portfolio and a passion for creativity."
    },
    {
      name: "Intel",
      image: "../../../img/company11.png",
      profession: "Software Developer",
      hourlyRate: "$80k - $100k",
      location: "Santa Clara, CA, USA",
      fullTime: true,
      skills: ["C++", "Python", "Linux", "Embedded Systems", "Software Development"],
      intro: "Intel is hiring a software developer to join our software engineering team. As a software developer at Intel, you will work on developing and optimizing software solutions for a wide range of applications. We are looking for candidates with strong programming skills and a passion for technology."
    },
    {
      name: "IBM",
      image: "../../../img/company12.png",
      profession: "Data Engineer",
      hourlyRate: "$80k - $100k",
      location: "Armonk, NY, USA",
      fullTime: true,
      skills:  ["C++", "Python", "Linux", "Embedded Systems", "Software Development"],
      intro: "IBM is hiring a software developer to join our software engineering team. As a software developer at Intel, you will work on developing and optimizing software solutions for a wide range of applications. We are looking for candidates with strong programming skills and a passion for technology."
    }
  ]
  
  const [jobTypes, setJobTypes] = useState({
    partTime: false,
    hourly: false,
    fullTime: false,
    singleContract: false,
  });

  const [experienceLevels, setExperienceLevels] = useState({
    entryLevel: false,
    intermediate: false,
    expert: false,
  });

  const [fixedPrice, setFixedPrice] = useState([0, 100]);

  const [searchQuery, setSearchQuery] = useState("");

  const [technologies, setTechnologies] = useState("");

  const [toggleView,setToggleView] = useState(true)


  const handleViewChange = () => {
    setToggleView(!toggleView)
  }

  const handleTechnologyChange = (event) => {};

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleJobTypeChange = (event) => {
    setJobTypes({ ...jobTypes, [event.target.name]: event.target.checked });
  };

  const handleExperienceLevelChange = (event) => {
    setExperienceLevels({
      ...experienceLevels,
      [event.target.name]: event.target.checked,
    });
  };

  const handleFixedPriceChange = (event, newValue) => {
    setFixedPrice(newValue);
  };
  return (
    <div className="job-container">
      <div className="job-content">
        <div className="left-side">
          <Accordion expanded={true}>
            <AccordionSummary
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography variant="subtitle1" className="heading">Hourly rate</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ flexDirection: "column" }}>
              <Slider
                defaultValue={[0, 100]}
                aria-labelledby="range-slider"
                getAriaValueText={(value) => `${value}$`}
                valueLabelDisplay="auto"
                min={0}
                max={500}
                step={5}
                sx={{ width: "90%", color:"#4cae9b"}} // Adjust size of range bar
                marks={[
                  { value: 0, label: "$0" },
                  { value: 100, label: "$100" },
                  { value: 200, label: "$200" },
                  { value: 300, label: "$300" },
                  { value: 400, label: "$400" },
                  { value: 500, label: "$500" },
                ]}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={true}>
            <AccordionSummary
              aria-controls="panel7a-content"
              id="panel7a-header"
            >
              <Typography variant="subtitle1" className="heading">Fixed Price</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ flexDirection: "column" }}>
              <Slider
                value={fixedPrice}
                onChange={handleFixedPriceChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={(value) => `${value}$`}
                min={0}
                max={1000}
                step={10}
                sx={{ width: "90%", color:"#4cae9b"}} // Adjust size of range bar
                marks={[
                  { value: 0, label: "$0" },
                  { value: 250, label: "$250" },
                  { value: 500, label: "$500" },
                  { value: 750, label: "$750" },
                  { value: 1000, label: "$1000+" },
                ]}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={true}>
            <AccordionSummary
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography variant="subtitle1" className="heading">Experience Level</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ flexDirection: "column" }}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="Entry Level"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="Intermediate"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="Expert"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={true}>
            <AccordionSummary
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography variant="subtitle1" className="heading">Job Type</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ flexDirection: "column" }}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="Contract Position"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="Full time"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="Part time"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="Paid fellowship"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="Internship"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="Volunteer"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={true}>
            <AccordionSummary
              aria-controls="panel6a-content"
              id="panel6a-header"
            >
              <Typography variant="subtitle1" className="heading">Skills</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ flexDirection: "column" }}>
              <TextField
                label="Search"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="JavaScript"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="MongoDB"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="React"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} />}
                  label="Node.js"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="right-side">
<div className="utilities">
                  <div className="advanced-search">
                    <Search className="icon"/>
                    <div>29 results found.</div>
                  </div>
                  <div className="change-view">
                    <ViewModule className="icon"/>
                    <div>
                      <button onClick={handleViewChange}>View</button>
                    </div>
                  </div>
          </div>

      

       {
        !toggleView ? 
        <div className="detailed-view">
          <Link to="/jobs/1">
          <JobDetailedCard />
          </Link>
          <Link to="/jobs/1">
          <JobDetailedCard />
          </Link >
          <Link to="/jobs/1">
          <JobDetailedCard />
          </Link>
          <Link to="/jobs/1">
          <JobDetailedCard />
          </Link>
          <Link to="/jobs/1">
          <JobDetailedCard />
          </Link>
          <Link to="/jobs/1">
          <JobDetailedCard />
          </Link>
          <Link to="/jobs/1">
          <JobDetailedCard />
          </Link>
          <Link to="/jobs/1">
          <JobDetailedCard />
          </Link>
          <Link to="/jobs/1">
          <JobDetailedCard />
          </Link>
          <Link to="/jobs/1">
          <JobDetailedCard />
          </Link>
          <Link to="/jobs/1">
          <JobDetailedCard />
          </Link>
          <Link to="/jobs/1">
          <JobDetailedCard />
          </Link>
        </div>
       :
       <div className="summary-view"> 


          {
            jobPosts.map((job, index) => {
              return <Link key={index} to="/jobs/1">
                <JobCard job={job}/>
              </Link>
            })
          }

          {/* <Link to="/jobs/1">
          <JobCard job={job} />
          </Link>
          <Link to="/jobs/2">
          <JobCard job={job} />
          </Link>
          <Link to="/jobs/3">
          <JobCard job={job} />
          </Link>
          <Link to="/jobs/4">
          <JobCard job={job} />
          </Link> */}
          </div>
           }
        </div>
      </div>
    </div>
  );
}

export default Jobs;
