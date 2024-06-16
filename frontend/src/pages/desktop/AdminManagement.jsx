import React, { useEffect, useState } from "react";
import "../../style/AdminDesktop.css"
import AdminTable from "../../components/admin/AdminTable";
import AdminTableUser from "../../components/admin/AdminTableUser";
import AddUserButton from "../../components/admin/AddUserButton";
import { columns, columnsCentra, columnsCheckpoint, columnsCollection, columnsDry, columnsFlour, columnsPackage, columnsShipping, columnsWet} from "../../components/admin/UserDataSample";
import AdminSidebar from "../../components/admin/AdminSidebar";
import SearchButtonData from "../../components/admin/SearchButtonData";
import MasterDataFolder from "../../components/admin/MasterDataFolder";
import PageTitleAll from "../../components/admin/PageTitleAll";
import UserProfile from "../../components/admin/UserProfile";
import DashboardContent from "../../components/admin/DashboardContent";
import {getUsers, getCentra, getCheckpoints, getDryLeaves, getFlour, getPackages, getShippingInfo, getWetLeaves, updateUser, deleteUser, deleteCentra, deleteCheckpoint, deleteDryLeaves, deleteFlour, deletePackage, deleteShippingInfo, deleteWetLeaves} from "../../../api/adminAPI";

const columnsMap = {
    AdminTable: columns,
    CentraData: columnsCentra,
    CheckpointData: columnsCheckpoint,
    CollectionData: columnsCollection,
    DryLeavesData: columnsDry,
    FlourData: columnsFlour,
    PackageData: columnsPackage,
    ShippingInfoData: columnsShipping,
    WetLeavesData: columnsWet,
};

function AdminPage() {
    const [rows, setRows] = useState([]);
    const [columnData, setColumnData] = useState(columnsMap.AdminTable);
    
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

    const handleEditUser = async (updatedUser) => {
        try {
            delete updatedUser.hashed_password
            delete updatedUser.is_active
            await updateUser(updatedUser);
            console.log("Updated user:", updatedUser);
            setRows((prevUsers) =>
                prevUsers.map((row) =>
                    row.id === updatedUser.id ? updatedUser : row
                )
            );
        } catch (error) {
            console.error("Failed to update user:", error);
        }
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

    const handlePageDataChange = (title, description, componentKey, rows, columnData) => {
        setPageData({ title, description });
        setCurrentComponent(componentKey);
        setRows(rows)
        setColumnData(columnData)
    };

    const deleteRow = async (id) => {
        try {
            switch (currentComponent) {
                case 'AdminTable':
                    await deleteUser(id);
                    setRows(prevRows => prevRows.filter(row => row.id !== id));
                    break;
                case 'CentraData':
                    try{
                    await deleteCentra(id);
                    console.log("Deleted Centra with id:", id);
                    setRows(prevRows => prevRows.filter(row => row.id !== id));
                    }catch(error){
                        console.error("Failed to delete user:", error);
                    }
                    break;
                case 'CheckpointData':
                    await deleteCheckpoint(id);
                    console.log("Deleted Checkpoint with id:", id);
                    setRows(prevRows => prevRows.filter(row => row.id !== id));
                    break;
                case 'WetLeavesData':
                    await deleteWetLeaves(id);
                    console.log("Deleted Wet Leaves with id:", id);
                    setRows(prevRows => prevRows.filter(row => row.id !== id));
                    break;
                case 'DryLeavesData':
                    await deleteDryLeaves(id);
                    console.log("Deleted Dry Leaves with id:", id);
                    setRows(prevRows => prevRows.filter(row => row.id !== id));
                    break;
                case 'FlourData':
                    await deleteFlour(id);
                    console.log("Deleted Flour with id:", id);
                    setRows(prevRows => prevRows.filter(row => row.id !== id));
                    break;
                case 'ShippingInfoData':
                    await deleteShippingInfo(id);
                    console.log("Deleted Shipping Info with id:", id);
                    setRows(prevRows => prevRows.filter(row => row.id !== id));
                    break;
                case 'PackageData':
                    await deletePackage(id);
                    console.log("Deleted Package with id:", id);
                    setRows(prevRows => prevRows.filter(row => row.id !== id));
                    break;
                default:
                    break;
            }

        } catch (error) {
            console.error("Failed to delete user:", error);
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            let data = [];
            switch (currentComponent) {
                case 'AdminTable':
                    data = await getUsers();
                    break;
                case 'CentraData':
                    data = await getCentra();
                    break;
                case 'CheckpointData':
                    data = await getCheckpoints();
                    break;
                case 'WetLeavesData':
                    data = await getWetLeaves();
                    break;
                case 'DryLeavesData':
                    data = await getDryLeaves();
                    break;
                case 'FlourData':
                    data = await getFlour();
                    break;
                case 'ShippingInfoData':
                    data = await getShippingInfo();
                    break;
                case 'PackageData':
                    data = await getPackages();
                    break;
                default:
                    data = await getUsers();
                    break;
            }
            setRows(data.data);
            setColumnData(columnsMap[currentComponent]); // Update columns if needed
        };
        fetchData();
    }, [currentComponent]);
    
    const renderComponent = () => {
        switch (currentComponent) {
            case 'AdminTable':
                return <AdminTableUser columns={columnData} rows={rows} deleteRow={deleteRow} editRow={handleEditUser} />;
            case 'MasterDataFolder':
                return <MasterDataFolder />;
            case 'Dashboard':
                return <DashboardContent/>
            case 'CentraData':
                return <AdminTable columns={columnData} rows={rows} deleteRow={deleteRow} editRow={handleEditUser} />;
            case 'WetLeavesData':
                return <AdminTable columns={columnData} rows={rows} deleteRow={deleteRow} editRow={handleEditUser} />;
            case 'DryLeavesData':
                return <AdminTable columns={columnData} rows={rows} deleteRow={deleteRow} editRow={handleEditUser} />;
            case 'FlourData':
                return <AdminTable columns={columnData} rows={rows} deleteRow={deleteRow} editRow={handleEditUser} />;
            case 'ShippingInfoData':
                return <AdminTable columns={columnData} rows={rows} deleteRow={deleteRow} editRow={handleEditUser} />;
            case 'CheckpointData':
                return <AdminTable columns={columnData} rows={rows} deleteRow={deleteRow} editRow={handleEditUser} />;
            case 'PackageData':
                return <AdminTable columns={columnData} rows={rows} deleteRow={deleteRow} editRow={handleEditUser} />;
            default:
                return <AdminTable columns={columnData} rows={rows} deleteRow={deleteRow} editRow={handleEditUser} />;
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