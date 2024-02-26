import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear, isWithinInterval, parseISO, startOfDay, endOfDay, compareAsc } from 'date-fns';
import "../CSS/MyWallet.css";
import Sidebar from '../components/Sidebar.jsx';
import Navbar from '../components/Navbar.jsx';

const actualData = [
    { date: '2024-01-01', Revenue: 4000, Courses: 2400, ProfileViews: 2400 },
    { date: '2024-02-01', Revenue: 3000, Courses: 1398, ProfileViews: 2210 },
    { date: '2024-03-01', Revenue: 2000, Courses: 9800, ProfileViews: 2290 },
    { date: '2025-01-01', Revenue: 4000, Courses: 2400, ProfileViews: 2400 },
    { date: '2025-02-01', Revenue: 3000, Courses: 1398, ProfileViews: 2210 },
    { date: '2023-03-01', Revenue: 2000, Courses: 9800, ProfileViews: 2290 },
    // Continue for other months
  ];

// Options for the select box
const filterOptions = [
  { value: 'all', label: 'All Year' },
  { value: 'today', label: 'Today' },
  { value: 'thisWeek', label: 'This Week' },
  { value: 'thisMonth', label: 'This Month' },
  { value: 'thisYear', label: 'This Year' },
];

function MyWallet() {
  const [selectedOptionRevenue, setSelectedOptionRevenue] = useState(filterOptions[0]);
  const [selectedOptionCourses, setSelectedOptionCourses] = useState(filterOptions[0]);
  const [selectedOptionProfileViews, setSelectedOptionProfileViews] = useState(filterOptions[0]);

  // Generalized filter function
  const getFilteredData = (selectedOption) => {
    const now = new Date();
    return actualData
      .filter(item => {
        const itemDate = parseISO(item.date);
        switch (selectedOption.value) {
          case 'today':
            return isWithinInterval(itemDate, { start: startOfDay(now), end: endOfDay(now) });
          case 'thisWeek':
            return isWithinInterval(itemDate, { start: startOfWeek(now), end: endOfWeek(now) });
          case 'thisMonth':
            return isWithinInterval(itemDate, { start: startOfMonth(now), end: endOfMonth(now) });
          case 'thisYear':
            return isWithinInterval(itemDate, { start: startOfYear(now), end: endOfYear(now) });
          default:
            return true; // 'All Year' returns all data
        }
      })
      .sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date))); // Sorting by date in ascending order
  };

  // Render Chart function for reusability, now accepts a selectedOption parameter
  const renderChart = (dataKey, color, name, selectedOption) => {
    const ChartComponent = dataKey === "ProfileViews" ? BarChart : LineChart;
    const BarOrLine = dataKey === "ProfileViews" ? Bar : Line;

    return (
      <ResponsiveContainer width="100%" height={300}>
        <ChartComponent data={getFilteredData(selectedOption)}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <BarOrLine type="monotone" dataKey={dataKey} stroke={color} fill={color} name={name} />
        </ChartComponent>
      </ResponsiveContainer>
    );
  };

  // Render Select function for reusability
  const renderSelect = (selectedOption, setSelectedOption,title) => (
    <div className='flex justify-between '>
        <h1 className="text-[18px] font-bold">{title}</h1>
    <Select
      value={selectedOption}
      onChange={setSelectedOption}
      options={filterOptions}
      className="mb-4"
      styles={{ container: (provided) => ({ ...provided, width: '150px',zIndex:20 }) }}
    />
    </div>
  );

  return (
    <div className='MyWallet_body'>
      <div className='max-sm:hidden'><Sidebar liname={"My Wallet"} /></div>
      <div className='myWalletMain max-md:w-[100vw] max-md:overflow-x-auto py-[15px] '>      
        <Navbar Navtext={"My Wallet"} />
        <div className='m-[20px] text-[18px] font-[600]'>
          <Link to={"/"}>Dashboard</Link> &gt; My Wallet
        </div>
        <div className='MyWallet_mainContainer max-md:p-4'>
          {/* Revenue Chart with its filter */}
          <div className="chartWithFilter">
            {/* <div className="text-[18px] font-bold">Revenue</div> */}
            {renderSelect(selectedOptionRevenue, setSelectedOptionRevenue,"Revenue")}
            {renderChart("Revenue", "#ffc658", "Revenue", selectedOptionRevenue)}
          </div>
          
          {/* Courses Chart with its filter */}
          <div className="chartWithFilter">
            {/* <div className="text-[18px] font-bold">Courses</div> */}
            {renderSelect(selectedOptionCourses, setSelectedOptionCourses,"Courses")}
            {renderChart("Courses", "#8884d8", "Courses", selectedOptionCourses)}
          </div>
          
          {/* Profile Views Chart with its filter */}
          <div className="chartWithFilter">
            {/* <div className="text-[18px] font-bold">Profile Views</div> */}
            {renderSelect(selectedOptionProfileViews, setSelectedOptionProfileViews,"Profile Views")}
            {renderChart("ProfileViews", "#82ca9d", "Profile Views", selectedOptionProfileViews)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWallet;
