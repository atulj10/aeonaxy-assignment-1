import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './Navbar.css'

const Dropdown = ({ title, icon, links }) => {
    const [active, setActive] = useState(false)

    return (
        <div className='z-0 flex flex-col hover:cursor-pointer'>
            <button className={` p-2 rounded`} onClick={() => { setActive(prev => !prev) }}><h1 className='flex'>{(active) ? <FontAwesomeIcon className='self-center mr-3' icon={faAngleUp} /> : <FontAwesomeIcon className='self-center mr-3' icon={faAngleDown} />}{icon} {title}</h1></button>
            <div className={`self-center ${active ? "active" : "non-active"}`}>
                {links.map((i) => (
                    <h1 className='dropdown hover:cursor-pointer rounded py-1 pl-2 pr-10'>{i}</h1>
                ))}
            </div>
        </div>
    )
}

export default Dropdown
