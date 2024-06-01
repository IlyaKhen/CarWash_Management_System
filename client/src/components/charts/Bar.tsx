import * as React from 'react';
import { BarChart as MUIBarChart } from '@mui/x-charts/BarChart';

const BarChart = () => {
  return (
    <div>
      <h1>Bar Chart</h1>
      <MUIBarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
    </div>
  );
};

export default BarChart;
