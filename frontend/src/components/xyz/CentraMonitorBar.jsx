import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function CentraMonitorBar() {
  
    return (
    <BarChart
      sx={{
        fontFamily: 'Montserrat', 
      }}
      xAxis={[
        {
          scaleType: 'band',
          data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 
        },
      ]}
      yAxis={[
        { scaleType: 'linear', interval: 5, min: 0, max: 30 }, 
      ]}
      series={[
        { data: [10, 15, 20, 25, 30, 20, 15], color: 'rgba(26,127,93,255)', label: 'Wet Leaves' }, // Wet Leaves data
        { data: [5, 10, 15, 20, 25, 30, 20], color: 'rgba(132,181,103,255)', label: 'Dry Leaves' }, // Dry Leaves data
        { data: [20, 25, 30, 20, 15, 10, 5], color: 'rgba(218,232,209,255)', label: 'Powder' }, // Powder data
      ]}
      width={700}
      height={400}
      barLabel="value"
    />
  );
}