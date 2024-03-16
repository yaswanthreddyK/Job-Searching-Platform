import React from 'react';
import ClientProfile from './ClientProfile';
import TalentProfile from './TalentProfile';
import "./Profile.css";


function Profile() {
      

  return (
    <div>
    { true ? (<ClientProfile />) : (<TalentProfile />)}
    </div>
  )
}

export default Profile