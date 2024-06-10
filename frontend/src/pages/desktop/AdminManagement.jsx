import React, { useState } from "react";
import "../../style/AdminDesktop.css"
// import DesktopNavbar from "../../components/admin/DesktopNavbar";
import AdminTable from "../../components/admin/AdminTable";
import AddUserButton from "../../components/admin/AddUserButton";
import { initialRows, columns} from "../../components/admin/UserDataSample";
import AdminSidebar from "../../components/admin/AdminSidebar";
// import PageTitle from "../../components/admin/PageTitle";
// import PageTitleDashboard from "../../components/admin/PageTitleDashboard";
// import PageTitleDataMaster from "../../components/admin/PageTitleDataMaster";
// import SearchButton from "../../components/admin/SearchButton";
import SearchButtonData from "../../components/admin/SearchButtonData";
import MasterDataFolder from "../../components/admin/MasterDataFolder";
import PageTitleAll from "../../components/admin/PageTitleAll";
import UserProfile from "../../components/admin/UserProfile";
import DashboardContent from "../../components/admin/DashboardContent";
// import AdminTables from "../../components/admin/AdminTable";
// import Table from "../../components/admin/Table";

function AdminPage() {
    const [rows, setRows] = useState(initialRows);
    // const [columns, setColumns] = useState(columnsOG)

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

    const [isMinimized, setIsMinimized] = useState(false);

    const toggleMenu = () => {
        setIsMinimized(!isMinimized);
    };

    const [pageData, setPageData] = useState({
        title: 'Manage Users',
        description: 'Arrange username and data collections of ID'
    });
    
    const [currentComponent, setCurrentComponent] = useState('AdminTable');

    const handlePageDataChange = (title, description, componentKey) => {
        setPageData({ title, description });
        setCurrentComponent(componentKey);
        // setRows(rows)
        // setColumns(columns)
    };
    
    const renderComponent = () => {
        switch (currentComponent) {
            case 'AdminTable':
                return <AdminTable rows={rows} setRows={setRows} deleteRow={deleteRow} editRow={handleEditUser} />;
            case 'MasterDataFolder':
                return <MasterDataFolder />;
            case 'Dashboard':
                return <DashboardContent/>
            default:
                return <AdminTable rows={rows} setRows={setRows} deleteRow={deleteRow} editRow={handleEditUser} />;
        }
    };
    return (
        <div className="flex justify-start items-center bg-primary h-screen w-screen">
            <AdminSidebar isMinimized={isMinimized} toggleMenu={toggleMenu} onPageDataChange={handlePageDataChange}/>
            <div className={`bg-white h-97vh rounded-3xl transition-all duration-300 ${isMinimized ? 'w-19/20' : 'w-41/50'}`}>
                <PageTitleAll title={pageData.title} description={pageData.description}/>
                <UserProfile/>
                <SearchButtonData/>
                <div className={`flex justify-start pt-10 items-center gap-8 ${pageData.title !== 'Data Master' && pageData.title !== 'Dashboard' ? 'pl-0' : 'pl-12'}`}>
                    
                    {/* <MasterDataFolder/> */}

                    {/* <AdminTable rows={rows} setRows={setRows} deleteRow={deleteRow} editRow={handleEditUser}/>  */}
                    {renderComponent()}
                </div>

            </div>
        </div>
    )
}

export default AdminPage;
