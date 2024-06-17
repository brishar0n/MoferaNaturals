import React from "react"
import bell from "../../../src/assets/admin/bell (2).svg"
import profile from "../../../src/assets/notifications/sample_profile.svg"




function UserProfile(){
    return (
        <>
        <div className="justify-end flex ml-auto mr-12 -mt-12 gap-4 w-1/4">
            <img src={bell} className="w-10 drop-shadow" alt="Bell Icon" />
            <img src={profile} className="w-12 drop-shadow" alt="Profile Icon" />
        </div>
        </>
    )
}

export default UserProfile;