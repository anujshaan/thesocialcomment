import React from "react";
import currDate from "./GetDate";
export default function Header(){
    return(
        <span className="main-header">
        <div>
            <p>Dashboard</p>
            <span>{currDate.day+", "}</span>
            <span className="fulldate">{currDate.dayDigit+" "+currDate.month+" "+currDate.year}</span>
        </div>
        <div>
            <button>+ Add</button>
            <span className="searchBar">
                <i className="fas fa-search"></i>
                <input className="input-field" type="text" placeholder="search for Application here" />
            </span>
        </div>
        </span>
    )
}