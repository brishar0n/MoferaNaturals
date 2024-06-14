import React, { useEffect, useRef, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import ResizeObserver from 'resize-observer-polyfill';
import { getDryStats, getFlourStats, getWetStats } from '../../../api/xyzAPI';
import { deepOrange } from '@mui/material/colors';

const CentraMonitorBar = ({ filter }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef();

  // const dailyData = {
  //   wetLeaves: [10, 15, 20, 25, 30, 20, 15],
  //   dryLeaves: [5, 10, 15, 20, 25, 30, 20],
  //   powder: [20, 25, 30, 20, 15, 10, 5],
  // };

  const [dailyData, setDailyData] = useState({wetLeaves:[] ,dryLeaves:[], powder:[]});
  const [monthlyData, setMonthlyData] = useState({wetLeaves:[] ,dryLeaves:[], powder:[]});

  // const monthlyData = {
  //   wetLeaves: [200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750],
  //   dryLeaves: [150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700],
  //   powder: [300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850],
  // };

  const data = filter === 'daily' ? dailyData : monthlyData;

  useEffect(() => {
    const fetchDatas = async () => {
        const wetDaily = await getWetStats({"interval": "weekly"})
        const dryDaily = await getDryStats({"interval": "weekly"})
        const powderDaily = await getFlourStats({"interval": "weekly"})

        setDailyData({"wetLeaves":wetDaily.data.data, "dryLeaves":dryDaily.data.data, "powder":powderDaily.data.data})
        
        const tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        const dateParam = (new Date(Date.now() - tzoffset)).toISOString().split("T")[0];

        const wetMonthly = await getWetStats({"interval": "monthly", "date": dateParam})
        const dryMonthly = await getDryStats({"interval": "monthly", "date": dateParam})
        const powderMonthly = await getFlourStats({"interval": "monthly", "date": dateParam})

        setMonthlyData({"wetLeaves":wetMonthly.data.data, "dryLeaves":dryMonthly.data.data, "powder":powderMonthly.data.data})
        
    }

    fetchDatas()

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
