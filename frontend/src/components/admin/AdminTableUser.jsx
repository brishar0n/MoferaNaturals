import React, { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Button, Pagination } from "@nextui-org/react";
import "../../style/AdminDesktop.css";
import { initialRows, columns } from "./UserDataSample";
import EditUserButton from "./EditUserButton";

function AdminTable({ rows, columns, deleteRow, editRow }) {
  const [currentPage, SetCurrentPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState("");

  const itemsPerPage = 5;

  const handleDelete = (id) => {
    deleteRow(id);
  };

  const handleEdit = (updatedUser) => {
    editRow(updatedUser);
  };

  const handlePageChange = (page) => {
    SetCurrentPage(page);
  };

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const filteredRows = filterCategory
    ? rows.filter((row) => row.role === filterCategory)
    : rows;
  
  const totalPages = Math.ceil(filteredRows.length / itemsPerPage);
  const paginatedRows = filteredRows.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex flex-col w-97/100 pl-14 items-center gap-8 border-collapse">
      <div className="flex justify-end w-full">
        <form onSubmit={(e) => e.preventDefault()}>
          <select
            id="categoryFilter"
            value={filterCategory}
            onChange={handleFilterChange}
            className="flex bg-quinary border border-primary text-primary text-sm focus:ring-primary focus:border-primary block p-1 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primary dark:focus:border-primary rounded-full px-1 mr-4"
          >
            <option value="">All</option>
            <option value="xyz">XYZ</option>
            <option value="admin">Admin</option>
            <option value="centra">Centra</option>
            <option value="guardharbour">Guard Harbour</option>
          </select>
        </form>
      </div>

      <Table aria-label="Example table with dynamic content" className="text-center drop-shadow-md border-collapse">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key} className="bg-quinary text-black text-sm text-center">
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
                    <div className="flex gap-2 justify-center">
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
