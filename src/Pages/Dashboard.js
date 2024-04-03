import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserLock } from '@fortawesome/free-solid-svg-icons'
import image from '../Assets/dylan-gillis-KdeqA3aTnBY-unsplash.jpg'
import './Pages.css'
import Feature from '../Components/Feature'
import { faFile } from '@fortawesome/free-regular-svg-icons'

const Dashboard = () => {

  const [mobile, setMobile] = useState(false)
  var w = window.innerWidth

  return (
    <div className='flex p-2 pl-0 pt-0'>
      <Navbar w={w} mobile={mobile} setMobile={setMobile} />
      <div className='flex flex-col' style={{ margin: `2% 0 0 ${!(w < 450) ? "18%" : "3%"}` }}>
        {(w < 450) && (<div className=''><button onClick={() => setMobile(false)}><FontAwesomeIcon icon={faBars} /></button></div>)}
        <div className='flex flex-col gap-5'>
          <h1 className={`${mobile ? "text-4xl" : "text-6xl"}`}>GETTING STARTED</h1>
          <div className='sub-header flex gap-4' style={{ borderRadius: "10px", padding: "2%", marginRight: "60%", backgroundColor: "rgba(218,216,216,0.05)" }}><FontAwesomeIcon icon={faUserLock} />
            <p>This doc is in your private channel, where you can store your private work. You can share docs one by one from here, but to properly organize your team's knowledge base, use workspace channels.
              You can make channels public to make all docs visible to everyone on the team, or private if you want the channel's docs to only be visible by a selection of teammates.
            </p>
          </div>
        </div>
        <h1 className={`my-6 ${mobile ? "text-4xl" : "text-5xl"}`}>Collaborate With your teams with these 3 features</h1>
        <Feature w={w} heading={"Docs"} headingImg={<FontAwesomeIcon  icon={faFile} />} image={image} text={"Create docs to collaborate with your team. Type / to discover Slite's editor tools and bring your docs to life."} />
      </div>
    </div>
  )
}

export default Dashboard
