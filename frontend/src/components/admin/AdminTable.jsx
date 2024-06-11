import React, { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Button, Pagination} from "@nextui-org/react";
import "../../style/AdminDesktop.css";
import { initialRows, columns} from "./UserDataSample";
import EditUserButton from "./EditUserButton";


function AdminTable({ rows, deleteRow, editRow}) {
  const [currentPage, SetCurrentPage] = useState(1)

  const itemsPerPage = 5;

  const handleDelete = (id) => {
    deleteRow(id)
  };

  const handleEdit = (updatedUser) => {
    editRow(updatedUser);
  };

  const handlePageChange = (page) => {
    SetCurrentPage(page)
  }


  const totalPages = Math.ceil(rows.length / itemsPerPage);

  const paginatedRows = rows.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex flex-col w-97/100 pl-14 items-center gap-8 border-collapse" >
      <Table aria-label="Example table with dynamic content" className="text-left drop-shadow-md border-collapse">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key} className="bg-quinary text-black text-sm">
              {column.label}
            </TableColumn>
          )}
        </TableHeader>

        <TableBody items={paginatedRows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell className="text-base">
                  {columnKey === "actions" ? (
                    <div className="flex gap-2">
                      <EditUserButton
                        user={item}
                        onEditUser={handleEdit}
                      />
                      <Button
                        size="md"
                        auto
                        flat
                        color="error"
                        className="flex items-center justify-center bg-red-600 text-white font-medium drop-shadow-md w-24 text-base"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  ) : (
                    getKeyValue(item, columnKey)
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    
      <Pagination 
       isCompact
       showControls
       total={totalPages}
       onChange={handlePageChange}
       color="quinary"
       className="drop-shadow-lg"
      />
      
    </div>
  );
}

export default AdminTable;
