import React from "react";

function Header({profileImg, username}) {
    return (
        <div>
            <img src={profileImg} alt="" />
            <h1>{username}</h1>
        </div>
    )
}

export default Header;