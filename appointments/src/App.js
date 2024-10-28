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
import FilterListIcon from '@mui/icons-material/FilterList';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Home = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    // Toggle the button's active state
    setActiveButton(activeButton === buttonName ? null : buttonName);
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

      {/* Main Content */}
      <div className="w-4/5  bg-[#F9F4F0] bg-F9F4F0">
        <div className="flex justify-between items-center pb-3 bg-[#F9F4F0] border-b border-black w-full pl-6 pr-6 pt-4 pb-4">
          <h1 className="text-2xl font-bold">Appointments</h1>
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
             <div className="flex justify-between mb-4 p-6 pb-0">
  <div className="flex space-x-4">
    <button>Appointments</button>
  </div>

  {/* Right-hand side buttons */}
  <div className="flex items-center space-x-2">
    

    {/* Create Button */}
    <button className="bg-purple-500 text-white px-4 py-2 border border-black flex items-center">
      <AddCircleIcon className="text-black mr-2" />
      Create Appointments
    </button>
  </div>
</div>

<div className="flex  border py-2 border-black mb-4 shadow bg-[#FFFFFF] ml-6 mr-6 space-x-9 m-2    ">
  <div className="w-1/6 px-4 text-center ">Appointment ID</div>
  <div className="w-1/6 px-4 text-center ">Client Name</div>
  <div className="w-1/6 px-4 text-center ">Date & Type</div>
  <div className="w-1/6 px-4 text-center ">Appointment Type</div>
  <div className="w-1/6 px-4 text-center ">Location/Mode</div>
  <div className="w-1/6 px-4 text-center">Status</div>
</div>

<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6  ">
  <div className="  w-1/6 px-4 text-center">APT-1000</div>
  <div className=" w-1/6 px-4 text-center ">Acme Industries</div>
  <div className=" w-1/6 px-4 text-center">12 Aug 2024, 11:00AM</div>
  <div className="w-1/6 px-4 text-center">Review</div>
  <div className=" w-1/6 px-4 text-center">Zoom</div>
  <div className="w-32 ml-10 px-6 text-center bg-yellow-500">Scheduled</div>
</div>

<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6  ">
  <div className="  w-1/6 px-4 text-center">APT-1000</div>
  <div className=" w-1/6 px-4 text-center ">Acme Industries</div>
  <div className=" w-1/6 px-4 text-center">12 Aug 2024, 11:00AM</div>
  <div className="w-1/6 px-4 text-center">Review</div>
  <div className=" w-1/6 px-4 text-center">Zoom</div>
  <div className="w-32 ml-10 px-6 text-center bg-yellow-500">Scheduled</div>
</div>

<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6  ">
  <div className="  w-1/6 px-4 text-center">APT-1000</div>
  <div className=" w-1/6 px-4 text-center ">Acme Industries</div>
  <div className=" w-1/6 px-4 text-center">12 Aug 2024, 11:00AM</div>
  <div className="w-1/6 px-4 text-center">Review</div>
  <div className=" w-1/6 px-4 text-center">Zoom</div>
  <div className="w-32 ml-10 px-6 text-center bg-red-500">Missed</div>
</div>

<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6  ">
  <div className="  w-1/6 px-4 text-center">APT-1000</div>
  <div className=" w-1/6 px-4 text-center ">Acme Industries</div>
  <div className=" w-1/6 px-4 text-center">12 Aug 2024, 11:00AM</div>
  <div className="w-1/6 px-4 text-center">Review</div>
  <div className=" w-1/6 px-4 text-center">Zoom</div>
  <div className="w-32 ml-10 px-6 text-center bg-red-500">Missed</div>
</div>

<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6  ">
  <div className="  w-1/6 px-4 text-center">APT-1000</div>
  <div className=" w-1/6 px-4 text-center ">Acme Industries</div>
  <div className=" w-1/6 px-4 text-center">12 Aug 2024, 11:00AM</div>
  <div className="w-1/6 px-4 text-center">Review</div>
  <div className=" w-1/6 px-4 text-center">Zoom</div>
  <div className="w-32 ml-10 px-6 text-center bg-green-500">Completed</div>
</div> 


<div className="grid grid-cols-3 gap-4 pl-6 pr-6 pt-6">
  {/* Left Section with Tabs and Recent Invoices (2/3 of the width) */}
  <div className="col-span-2 flex flex-col">
    {/* Top Navigation Tabs */}
    <div className="flex mb-4 space-x-4">
      <button>Upcoming Appointments</button>
    </div>
    
    {/* Invoice Details Table */}
    <div className="flex  border py-2 border-black mb-4 shadow bg-[#FFFFFF]">
      <div className="w-1/3 px-4 text-center">Client Name</div>
      <div className="w-1/3 px-4 text-center">Appointment Type</div>
      <div className="w-1/3 px-4 text-center">Date & Time</div>
      <div className="w-1/3 px-4 text-center">Reminder Sent</div>
    </div>

    {/* Invoice Rows */}
    <div className="flex-grow">
      {Array(6).fill("").map((_, index) => (
        <div className="flex items-center border py-2 border-black bg-[#FFFFFF]" key={index}>
          <div className="w-1/4 px-2 text-center">Acne Industries</div>
          <div className="w-1/4 px-2 text-center">Review</div>
          <div className="w-1/4 px-2 text-center">09 Aug 2024, 01:45 PM</div>
          <div className="w-1/4 px-2 text-center">Yes</div>
        </div>
      ))}
    </div>
  </div>

  {/* Right Section for Upcoming Deadlines (1/3 of the width) */}
  <div className="col-span-1 flex flex-col">
  <button className="pb-4">Appointment Status</button>
  <div className="bg-white p-4 border border-black flex-grow flex flex-col justify-between">
    <div className="flex-grow">
      <textarea 
        placeholder="" 
        className="w-full h-full text-gray-600 border-none resize-none focus:outline-none"
      />
    </div>
    </div>
  </div>
</div>


        </div>
        </div>
  );
};
export default Home;