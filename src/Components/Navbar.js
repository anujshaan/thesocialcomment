import React from "react";
import { Pinterest} from "@material-ui/icons";
import { EventAvailable, ExitToApp, Folder, Home, PeopleAlt, Settings } from "@material-ui/icons";
import Assessment from "@material-ui/icons/Assessment";

export default function Navbar(){
    return (
        <div className="nav-component">
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="logo">
                    <a href="/" >
                        <Pinterest />
                    </a>
                </li>
                <li className="home logo">
                    <a href="/" className="nav-link">
                        <Home />
                    </a>
                </li>
                 <li className="equalizer logo">
                    <a href="/" className="nav-link">
                        <Assessment />
                    </a>
                </li>
                 <li className="folder logo">
                    <a href="/" className="nav-link">
                        <Folder />
                    </a>
                </li>
                 <li className="event-available logo">
                    <a href="/" className="nav-link">
                        <EventAvailable />
                    </a>
                </li>
                 <li className="people logo">
                    <a href="/" className="nav-link">
                        <PeopleAlt />
                    </a>
                </li>
                 <li className="logout logo">
                    <a href="/" className="nav-link">
                        <ExitToApp />
                    </a>
                </li>
            </ul>
            <ul className="setting">
                <li className="setting-icon">
                    <a href="/" >
                        <Settings />
                    </a>
                </li>
            </ul>

        </nav>
        </div>
    )
}