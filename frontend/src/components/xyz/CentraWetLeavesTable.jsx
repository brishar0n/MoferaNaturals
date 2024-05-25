import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const columns = [
  { 
    field: 'packageid', 
    headerClassName: 'super-app-theme--header', 
    headerAlign: 'center', 
    headerName: 'Package ID', 
    width: 150,
    cellClassName: 'super-app-theme--cell',
  },
  { 
    field: 'weight', 
    headerClassName: 'super-app-theme--header', 
    headerAlign: 'center', 
    headerName: 'Weight (in kg)', 
    type: 'number', 
    width: 150,
    cellClassName: 'super-app-theme--cell',
  },
  { 
    field: 'status', 
    headerClassName: 'super-app-theme--header', 
    headerAlign: 'center', 
    headerName: 'Status', 
    width: 240,
    cellClassName: 'super-app-theme--cell',
  },
];

const rows = [
  { id: 1, packageid: 'PKG#349320', weight: 10, status: 'Drying (9m20s left)' },
  { id: 2, packageid: 'PKG#349321', weight: 12, status: 'Drying (8m10s left)' },
  { id: 3, packageid: 'PKG#349322', weight: 15, status: 'Washing (5m30s left)' },
  { id: 4, packageid: 'PKG#349323', weight: 8, status: 'Washing (3m20s left)' },
  { id: 5, packageid: 'PKG#349324', weight: 10, status: 'Washing (1m50s left)' },
  { id: 6, packageid: 'PKG#349325', weight: 11, status: 'Drying (10m00s left)' },
  { id: 7, packageid: 'PKG#349326', weight: 13, status: 'Washing (4m20s left)' },
  { id: 8, packageid: 'PKG#349327', weight: 9, status: 'Washing (2m10s left)' },
  { id: 9, packageid: 'PKG#349328', weight: 14, status: 'Drying (7m50s left)' },
];

export default function CentraWetLeavesTable() {
  return (
    <Box sx={{ height: 300, width: '48%', ml: 3, mb: 3 }}>
      <DataGrid
        sx={{
          fontFamily: 'Montserrat',
          border: 1,
          borderColor: 'rgba(15,109,72,255)',
          '& .super-app-theme--header': {
            backgroundColor: 'rgba(26,127,93,255)',
            color: 'white',
          },
          '& .super-app-theme--cell': {
            textAlign: 'center',
          },
        }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </Box>
  );
}
