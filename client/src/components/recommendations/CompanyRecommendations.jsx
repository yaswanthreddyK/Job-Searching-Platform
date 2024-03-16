import { Link } from 'react-router-dom'
import React from 'react'
import CompanyCard from "../companyCard/CompanyCard"

function CompanyRecommendations() {
    const companies = [
        {
          name: "Google",
          location: 'Chennai, India',
          image: "../../../img/company4.png",
          tags: ["Carbon Emission", "Agriculture"]
        },
        {
          name: "Microsoft",
          location: 'Mumbai, India',
          image: "../../../img/company15.jpeg",
          tags: ["Healthcare", "Education"]
        },
        {
          name: "Apple",
          location: 'Bangalore, India',
          image: "../../../img/company14.png",
          tags: ["Technology", "Innovation"]
        },
        {
          name: "Amazon",
          location: 'Hyderabad, India',
          image: "../../../img/company13.jpeg",
          tags: ["E-commerce", "Cloud Computing"]
        },
        {
          name: "Facebook",
          location: 'Delhi, India',
          image: "../../../img/company12.png",
          tags: ["Social Media", "Digital Advertising"]
        },
        {
          name: "Tesla",
          location: 'Pune, India',
          image: "../../../img/company11.png",
          tags: ["Electric Vehicles", "Renewable Energy"]
        },
        {
          name: "SpaceX",
          location: 'Kolkata, India',
          image: "../../../img/company10.png",
          tags: ["Space Exploration", "Rocket Technology"]
        },
        {
          name: "Netflix",
          location: 'Jaipur, India',
          image: "../../../img/company9.png",
          tags: ["Entertainment", "Streaming Services"]
        },
        {
          name: "Uber",
          location: 'Chandigarh, India',
          image: "../../../img/company8.png",
          tags: ["Transportation", "Ride-sharing"]
        },
        {
          name: "Adobe",
          location: 'Ahmedabad, India',
          image: "../../../img/company7.jpeg",
          tags: ["Creative Software", "Design Tools"]
        },
        {
          name: "Intel",
          location: 'Lucknow, India',
          image: "../../../img/company6.png",
          tags: ["Semiconductors", "Computer Processors"]
        },
        {
          name: "IBM",
          location: 'Nagpur, India',
          image: "../../../img/company5.png",
          tags: ["Information Technology", "Consulting Services"]
        },
        {
          name: "Samsung",
          location: 'Patna, India',
          image: "../../../img/company3.jpeg",
          tags: ["Electronics", "Consumer Appliances"]
        },
        {
          name: "Twitter",
          location: 'Surat, India',
          image: "../../../img/company2.png",
          tags: ["Social Networking", "Microblogging"]
        },
        {
          name: "LinkedIn",
          location: 'Visakhapatnam, India',
          image: "../../../img/company1.png",
          tags: ["Professional Networking", "Job Search"]
        }
      ];
  return (
    <div className='company-recommendation-container'>
           {
            companies.map((company, index) => {
                  return <Link key={index} to="/companies/1">
                    <CompanyCard {...company}/>
                  </Link>
            })
           }
    </div>
  )
}

export default CompanyRecommendations