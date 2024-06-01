import React, { useState } from "react";
import "../../style/AdminDesktop.css"
import DesktopNavbar from "../../components/admin/DesktopNavbar";
import AdminTable from "../../components/admin/AdminTable";
import AddUserButton from "../../components/admin/AddUserButton";
import { initialRows, columns } from "../../components/admin/UserDataSample";


function AdminPage() {
    const [rows, setRows] = useState(initialRows);


    const addUser = (newUser) => {
        console.log("Adding new user:", newUser);
        setRows((prevRows) => [
            ...prevRows,
            {
                key: String(prevRows.length + 1),
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
            }
        ]);
    };

    const handleEditUser = (updatedUser) => {
        setRows((prevUsers) =>
          prevUsers.map((row) =>
            row.id === updatedUser.id ? updatedUser : row
          )
        );
      };
       
    const deleteRow = (id) => {
        setRows(prevRows => prevRows.filter(row => row.id !== id));
    };

    

    return (
        <div className="flex justify-end pr-4 items-center bg-primary h-screen w-screen">
            <DesktopNavbar/>
            <div className="bg-white w-5/6 h-97vh rounded-3xl">
                <div className="justify-end flex pr-20 pt-10 gap-4">
                    <img src="src/assets/admin/bell (2).svg" className="w-10 drop-shadow" alt="Bell Icon" />
                    <img src="src/assets/notifications/sample_profile.svg" className="w-12 drop-shadow" alt="Profile Icon" />
                </div>

                <div className="flex justify-start pl-36">
                    <p className="text-5xl text font-bold"> Manage Users</p> 
                </div>

                <div className="flex justify-start pl-36 pt-1">
                    <p className="text-xl text font-medium"> Arrange username and data collections of ID</p> 
                </div>

                <div className="flex justify-start pl-36 pt-16 items-center gap-8">
                    <div className="flex bg-quinary h-12 w-1/2 rounded-full justify-end pr-6 drop-shadow-md">
                        <input type="text" className="w-full bg-quinary rounded-full pl-4"/>
                        <img src="src/assets/admin/searchbutton.svg" className="w-7" alt="Search Button" />
                    </div>  

                    <AddUserButton onAddUser={addUser} />
                </div>
                <AdminTable rows={rows} setRows={setRows} deleteRow={deleteRow} editRow={handleEditUser}/>
            </div>
        </div>
    )
}

export default AdminPage;
