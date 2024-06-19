import React from "react"
import bell from "../../../src/assets/admin/bell (2).svg"
import profile from "../../../src/assets/notifications/sample_profile.svg"
import { Badge, Button } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"

function UserProfile(){
    const navigate = useNavigate();
    const NavigateNotifications = () => {
        navigate('/notifications');
    }

    return (
        <>
        <div className="justify-end flex ml-auto mr-12 -mt-12 gap-4 w-1/4">
      
            <Badge shape="circle" placement="bottom-right">
                <Button
                    radius="full"
                    isIconOnly
                    variant="solid"
                    className="bg-transparent"
                    onClick={NavigateNotifications}
                >
                    <img src={bell} className="w-10 drop-shadow" alt="Bell Icon" />
                </Button>
            </Badge>
            
            <Badge shape="circle" placement="bottom-right">
                <Button
                    radius="full"
                    isIconOnly
                    aria-label="notification"
                    variant="light"
                    className="bg-transparent"
                >
                    <img src={profile} className="w-14 drop-shadow" alt="Profile Icon" />
                </Button>
            </Badge>
            
        </div>
        </>
    )
}

export default UserProfile;
