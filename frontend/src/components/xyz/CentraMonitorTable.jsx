import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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
    width: 120,
    cellClassName: 'super-app-theme--cell',
  },
  { 
    field: 'status', 
    headerClassName: 'super-app-theme--header', 
    headerAlign: 'center', 
    headerName: 'Status', 
    width: 205,
    cellClassName: 'super-app-theme--cell',
  },
];

export default function CentraMonitorTable({ dataType, handleDataTypeChange }) {
  const [rows, setRows] = useState([]);

  React.useEffect(() => {
    let data = [];
    if (dataType === 'Wet Leaves') {
      data = [
        { id: 1, packageid: 'PKG#349320', weight: 20, status: 'Washing (9m20s left)' },
        { id: 2, packageid: 'PKG#349321', weight: 22, status: 'Drying (8m10s left)' },
        { id: 3, packageid: 'PKG#349322', weight: 15, status: 'Washing (5m30s left)' },
        { id: 4, packageid: 'PKG#349323', weight: 8, status: 'Washing (3m20s left)' },
        { id: 5, packageid: 'PKG#349324', weight: 10, status: 'Washing (1m50s left)' },
        { id: 6, packageid: 'PKG#349325', weight: 11, status: 'Drying (10m00s left)' },
        { id: 7, packageid: 'PKG#349326', weight: 13, status: 'Washing (4m20s left)' },
        { id: 8, packageid: 'PKG#349327', weight: 9, status: 'Washing (2m10s left)' },
        { id: 9, packageid: 'PKG#349328', weight: 14, status: 'Drying (7m50s left)' },
        { id: 10, packageid: 'PKG#349329', weight: 26, status: 'Drying (8m50s left)' },
      ];
    } else if (dataType === 'Dry Leaves') {
      data = [
        { id: 1, packageid: 'PKG#349320', weight: 15, status: 'Drying (9m20s left)' },
        { id: 2, packageid: 'PKG#349321', weight: 18, status: 'Washing (8m10s left)' },
        { id: 3, packageid: 'PKG#349322', weight: 15, status: 'Washing (5m30s left)' },
        { id: 4, packageid: 'PKG#349323', weight: 8, status: 'Washing (3m20s left)' },
        { id: 5, packageid: 'PKG#349324', weight: 10, status: 'Washing (1m50s left)' },
        { id: 6, packageid: 'PKG#349325', weight: 11, status: 'Drying (10m00s left)' },
        { id: 7, packageid: 'PKG#349326', weight: 13, status: 'Washing (4m20s left)' },
        { id: 8, packageid: 'PKG#349327', weight: 9, status: 'Washing (2m10s left)' },
        { id: 9, packageid: 'PKG#349328', weight: 14, status: 'Drying (7m50s left)' },
      ];
    } else if (dataType === 'Powder') {
      data = [
        { id: 1, packageid: 'PKG#349320', weight: 8, status: 'Grinding (9m20s left)' },
        { id: 2, packageid: 'PKG#349321', weight: 10, status: 'Packing (8m10s left)' },
        { id: 3, packageid: 'PKG#349322', weight: 15, status: 'Washing (5m30s left)' },
        { id: 4, packageid: 'PKG#349323', weight: 8, status: 'Washing (3m20s left)' },
        { id: 5, packageid: 'PKG#349324', weight: 10, status: 'Washing (1m50s left)' },
        { id: 6, packageid: 'PKG#349325', weight: 11, status: 'Drying (10m00s left)' },
        { id: 7, packageid: 'PKG#349326', weight: 13, status: 'Washing (4m20s left)' },
        { id: 8, packageid: 'PKG#349327', weight: 9, status: 'Washing (2m10s left)' },
        { id: 9, packageid: 'PKG#349328', weight: 14, status: 'Drying (7m50s left)' },
      ];
    }
    setRows(data);
  }, [dataType]);

  const getLineChartData = () => {
    const labels = ['00:00', '06:00', '12:00', '18:00', '24:00'];
    const weights = rows.map(row => row.weight); 
    return {
      labels,
      datasets: [
        {
          label: `${dataType} Weight`,
          data: weights,
          borderColor: 'rgba(26,127,93,255)',
          backgroundColor: 'rgba(15,109,72,255)',
        },
      ],
    };
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Weight Data (${dataType})`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time of Day',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Weight (kg)',
        },
      },
    },
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, ml: 3, mb: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: '38px' }}>
        <span>
          <h2 className='text-left font-medium text-xl mr-72 mt-9'>{dataType} Activity &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
        </span>
        <div className="bg-neutral-100 rounded-full w-1/2 z-20 mb-4 mt-9 flex items-center">
          <p className={`w-48 rounded-full p-1 cursor-pointer hover:bg-nonary hover:text-white ${dataType === 'Wet Leaves' ? 'active' : ''}`} onClick={() => handleDataTypeChange('Wet Leaves')}> Wet Leaves </p>
          <p className={`w-48 rounded-full p-1 cursor-pointer hover:bg-nonary hover:text-white ${dataType === 'Dry Leaves' ? 'active' : ''}`} onClick={() => handleDataTypeChange('Dry Leaves')}> Dry Leaves </p>
          <p className={`w-48 rounded-full p-1 cursor-pointer hover:bg-nonary hover:text-white ${dataType === 'Powder' ? 'active' : ''}`} onClick={() => handleDataTypeChange('Powder')}> Powder </p>
        </div>
      </Box>
      
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3, marginBottom: '30px' }}>
        <Box sx={{ height: 300, width: '47%' }}>
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
        <Box sx={{ height: 300, width: '50%' }}>
          <Line data={getLineChartData()} options={options} />
        </Box>
      </Box>
    </Box>
  );
}
