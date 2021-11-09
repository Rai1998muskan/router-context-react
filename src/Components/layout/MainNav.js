import React from 'react'
import { Link } from 'react-router-dom';
import classes from './MainNav.module.css'

export const MainNav = () => {
    return (
       <header className={classes.header}>
       <div className={classes.logo}>React meetups</div>
       <nav>
       <ul>
        <li><Link to='/all'>All</Link></li>
        <li><Link to='/fav'>Fav</Link></li>
        <li><Link to='/new'>New</Link></li>
        </ul>
       </nav>
       </header>
    )
}
