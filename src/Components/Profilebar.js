import React from "react";
import {NotificationsNone} from "@material-ui/icons"
import profile from "./profile.jpg"

export default function Profilebar(){
    return(
        <div className="profile-bar-img">
                <NotificationsNone />
                <p>John Bayer</p>
                <img src={profile} alt="" />
        </div>
    )
}