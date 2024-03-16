import "./Job.css";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useEffect, useState } from "react";
import ProposalForm from "../../components/proposalForm/ProposalForm";
import { useLocation } from "react-router-dom";


function Job() {
    const [openApplication, setOpenApplication] = useState(false)
    const pathname = useLocation()

    const handleApply = () => {
        setOpenApplication(true)
    }

    useEffect(()=>{
        document.getElementsByClassName("proposal-container")[0]?.scrollIntoView();
    },[openApplication])

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[pathname])
  return (
    <>
    <div className="job-detail-container">
        <div className="job-width">
            <div className="job-positioning">
               <div className="top">
                    <div className="top-positioning">
                        <div className="top-left">
                            <div className="company-img">
                                <img src="../../../img/airbnb.png" alt="" />
                            </div>
                            <div className="company-details">
                                <h2 className="bold">Product Designer</h2>
                                <p className="light">AirBnb</p>
                            </div>
                        </div>
                        <div className="top-right medium">19 June 2020</div>
                    </div>
                    <div className="top-button">
                        <button onClick={handleApply}>APPLY TO THIS JOB</button>
                    </div>
               </div>
               <div className="middle">
                <div className="job-type">
                    
                    <div>
                        <div>
                           <MonetizationOnIcon sx={{color: "#4cae9b"}}/>
                        </div>
                        <div className="medium-black">
                            $ 50k - 75k
                        </div>
                    </div>

                    <div>
                        <div>
                           <WorkIcon sx={{color: "#4cae9b"}}/>
                        </div>
                        <div className="medium-black">
                           Full Time
                        </div>
                    </div>

                    <div>
                        <div>
                           <LocationOnIcon sx={{color: "#4cae9b"}}/>
                        </div>
                        <div className="job-location medium">
                        777 Brockton Avenue, Abington MA 2351
                        </div>
                    </div>

                </div>
                <div className="job-details">
                    <div>
                        <div className="career-level medium">
                            Career Level
                        </div>
                        <div className="career-level-value bold">
                        Project Manangement                 
                        </div>
                    </div>
                    <div>
                        <div className="corportaion-type medium">
                        Type of corporation
                        </div>
                        <div className="corporation-type-value bold">
                        B2B & B2C
                        </div>
                    </div>
                    <div>
                        <div className="company-size medium">
                        Company size

                        </div>
                        <div className="company-size-value bold">
                        11-50 employees

                        </div>
                    </div>

                    
                </div>
                <div className="skills-required">
                        <div>
                            <div className="medium">
                                Soft Skills
                            </div>
                            <ul className="light">
                                <li>Slack</li>
                                <li>Basic English</li>
                                <li>Well Organised</li>
                            </ul>
                        </div>

                        <div>
                            <div className="medium">
                                Technical Skil
                            </div>
                            <div className="light">
                                <div>Editing</div>
                                <div>User Persona</div>
                                <div>Wireframing</div>
                            </div>
                        </div>
                </div>
               </div>
               <div className="bottom">
                <h3 className=" medium">Job Description</h3>
                <p className="job-description light">
                Gubagoo is a fast growing provider of messaging and commerce solutions for automotive dealers changing the future of how people find, buy and service their vehicles.
                </p>
                <h3 className="medium-black">Role</h3>
                <p className="role light">
                We’re looking for a passionate individual to design beautiful and functional products for our customers at Gubagoo. We move very fast and you will be expected to contribute to a cross-functional product development squad, that includes product managers and developers, to deliver the UX and UI for the team to bring to life.

                We are serious about remote work. You can work for from anywhere.
                </p>
                <h3 className="medium-black">What you will be doing</h3>
                <ul className="what-you-will-be-doing light">
                    <li>Contribute new controls or design improvements to our</li>
                    <li>Take ownership of the successful delivery of features</li>
                    <li>Help set and achieve quarterly goals</li>
                    <li>Ship a TON of product improvements and features</li>
                </ul>

                <div className="bottom-button">
                        <button onClick={handleApply}>APPLY TO THIS JOB</button>
                    </div>
               </div>
            </div>
    
    
    </div>
    </div>
    {  openApplication && 
    <div className="proposal-container">
        <div>
            <div className="proposal-positioning">
                <h3 className="bold">Proposal Form</h3>
            <ProposalForm />
            </div>
        </div>
    </div>

}
    </>

  )
}

export default Job