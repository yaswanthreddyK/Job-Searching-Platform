import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ImageCarousel from '../../components/imageCarousel/ImageCarousel'; 
import "./MyProfile.css"

const useStyles = makeStyles({
  root: {
    padding: '16px',
    width: "100%",
    "@media (max-width: 450px)" : {
      padding: 0,
    }
  },
  avatar: {
    width: '80px',
    height: '80px',
  },
  card: {
    marginBottom: '16px',
  },
  aboutMeSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  skillsSection: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '8px',
  },
  skillChip: {
    marginRight: '8px',
  },
  sectionHeader: {
    marginTop: '16px',
  },
});

const Professional = () => {
  const classes = useStyles();

  // Dummy data for the profile
  const profile = {
    name: 'John Doe',
    title: 'Full Stack Developer',
    location: 'New York, USA',
    email: 'john@example.com',
    phone: '+1234567890',
    aboutMe:
      'As a full stack developer, I bring a diverse skill set and a passion for creating robust, user-friendly web applications. With experience in both front-end and back-end development, I excel at translating client requirements into seamless, responsive designs. My expertise spans across a range of technologies including JavaScript frameworks like React.js and Angular, as well as server-side languages like Node.js and Python. I am adept at database management using MongoDB, MySQL, and PostgreSQL, and have experience working with RESTful APIs and GraphQL. I thrive in collaborative environments, where I leverage my problem-solving skills to deliver innovative solutions that meet and exceed client expectations.',
    skills: ['React', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'Stripe', 'Socket.io'],
    portfolioProjects: [
      { title: 'E-commerce Website', description: 'Developed an e-commerce website using MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented user authentication, product listing, shopping cart functionality, and payment integration using Stripe.', images: ['../../../img/ecommerce.jpg'] },
      { title: 'Social Media Platform', description: 'Created a social media platform from scratch using MEAN stack (MongoDB, Express.js, Angular, Node.js). Implemented features such as user registration, profile management, post creation, like/comment functionality, and real-time notifications using Socket.io.', images: ['../../../img/ecommerce.jpg', '../../../img/ecommerce.jpg']  },
    ],
    workExperience: [
      { company: 'Google', position: 'Tech Lead', duration: '2020 - 2021' },
      { company: 'Microsoft', position: 'Senior Software Engineer', duration: '2018 - 2020' },
    ],
  };

  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='professional-view-my-profile'>
      <div>
      <Grid container spacing={2} sx={{backgroundColor: "white"}}>
        <Grid item xs={12} md={4} sx={{borderRight: "1px solid #e5e5e5", minWidth: "200px"}} className='profile-card'>
          <Card className={classes.card}>
            <CardHeader
              avatar={<Avatar alt="Profile Picture" src="../../../img/man.png" className={classes.avatar} />}
              title={profile.name}
              subheader={profile.title}
titleTypographyProps={{ variant: 'h6', sx: { fontSize: '1.2rem' } }} 
                subheaderTypographyProps={{ variant: 'body1', sx: { fontSize: '1rem' } }}
            />
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                <LocationOnIcon fontSize="small" sx={{color: "#4cae9b", marginRight: "0.3em"}} /> {profile.location}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                <EmailIcon fontSize="small" sx={{color: "#4cae9b", marginRight: "0.3em"}}  /> {profile.email}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                <PhoneIcon fontSize="small" sx={{color: "#4cae9b", marginRight: "0.3em"}}  /> {profile.phone}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          {/* About Me section */}
          <div className={classes.aboutMeSection}>
            <Typography variant="h4" gutterBottom className='style-heading' sx={{marginTop: "0.5em"}}>
              About Us
            </Typography>
            <Typography variant="body1" paragraph sx={{paddingRight: "1em"}} className='font-Neue-roman'>
              {profile.aboutMe}
            </Typography>
            
          </div>
          
          {/* Portfolio Projects section */}
          <div>
            <Typography variant="h5"  sx={{margin: "1em 0 0 0"}} className='style-heading'>
              Portfolio Projects
            </Typography>
            {profile.portfolioProjects.map((project, index) => (
              <Card key={index}>
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2"  className='font-Neue-roman'>{project.description}</Typography>
<Button onClick={() => handleOpen(project)} sx={{color: "#4cae91", "&:hover": {backgroundColor: ""} }}>View Images</Button>
                </CardContent>
              </Card>
            ))}
{selectedProject && (
                <ImageCarousel open={open} setOpen={setOpen} onClose={handleClose} images={selectedProject.images} />
              )}
          </div>
          {/* Work Experience section */}
          <div>
            <Typography variant="h5" gutterBottom className='style-heading'>
              Work Experience
            </Typography>
            {profile.workExperience.map((experience, index) => (
              <Card key={index} className={classes.card}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>{experience.position}</Typography>
                  <Typography variant="subtitle1" className='font-Neue-roman'>{experience.company}</Typography>
                    <Typography variant="body2"  className='font-Neue-roman'>{experience.duration}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </Grid>
      </Grid>
</div>
    </div>
  );
};

export default Professional;
