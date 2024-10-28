import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarElement,
  Tooltip,
  Title,
} from "chart.js";
import thisMonth from "../IMAGE/Timeline Button.png";
import Track from "../IMAGE/Track.png";
import VISIT from '../IMAGE/Visit.png';
import Rating from '../IMAGE/Vector.png';
import VIS from '../IMAGE/doctor-visit 1.png';
import Current from '../IMAGE/patient 1.png';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, BarElement, Tooltip, Title);

const generateScaledData = (num, min, max, scale = 1) => {
  return Array.from({ length: num }, () =>
    Math.floor((Math.random() * (max - min + 1) + min) * scale)
  );
};

const Dashboard = () => {
  const scaleFactor = 1.2;

  const [barChartData, setBarChartData] = useState({
    labels: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    datasets: [
      {
        label: "Total Visits",
        data: generateScaledData(6, 100, 300, scaleFactor),
        backgroundColor: ["#FF647C", "#38BDF8", "#FF647C", "#FF647C", "#FF647C", "#FF647C"],
        borderRadius: 6,
      },
    ],
  });

  const [lineChartData, setLineChartData] = useState({
    labels: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    datasets: [
      {
        label: "Total Treatment",
        data: generateScaledData(6, 50, 150, scaleFactor),
        borderColor: "#FF647C",
        backgroundColor: "#FF647C",
        fill: false,
        tension: 0.4,
      },
    ],
  });

  const [chartData, setChartData] = useState({
    labels: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    datasets: [
      {
        label: "Red Line",
        data: [95, 108, 98, 110, 105, 115].map((val) => val * scaleFactor),
        borderColor: "#FF647C",
        backgroundColor: "#FF647C",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Blue Line",
        data: [90, 100, 95, 105, 102, 110].map((val) => val * scaleFactor),
        borderColor: "#00BFFF",
        backgroundColor: "#00BFFF",
        fill: false,
        tension: 0.4,
      },
    ],
  });

  const [rightChartData, setRightChartData] = useState({
    labels: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    datasets: [
      {
        label: "Right Chart Line",
        data: [95, 108, 98, 110, 105, 115].map((val) => val * scaleFactor),
        borderColor: "#FF647C",
        backgroundColor: "#FF647C",
        fill: false,
        tension: 0.4,
      },
    ],
  });

  const commonOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: { grid: { display: false }, barPercentage: 0.3, categoryPercentage: 0.8 },
      y: { grid: { display: false } },
    },
  };

  return (
    <>
      <div className="flex flex-col items-center ">
        {/* Visit card section */}
        <div className="w-full max-w-7xl flex flex-wrap justify-center gap-x-4 mb-4">
          <div className="p-4 rounded-lg shadow-lg flex items-center space-x-2 max-w-xs">
            <img src={VISIT} alt="Doctor Avatar" className="rounded-full w-10" />
            <h3 className="text-lg font-bold">3000 Patients <br /> Treated</h3>
          </div>
          <div className="p-4 rounded-lg shadow-md flex items-center space-x-2 max-w-xs">
            <img src={Rating} alt="Rating" className="rounded-full w-8" />
            <h3 className="text-lg font-bold">Ratings <br /> ⭐⭐⭐⭐⭐</h3>
          </div>
          <div className="p-4 rounded-lg shadow-md flex items-center space-x-2 max-w-xs">
            <img src={VIS} alt="Visits" className="rounded-full w-10" />
            <h3 className="text-lg font-bold">Visit’s <br /> +1200</h3>
          </div>
          <div className="p-4 rounded-lg shadow-md flex items-center space-x-2 max-w-xs">
            <img src={Current} alt="Current Treatment" className="rounded-full w-10" />
            <h3 className="text-lg font-bold">Current Treatment <br /> +8</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-7xl">
          <div className="rounded-lg shadow-lg p-4 ">
            <img src={thisMonth} alt="Doctor Avatar" className="rounded-full w-16" />
            <div className="text-2xl font-bold text-gray-800">+273</div>
            <div className="text-green-500 text-sm font-semibold mt-1">
              <span className="text-gray-500 text-sm font-semibold pr-2">Total Visit</span>
              <i className="fa-solid fa-square-caret-up"></i> +2.45%
            </div>
            <img src={Track} alt="Doctor Avatar" className="rounded-full w-20 my-4" />
            <Bar data={barChartData} options={commonOptions} height={150} width={300} />
          </div>

          <div className="rounded-lg shadow-lg p-4 ">
            <img src={thisMonth} alt="Doctor Avatar" className="rounded-full w-16" />
            <div className="text-2xl font-bold text-gray-800">+106</div>
            <div className="text-green-500 text-sm font-semibold mt-1">
              <span className="text-gray-500 text-sm font-semibold pr-2">Total Treatment</span>
              <i className="fa-solid fa-square-caret-up"></i> +4.25%
            </div>
            <img src={Track} alt="Doctor Avatar" className="rounded-full w-20 my-4" />
            <Line data={lineChartData} options={commonOptions} height={150} width={300} />
          </div>

          <div className="rounded-lg shadow-lg p-4">
            <img src={thisMonth} alt="Doctor Avatar" className="rounded-full w-16" />
            <div className="text-2xl font-bold text-gray-800">$10.5K</div>
            <div className="text-green-500 text-sm font-semibold mt-1">
              <span className="text-gray-500 text-sm font-semibold pr-2">Total Earning</span>
              <i className="fa-solid fa-square-caret-up"></i> +4.25%
            </div>
            <img src={Track} alt="Doctor Avatar" className="rounded-full w-20 my-4" />
            <Line data={chartData} options={commonOptions} height={150} width={300} />
          </div>

          <div className="rounded-lg shadow-lg p-4 ">
            <img src={thisMonth} alt="Doctor Avatar" className="rounded-full w-20" />
            <div className="text-2xl font-bold text-gray-800">$38.00</div>
            <div className="text-green-500 text-sm font-semibold mt-1">
              <span className="text-gray-500 text-sm font-semibold pr-2">Total Medicine</span>
              <i className="fa-solid fa-square-caret-up"></i> +2.45%
            </div>
            <img src={Track} alt="Doctor Avatar" className="rounded-full w-20 my-4" />
            <Line data={rightChartData} options={commonOptions} height={150} width={300} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
