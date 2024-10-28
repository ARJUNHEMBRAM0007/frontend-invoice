import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DescriptionIcon from '@mui/icons-material/Description';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import HelpIcon from '@mui/icons-material/Help';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';

const Home = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    // Toggle the button's active state
    setActiveButton(activeButton === buttonName ? null : buttonName);
  };
  // Function to handle button click
  const handleClick = (button) => {
    setActiveButton(button);
  };

  const buttons = [
    { name: 'Home', icon: <HomeIcon /> },
    { name: 'Reports', icon: <AssessmentIcon /> },
    { name: 'Cash Flow', icon: <AttachMoneyIcon /> },
  ];

  const clientsAndProjects = [
    { name: 'Clients', icon: <PeopleIcon /> },
    { name: 'Projects', icon: <WorkIcon /> },
    { name: 'Appointments', icon: <EventIcon /> },
    { name: 'Time Entry', icon: <AccessTimeIcon /> },
  ];

  const financialManagement = [
    { name: 'Invoices', icon: <ReceiptIcon /> },
    { name: 'Estimates', icon: <DescriptionIcon /> },
    { name: 'Items', icon: <ListAltIcon /> },
    { name: 'Expenses', icon: <AccountBalanceIcon /> },
    { name: 'Taxation Settings', icon: <SettingsIcon /> },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen ">
      {/* Sidebar */}
      <div className="w-1/5 bg-black text-white flex flex-col justify-between">
        {/* Top Section */}
        <div className="p-4">
          <div className="text-2xl font-bold mb-6">GoInvoice.io</div>
          <ul className="space-y-4">
            <li className="text-gray-400 text-sm">Dashboard</li>
            {buttons.map((button) => (
              <li key={button.name}>
                <button
                  onClick={() => handleButtonClick(button.name)}
                  className={`flex items-center text-base p-2 rounded-lg w-full text-left ${
                    activeButton === button.name ? 'bg-purple-500' : 'bg-black'
                  }`}
                >
                  {button.icon}
                  <span className="ml-2">{button.name}</span>
                </button>
              </li>
            ))}
            
            <li className="text-gray-400 text-sm">Clients & Projects</li>
            {clientsAndProjects.map((button) => (
              <li key={button.name}>
                <button
                  onClick={() => handleButtonClick(button.name)}
                  className={`flex items-center text-base p-2 rounded-lg w-full text-left ${
                    activeButton === button.name ? 'bg-purple-500' : 'bg-black'
                  }`}
                >
                  {button.icon}
                  <span className="ml-2">{button.name}</span>
                </button>
              </li>
            ))}

            <li className="text-gray-400 text-sm">Financial Management</li>
            {financialManagement.map((button) => (
              <li key={button.name}>
                <button
                  onClick={() => handleButtonClick(button.name)}
                  className={`flex items-center text-base p-2 rounded-lg w-full text-left ${
                    activeButton === button.name ? 'bg-purple-500' : 'bg-black'
                  }`}
                >
                  {button.icon}
                  <span className="ml-2">{button.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Section - StritMedia */}
        <div className="p-4  flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="bg-purple-500">S</Avatar>
            <span className="ml-2">StritMedia</span>
          </div>
          <MoreVertIcon />
        </div>
      </div>

      {/* Header Content */}
      <div className="w-4/5  bg-[#F9F4F0]">
        <div className="flex justify-between items-center pb-3 bg-[#F9F4F0] border-b border-black w-full pl-6 pr-6 pt-4 pb-4">
          <h1 className="text-2xl font-bold">Home</h1>
          <div className="flex items-center space-x-10">
            <SearchIcon className="text-black" />
            <NotificationsIcon className="text-black" />
            <LocalMallIcon className="text-black" />
            <HelpIcon className="text-black" />
            <button className="bg-purple-500 text-white px-4 py-2  border border-black flex items-center">
              <AddCircleIcon className=" text-black mr-2" />
              Create new
            </button>
          </div>
        </div>

      

        {/* Top Section */}
        
        <div className="grid grid-cols-3 gap-4 mb-4 pl-6 pr-6 pt-8">
          <div className="bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Income Statement</h2>
            <p>Revenue: ₹36,00,000</p>
            <p>-----------------------------------------------------</p>
            <p>Expenses: ₹36,00,000</p>
            <p>-----------------------------------------------------</p>
            <p>Net Profit: ₹29,00,000</p>
          </div>
          <div className="bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Balance Sheet</h2>
            <p>Total Assets: ₹50,00,000</p>
            <p>-----------------------------------------------------</p>
            <p>Total Liabilities: ₹20,00,000</p>
            <p>-----------------------------------------------------</p>
            <p>Equity: ₹30,00,000</p>
          </div>
          <div className="bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Cash Flow Statement</h2>
            <p>Operating Cash Flow: ₹19,00,000</p>
            <p>-----------------------------------------------------</p>
            <p>Investing Cash Flow: ₹5,00,000</p>
            <p>-----------------------------------------------------</p>
            <p>Financing Cash Flow: ₹2,00,000</p>
          </div>
        </div>


        {/* Middle Section */}
        <div className="grid grid-cols-3 gap-4 pl-6 pr-6">
        <div className="col-span-2 ">
        <div className="flex justify-between items-center mb-4">
  <div className="flex space-x-5">
  <button
          onClick={() => handleClick('Week')}
          className={`px-4 py-2 ${activeButton === 'Week' ? 'bg-black text-white' : ' text-black'}`}
        >
          Week
        </button>

        <button
          onClick={() => handleClick('Month')}
          className={`px-4 py-2 ${activeButton === 'Month' ? 'bg-black text-white' : ' text-black'}`}
        >
          Month
        </button>
  </div>
  <div className="flex items-center space-x-2 text-purple-700">
    <CalendarMonthIcon className="text-purple-700" />
    <select>
      <option >This Month</option>
      <option>Last Month</option>
      <option>This Year</option>
      <option>Last Year</option>
    </select>
  </div>
</div>
</div>
<div className="col-span-1 ">
<button
          onClick={() => handleClick('Oustanding vs Overdue Invoices')}
          className={`px-4 py-2 ${activeButton === 'Oustanding vs Overdue Invoices' ? 'bg-black text-white' : ' text-black'}`}
        >
          Oustanding vs Overdue Invoices
        </button>
</div>
</div>
        <div className="grid grid-cols-3 gap-4 pl-6 pr-6 pb-6">
          {/* Revenue vs. Expenses Over Time (2/3 of the width) */}
          
          <div className="col-span-2 bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Revenue vs. Expenses Over Time</h2>
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
              <p className="text-gray-500">[Graph Placeholder]</p>
            </div>
          </div>

          {/* Outstanding vs. Overdue Invoices (1/3 of the width) */}
          <div className="col-span-1 bg-white p-4 border border-black">
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
              <p className="text-gray-500">[Graph Placeholder]</p>
            </div>
          </div>
        </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-3 gap-4 mt-4 pl-6 pr-6 pb-2">
          {/* Expense Breakdown by Category (1/3 of the width) */}
          <div className="col-span-1 bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Expense Breakdown by Category</h2>
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
              <p className="text-gray-500">[Graph Placeholder]</p>
            </div>
          </div>

          {/* Taxation Reports (2/3 of the width) */}
          <div className="col-span-2 bg-white p-4 border border-black">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">Taxation Reports</h2>
              <div className="text-red-500 flex items-center">
                <span className="bg-red-500 text-black p-1">
                <AccessTimeIcon className="mr-2 text-black" />Quarterly Filing Due: 15th September</span>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4 text-center">
            <div class="flex flex-col items-center">
      <p class="text-lg font-semibold">Total Invoices Issued</p>
      <p class="text-3xl font-bold">₹36,00,000</p>
    </div>
    <div class="flex flex-col items-center">
      <p class="text-lg font-semibold">Total Invoices Issued</p>
      <p class="text-3xl font-bold">₹36,00,000</p>
    </div>
            </div>
            <p>-------------------------------------------------------------------------------------------------------------------</p>
  <div class="text-right pt-6">
    <p class="text-xl font-semibold ">Pending Tax Payment: ₹50,000</p>
  </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
