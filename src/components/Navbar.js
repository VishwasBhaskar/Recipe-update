import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Sidebar from "./Sidebar"

import { faCog, faHome, faList } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
    const [showSidebar,setShowsidebar] = useState(false)
    const location = useLocation()
    const links = [
        {
            name:"Home",
            path: "/",
            icon: faHome
        },
        {
            name:"Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name:"Settings",
            path: "/settings",
            icon: faCog
        }
    ]

    function closeSidebar(){
        setShowsidebar(false)
    }

    return (
        <>
        <div className = "navbar container">
            <Link to="/" className = "logo">F<span>oo</span>diesHub</Link>
            <div className = "nav-links">
                {links.map(link =>(
                    <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key = {link.name}>{link.name}</Link>
                ))}
                {/* <a href = "#!">Home</a>
                <a href = "#!">Recopies</a>
                <a href = "#!">Settings</a> */}
            </div>
            <div onClick = {() => setShowsidebar(true)} className = {showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                <div className = "bar"></div>
                <div className = "bar"></div>
                <div className = "bar"></div>
            </div>
        </div>
        {showSidebar && <Sidebar close={closeSidebar} links={links} />}
        </>
    )
}