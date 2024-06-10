import React, { useEffect, useRef, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import ResizeObserver from 'resize-observer-polyfill';

const CentraMonitorBar = ({ filter }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef();

  const dailyData = {
    wetLeaves: [10, 15, 20, 25, 30, 20, 15],
    dryLeaves: [5, 10, 15, 20, 25, 30, 20],
    powder: [20, 25, 30, 20, 15, 10, 5],
  };

  const monthlyData = {
    wetLeaves: [200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750],
    dryLeaves: [150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700],
    powder: [300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850],
  };

  const data = filter === 'daily' ? dailyData : monthlyData;

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-full" ref={containerRef} style={{ maxHeight: '400px' }}>
      <div className="w-full h-full">
        <BarChart
          xAxis={[
            {
              scaleType: 'band',
              data: filter === 'daily'
                ? ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
                : ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'],
            },
          ]}
          yAxis={[
            { scaleType: 'linear', interval: filter === 'daily' ? 5 : 50, min: 0, max: filter === 'daily' ? 30 : 700 },
          ]}
          series={[
            { data: data.wetLeaves, color: 'rgba(26,127,93,255)', label: 'Wet Leaves' },
            { data: data.dryLeaves, color: 'rgba(132,181,103,255)', label: 'Dry Leaves' },
            { data: data.powder, color: 'rgba(218,232,209,255)', label: 'Powder' },
          ]}
          width={dimensions.width}
          height={Math.min(dimensions.height, 350)}
          barLabel="value"
        />
      </div>
    </div>
  );
}

export default CentraMonitorBar;
