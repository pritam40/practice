import React from 'react'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
        <div className="logo">
                   <FastfoodIcon className="icon"/><h3>Let's Party</h3>
        </div>
        <div className="list">
            <ol>
              <li><a>About</a></li>
              <li><a>Services</a></li>
              <li><a>Contact</a></li>
            </ol>
        </div>

        </div>
    )
}

export default Header
