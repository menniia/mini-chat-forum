import React from "react";
import Header from "./header";
import Body from "./body";


function Card({commentObject}) {
    const {profileImg, username, comment } = commentObject;
    return (
        <div>
            <Header profileImg={profileImg} username={username} />
            <Body comment={comment} />
        </div>
    )
}

export default Card;