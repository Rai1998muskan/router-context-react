import React from 'react'
import classes from './layout.module.css'
import { MainNav } from './MainNav'

export const Layout = (props) => {
    return (
        <div>
            <MainNav/>
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    )
}
