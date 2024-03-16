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
import ProfessionalCard from "../../components/professionalCard/ProfessionalCard";
import { Link } from "react-router-dom";
import "./Professionals.css";

function SearchProfessional() {
  const profiles = [
    {
      name: "John Doe",
      image: "../../../img/man2.jpeg",
      profession: "Full Stack Developer",
      hourlyRate: 25,
      location: "Chennai, India",
      fullTime: true,
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      intro: "I am a passionate and experienced full-stack developer with expertise in JavaScript, React, Node.js, and MongoDB. I have worked on various projects ranging from web applications to mobile app development. My goal is to deliver high-quality solutions that meet the client's requirements and exceed their expectations."
    },
    {
      name: "Jane Smith",
      image: "../../../img/man3.jpeg",
      profession: "UX/UI Designer",
      hourlyRate: 30,
      location: "Bangalore, India",
      fullTime: false,
      skills: ["UI/UX Design", "Adobe XD", "Figma", "Sketch", "Prototyping"],
      intro: "I am a skilled UX/UI designer with a focus on creating user-centered designs. With expertise in tools like Adobe XD, Figma, and Sketch, I have successfully delivered engaging and intuitive designs for various digital products. My aim is to create visually appealing and user-friendly experiences."
    },
    {
      name: "Michael Johnson",
      image: "../../../img/man.png",
      profession: "Data Scientist",
      hourlyRate: 40,
      location: "Delhi, India",
      fullTime: true,
      skills: ["Python", "R", "Machine Learning", "Data Visualization", "Statistics"],
      intro: "I am a data scientist with extensive experience in Python, R, machine learning, and data visualization. My expertise lies in analyzing large datasets, developing predictive models, and deriving actionable insights to drive business decisions. I am passionate about solving complex problems using data-driven approaches."
    },
    {
      name: "Emily Brown",
      image: "../../../img/man4.jpeg",
      profession: "Software Engineer",
      hourlyRate: 35,
      location: "Mumbai, India",
      fullTime: true,
      skills: ["Java", "Spring Boot", "Hibernate", "Microservices", "SQL"],
      intro: "I am a dedicated software engineer with expertise in Java, Spring Boot, Hibernate, and microservices architecture. I have a proven track record of delivering scalable and robust software solutions that meet business requirements. My goal is to leverage my technical skills to develop innovative and efficient software products."
    },
    {
      name: "David Martinez",
      image: "../../../img/man7.jpeg",
      profession: "Digital Marketer",
      hourlyRate: 45,
      location: "Hyderabad, India",
      fullTime: false,
      skills: ["SEO", "SEM", "Social Media Marketing", "Content Marketing", "Google Analytics"],
      intro: "I am a results-driven digital marketer with expertise in SEO, SEM, social media marketing, and content marketing. I have successfully executed digital marketing campaigns that have increased brand awareness and driven organic traffic. My objective is to help businesses achieve their marketing goals through strategic and data-driven approaches."
    },
    {
      name: "Sarah Wilson",
      image: "../../../img/man8.jpeg",
      profession: "Project Manager",
      hourlyRate: 50,
      location: "Pune, India",
      fullTime: true,
      skills: ["Project Management", "Agile Methodology", "Scrum", "Stakeholder Management", "Risk Management"],
      intro: "I am a certified project manager with expertise in Agile methodology, Scrum, and stakeholder management. I have successfully led cross-functional teams to deliver projects on time and within budget. My goal is to drive project success by fostering collaboration, communication, and continuous improvement."
    },
    {
      name: "James Taylor",
      image: "../../../img/man9.jpeg",
      profession: "Frontend Developer",
      hourlyRate: 30,
      location: "Chennai, India",
      fullTime: true,
      skills: ["HTML", "CSS", "JavaScript", "React", "Vue.js"],
      intro: "I am a frontend developer with proficiency in HTML, CSS, JavaScript, React, and Vue.js. I have experience in building responsive and interactive web applications that deliver an exceptional user experience. My passion for frontend development drives me to stay updated with the latest technologies and best practices."
    },
    {
      name: "Jennifer Anderson",
      image: "../../../img/man10.jpeg",
      profession: "Backend Developer",
      hourlyRate: 35,
      location: "Bangalore, India",
      fullTime: true,
      skills: ["Node.js", "Express", "MongoDB", "RESTful APIs", "GraphQL"],
      intro: "I am a backend developer specializing in Node.js, Express, MongoDB, and building RESTful APIs. I have a strong foundation in database design, server-side programming, and scalable architecture. My goal is to develop efficient and reliable backend systems that power seamless user experiences."
    },
    {
      name: "Daniel Lee",
      image: "../../../img/man11.jpeg",
      profession: "Mobile App Developer",
      hourlyRate: 40,
      location: "Delhi, India",
      fullTime: false,
      skills: ["iOS Development", "Android Development", "Swift", "Kotlin", "React Native"],
      intro: "I am a mobile app developer with expertise in iOS, Android, Swift, Kotlin, and React Native. I have developed and published multiple mobile applications with a focus on usability and performance. My passion for mobile app development drives me to create innovative and user-friendly solutions."
    },
    {
      name: "Jessica Davis",
      image: "../../../img/man12.jpeg",
      profession: "Graphic Designer",
      hourlyRate: 35,
      location: "Mumbai, India",
      fullTime: true,
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Typography", "Logo Design", "Brand Identity"],
      intro: "I am a creative graphic designer proficient in Adobe Photoshop, Adobe Illustrator, and typography. I have a keen eye for detail and a passion for visual storytelling. My goal is to create compelling designs that resonate with the target audience and elevate brand identity."
    },
    {
      name: "Robert Thompson",
      image: "../../../img/man13.jpeg",
      profession: "Data Analyst",
      hourlyRate: 40,
      location: "Hyderabad, India",
      fullTime: true,
      skills: ["SQL", "Excel", "Python", "Data Visualization", "Statistical Analysis"],
      intro: "I am a data analyst with expertise in SQL, Excel, Python, and data visualization tools. I have experience in analyzing large datasets, deriving actionable insights, and presenting findings to stakeholders. My goal is to leverage data to drive strategic decision-making and business growth."
    },
    {
      name: "Michelle Garcia",
      image: "../../../img/man14.jpeg",
      profession: "UI Designer",
      hourlyRate: 35,
      location: "Pune, India",
      fullTime: false,
      skills: ["Adobe XD", "Sketch", "UI/UX Design", "Prototyping", "Wireframing"],
      intro: "I am a data analyst with expertise in SQL, Excel, Python, and data visualization tools. I have experience in analyzing large datasets, deriving actionable insights, and presenting findings to stakeholders. My goal is to leverage data to drive strategic decision-making and business growth."
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
    <div className="professional-container">
      <div className="professional-content">
        <div className="left-side">
          <Accordion expanded={true} sx={{backgroundColor: "transparent"}}> 
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
          <Accordion expanded={true} sx={{backgroundColor: "transparent"}}>
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
          <Accordion expanded={true} sx={{backgroundColor: "transparent"}}>
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
          <Accordion expanded={true} sx={{backgroundColor: "transparent"}}>
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

        <div className="flex-professionals">
           {
            profiles.map((profile, index) => {
              return <Link key={index} to="/professionals/1">
                <ProfessionalCard professional={profile}/>
              </Link>
            })
           }
        </div>
         
        </div>
      </div>
    </div>
  );
}

export default SearchProfessional;
