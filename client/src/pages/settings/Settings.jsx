import React from 'react'
import ClientSettings from "./ClientSettings"
import TalentSettings from './TalentSettings'
import "./Settings.css"

function Settings() {
  return (
    <div>
      {false ? <ClientSettings /> : <TalentSettings />}
    </div>
  )
}

export default Settings