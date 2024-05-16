import { useState, useEffect } from "react";
import "../../style/AdminDesktop.css"
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react";
import DesktopNavbar from "../../components/admin/DesktopNavbar";

function AdminPage() {
    return (
        <div className="flex justify-end pr-4 items-center bg-primary h-screen w-screen">
            <DesktopNavbar/>
            <div className="bg-white w-5/6 h-97vh rounded-3xl">
                <div className="justify-end flex pr-20 pt-10 gap-4">
                    <img src="src/assets/admin/bell (2).svg" className="w-10"></img>
                    <img src="src/assets/notifications/sample_profile.svg" className="w-12"></img>
                </div>

                <div className="flex justify-start pl-36">
                    <p className="text-5xl text font-bold"> Manage Users</p> 
                </div>
               

                <div className="flex justify-start pl-36 pt-1">
                    <p className="text-xl text font-medium"> Arrange username and data collections of ID</p> 
                </div>

                <div className="flex justify-start pl-36 pt-16 items-center gap-10">
                    <div className="flex bg-quinary h-12 w-1/2 rounded-full justify-end pr-6">
                        <input type="text" className="w-full bg-quinary rounded-full pl-4"/>
                        <img src="src/assets/admin/searchbutton.svg" className="w-7"></img>
                    </div>  

                    <div className="flex bg-quinary h-10 w-32 rounded-xl items-center justify-center gap-1.5">
                        <img src="src/assets/admin/black_plus.svg" className="w-5"></img>
                        <p className="text-base font-bold"> Add User</p>
                    </div>
                </div>

                <div className="flex flex-col w-5/6 pl-36 pt-6 items-center gap-6"> 
                    <Table aria-label="Example static collection table">
                        <TableHeader>
                            <TableColumn>ID</TableColumn>
                            <TableColumn>Username</TableColumn>
                            <TableColumn>Email</TableColumn>
                            <TableColumn>Role</TableColumn>
                        </TableHeader>
                        <TableBody>
                        <TableRow key="1">
                                <TableCell className="text-start">1</TableCell>
                                <TableCell className="text-start">Dave Johns</TableCell>
                                <TableCell className="text-start">dave.johns@gmail.com</TableCell>
                                <TableCell className="text-start">Centra</TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell className="text-start">2</TableCell>
                                <TableCell className="text-start">Tony Reichert</TableCell>
                                <TableCell className="text-start">tony.reichert@gmail.com</TableCell>
                                <TableCell className="text-start">Guard Harbour</TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell className="text-start">3</TableCell>
                                <TableCell className="text-start">Lara Freeman</TableCell>
                                <TableCell className="text-start">freeman.lara@gmail.com</TableCell>
                                <TableCell className="text-start">Guard Harbour</TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell className="text-start">4</TableCell>
                                <TableCell className="text-start">Floyd Cucumber</TableCell>
                                <TableCell className="text-start">floy.cucumber@gmail.com</TableCell>
                                <TableCell className="text-start">Centra</TableCell>
                            </TableRow>
                            <TableRow key="5">
                                <TableCell className="text-start">5</TableCell>
                                <TableCell className="text-start">Jake Timber</TableCell>
                                <TableCell className="text-start">timber@gmail.com</TableCell>
                                <TableCell className="text-start">Centra</TableCell>
                            </TableRow>
                            <TableRow key="6">
                                <TableCell className="text-start">6</TableCell>
                                <TableCell className="text-start">Dan Ville</TableCell>
                                <TableCell className="text-start">ville.dan@gmail.com</TableCell>
                                <TableCell className="text-start">Guard Harbour</TableCell>
                            </TableRow>
                            
                        </TableBody>
                    </Table>

                    <div className="flex bg-quinary w-32 h-8 rounded-md items-center justify-center gap-6">
                        <img src="src/assets/admin/left-arrow.svg" alt="" className="w-3"/>
                        <p className="font-medium"> 1/2 </p>
                        <img src="src/assets/admin/right-arrow.svg" alt="" className="w-3"/>
                    </div>
                </div>

                
                
                
            </div>
        </div>
    )
}

export default AdminPage