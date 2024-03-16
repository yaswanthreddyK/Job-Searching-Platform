import React from 'react'
import Footer from '../../components/footer/Footer'
import "./Home.css"
import SearchBar from '../../components/searchBar/SearchBar'
function Home() {
  return (
    <main>
      <div className='home-1'>
      <div className='hero'>
        <div className='hero-content'>
          <h2 className='green'>Engage at ease with Sustainability and Climate Tech Professionals and Companies </h2>
          <h2>Search For Projects that need your skills to accomplish the goals.</h2>
          <button>Get Started</button>
        </div>
      </div>
      <div className='search'>
        <div className='search-div'>
       <SearchBar placeholder={"Type Job title, keywords"}/>
        </div>
      </div>
      </div>

      <div className='home-2'>
        <div className='left-img-div'>
        <picture>
             <source media="(min-width:1045px)" srcSet="../../../img/riverNtrees.jpg" />
             <source media="(max-width:1045px)" srcSet="../../../img/riverNtrees-wide.jpg" />
             <img src="../../../img/riverNtrees.jpg" alt="Flowers"  />
        </picture>
        </div>

        <div className='right-content'>
            <h2>For Sustainability Professionals</h2>

            <div className='sub-content-1'>
              <div className='sub-content-icon-div'>
                <img src="../../../img/grid.png"  alt="" />
              </div>
              <div className='sub-sub-content'>
                <p> Showcase your valuable skills and receive gig/job requirements direct to your inbox</p>
              </div>
            </div>
            <div className='sub-content-2'>
              <div className='sub-content-icon-div'>
                <img src="../../../img/search-gold.png"  alt="" />
              </div>
              <div className='sub-sub-content'>
                <p> Improve your ratings with every project completion. Request variable rates based on location, project complexity and duration</p>
              </div>
            </div>
            <div className='sub-content-3'>
              <div className='sub-content-icon-div'>
                <img src="../../../img/building.png"  alt="" />
              </div>
              <div className='sub-sub-content'>
                <p>Client Hirer will contact you directly based on your skills, availability</p>
              </div>
            </div>

        </div>
      </div>

      <div className='home-3'>
        <div className='people-grid'>
          <img src="../../../img/adults.jpg" loading="lazy" alt="" />
        </div>
        <div className='professional-content-home'>
          
          <h2>Green Gig Hiring Made Easy</h2>
          <p>Connecting hiring teams with skilled sustainability professionals globally real time and fit for project hiring.</p>
          <p>Search and Book Sustainability Skilled Professionals Based on Project Requirements</p>
          <button>POST A JOB</button>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Home