import { faBell, faClockFour, faComment, faFile, faHandshake, faShareFromSquare } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft, faArrowRight, faBars, faBook, faBox, faHamburger, faLock, faMagnifyingGlass, faShieldHalved, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Dropdown from './Dropdown'

const Navbar = ({w,mobile,setMobile}) => {

    return (
        <div className='z-30 flex flex-col gap-10 text-black'>
            <div className={`flex flex-col justify-between p-5 bg-gradient-to-t from-indigo-500 to-cyan-500 h-screen transition-all duration-500 fixed  ${mobile && "mobile"}`}>
                <div>
                    {(w<450) && (<div><button onClick={()=>{setMobile(true)}}><FontAwesomeIcon icon={faArrowLeft} /></button></div>)}
                    <h1 className='flex justify-between mb-5'>refero team<FontAwesomeIcon className='self-center' icon={faBell} /></h1>
                    <div><input className='mr-2 mb-2 p-2 focus:outline-none rounded bg-zinc-300' placeholder='Search' type='text' /> <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button></div>
                    <h1 className='flex gap-2 my-3'><FontAwesomeIcon className='self-center' icon={faClockFour} />Catch up</h1>
                    <h1 className='flex gap-2 my-3 mb-10'><FontAwesomeIcon className='self-center' icon={faComment} />Discussions</h1>
                    <div className='flex flex-col my-5'>
                        <h1 className='font-semibold mb-2' >Favorites</h1>
                        <h1 className='flex justify-start gap-3'><FontAwesomeIcon className='self-center' icon={faHandshake} />Getting started</h1>
                    </div>
                    <div className=' flex-col my-5'>
                        <h1 className='font-semibold mb-2' >My Channel</h1>
                        <Dropdown title="My Private Channel" icon={<FontAwesomeIcon className='self-center mr-2' icon={faLock} />} links={["dummlink1", "dummylink2", "dummylink3"]} />
                        <Dropdown title="Engineering" icon={<FontAwesomeIcon className='self-center mr-2' icon={faBook} />} links={["dummlink1", "dummylink2"]} />
                        <Dropdown title="Products" icon={<FontAwesomeIcon className='self-center mr-2' icon={faBox} />} links={["dummlink1", "dummylink2", "dummylink3", "dummylink4"]} />
                    </div>
                </div>
                <div >
                    <h1 className='flex gap-3 my-2'><FontAwesomeIcon className='self-center' icon={faUserPlus} />Add People</h1>
                    <h1 className='flex gap-3 my-2'><FontAwesomeIcon className='self-center' icon={faFile} />Template</h1>
                    <h1 className='flex gap-3 my-2'><FontAwesomeIcon className='self-center' icon={faShareFromSquare} />Shared with me</h1>
                    <h1 className='flex gap-3 my-2'><FontAwesomeIcon className='self-center' icon={faShieldHalved} />Archieve</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar
