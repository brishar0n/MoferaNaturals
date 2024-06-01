function DesktopNavbar() {
    return (
        <div className="w-1/6 h-screen bg-primary">
            <div className="flex justify-center gap-6 pr-7 pt-6">
                <img src="src/assets/desktop/menu.svg" alt="" className="w-9"/>
                <img src="src/assets/desktop/mofera.svg" alt="" className="pt-3.5 w-42" />
            </div>

            <br/>
            <br/>
            <div className="flex justify-center gap-4 pr-16 items-center">
                <img src="src/assets/desktop/dashboard-logo.svg" alt="" className="w-9"/>
                <p className="font-bold text-white text-2xl">Dashboard</p>
            </div>

            <br />
            <br />

            <div className="flex justify-center items-center gap-2 pr-11">
                <img src="src/assets/desktop/user-icon.svg" alt="" className="w-14"/>
                <div className="flex flex-col items-start">
                    <p className="font-bold text-white text-2xl">User</p>
                    <p className="font-bold text-white text-2xl">Management</p>
                </div>
            </div>

            <br />
            <br />

            <div className="flex items-center justify-center gap-2 pr-11">
                <img src="src/assets/desktop/database.svg" alt="" className="w-12"/>
                <div className="flex flex-col items-start">
                    <p className="font-bold text-white text-2xl">Data</p>
                    <p className="font-bold text-white text-2xl">Management</p>
                </div>
            </div>
            
            <br></br>
            <div className="flex flex-col text-lg font-medium text-white text-start pl-7">
                <p className="pb-5"> Centra Data </p>
                
                <p className="pb-5"> Wet Leaves Data </p>

                <p className="pb-5"> Flour Data </p>

                <div className="flex flex-col">
                    <p> Shipping Information </p>
                    <p className="pb-5"> Data </p>
                </div>
                
                <p> Checkpoint Data </p>
            </div>

            <div className="flex justify-center">
                <img src="src/assets/desktop/underline.svg" alt="" className="w-5/6"/>
            </div>

            <div className="flex items-start pt-3 pl-5">
                <img src="src/assets/desktop/exit.svg" alt="" className="w-12"/>
            </div>
        </div>
    )
}


export default DesktopNavbar
