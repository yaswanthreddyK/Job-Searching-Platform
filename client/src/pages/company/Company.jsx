import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./Company.css";
import CompanyRecommendations from "../../components/recommendations/CompanyRecommendations";

function Company() {
    // You can set up state and useEffect as needed
const pathname = useLocation
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[pathname])

    return (
        <>
            <div className="company-profile-container">
                <div className="company-profile-width">
                    <div className="company-profile-details">
                        <div className="company-profile-img">
                            <img src="../../../img/airbnb.png" alt="" />
                        </div>
                        <div className="company-profile-info">
                            <h2 className="bold">AirBnb</h2>
                            <p className="company-profile-description light">Lorem ij eiwoj ewj eir jej eiwrj oeiw joiewfj iew jieow jfiewj fijew fjew fjew ewi jeif ewf ewf fjkewf kehf iewf ierf iuerw ifew  sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="company-profile-description-section">
                        <h3 className="medium">About Us</h3>
                        <p className="company-profile-description-text light">
                            Lorem ipsum, dolor sit amet consectetur adipi   sicing elit. Rem temporibus error minima rerum dolorum laudantium deserunt eius, maxime quam, voluptatum commodi delectus ad laboriosam dolor cumque illum dignissimos reprehenderit repellendus inventore, in culpa eos nobis? Quos expedita tempore quae veritatis rerum! Sit aliquam, exercitationem excepturi amet maxime magnam id fugiat consequuntur asperiores officia facilis praesentium rerum quasi nemo hic dolorem architecto nostrum alias temporibus minus atque dicta voluptatem dolore ab. Nulla, odit non modi saepe sunt consectetur nihil at dolor necessitatibus rerum quibusdam pariatur et libero inventore sed consequatur natus molestias veniam eveniet! Optio earum aliquam, accusamus veritatis harum at.
                        </p>
                    </div>
                    <div className="company-profile-locations-section">
                        <h3 className="medium">Locations</h3>
                        <ul className="company-profile-locations-list light">
                            <li>Headquarters: 123 Main Street, San Francisco, CA</li>
                            <li>New York Office: 456 Broadway, New York, NY</li>
                            <li>London Office: 789 Oxford Street, London, UK</li>
                        </ul>
                    </div>
                   
                </div>
                <div className="company-recommendations">
                    <h3>Similar companies</h3>
                    <CompanyRecommendations />
                </div>
            </div>
        </>
    );
}

export default Company;
