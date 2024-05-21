import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../../style/CentraMonTable.css';

const columns = [
  { field: 'packageid', headerName: 'Package ID', width: 120 },
  { field: 'weight', headerName: 'Weight (in kg)', type: 'number', width: 100 },
  { field: 'status', headerName: 'Status', width: 200 },
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
    <div className="table-container" style={{ height: 300, width: '40%', marginLeft: '20px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}