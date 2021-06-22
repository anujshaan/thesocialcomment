import React from "react";
import Header from "./Header"
import Profilebar from "./Profilebar";
import Navbar from "./Navbar";
import Firstbox from "./Firstbox";

export default function Mainpage(){
    return(
        <div className="main-page">
            <Navbar />
            <Profilebar />
            
            <Header />
            <Firstbox />
      </div>
    )
}