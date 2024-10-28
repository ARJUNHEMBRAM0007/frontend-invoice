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
          <h1 className="text-2xl font-bold">Estimates</h1>
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
    <button>Items List</button>
    <button>Item History</button>
  </div>

  {/* Right-hand side buttons */}
  <div className="flex items-center space-x-2">
    

    {/* Create Button */}
    <button className="bg-purple-500 text-white px-4 py-2 border border-black flex items-center">
      <AddCircleIcon className="text-black mr-2" />
      Add Items
    </button>
  </div>
</div>

<div className="flex  border py-2 border-black mb-4 shadow bg-[#FFFFFF] ml-6 mr-6 space-x-9 m-2    ">
  <div className="w-1/6 px-4 text-center ">Item ID</div>
  <div className="w-1/6 px-4 text-center ">Item Name</div>
  <div className="w-1/6 px-4 text-center ">Description</div>
  <div className="w-1/6 px-4 text-center ">Quantity Available</div>
  <div className="w-1/6 px-4 text-center ">Category</div>
  <div className="w-1/6 px-4 text-center">Unit Price</div>
</div>

<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6  ">
  <div className="  w-1/6  text-center">ITM-1001</div>
  <div className=" w-1/5  text-center ">Web Development Package</div>
  <div className=" w-1/4  text-center">full website development service</div>
  <div className="w-1/6 text-center ">N/A</div>
  <div className=" w-1/6  text-center">Services</div>
  <div className=" w-1/6 text-center">₹2,50,000</div>
</div>

<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6  ">
  <div className="  w-1/6  text-center">ITM-1001</div>
  <div className=" w-1/5  text-center ">Web Development Package</div>
  <div className=" w-1/4  text-center">full website development service</div>
  <div className="w-1/6 text-center ">N/A</div>
  <div className=" w-1/6  text-center">Services</div>
  <div className=" w-1/6 text-center">₹2,50,000</div>
</div>
<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6  ">
  <div className="  w-1/6  text-center">ITM-1001</div>
  <div className=" w-1/5  text-center ">Web Development Package</div>
  <div className=" w-1/4  text-center">full website development service</div>
  <div className="w-1/6 text-center ">N/A</div>
  <div className=" w-1/6  text-center">Services</div>
  <div className=" w-1/6 text-center">₹2,50,000</div>
</div>
<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6  ">
  <div className="  w-1/6  text-center">ITM-1001</div>
  <div className=" w-1/5  text-center ">Web Development Package</div>
  <div className=" w-1/4  text-center">full website development service</div>
  <div className="w-1/6 text-center ">N/A</div>
  <div className=" w-1/6  text-center">Services</div>
  <div className=" w-1/6 text-center">₹2,50,000</div>
</div>
<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6  ">
  <div className="  w-1/6  text-center">ITM-1001</div>
  <div className=" w-1/5  text-center ">Web Development Package</div>
  <div className=" w-1/4  text-center">full website development service</div>
  <div className="w-1/6 text-center ">N/A</div>
  <div className=" w-1/6  text-center">Services</div>
  <div className=" w-1/6 text-center">₹2,50,000</div>
</div>

{/* Middle Section */}
        
<div className="grid grid-cols-3 gap-4 mb-4 pl-6 pr-6 pt-6">
          <div className="bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Top selling items</h2>
            <p >Web Development Package:₹8,00,000</p>
            <p>-----------------------------------------------------</p>
            <p>UI/UX Design Service: ₹4,50,000</p>
            <p>-----------------------------------------------------</p>
            <p>Cloud Hosting: ₹3,60,000</p>
          </div>
          <div className="bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Services</h2>
            <p>Web Development</p>
            <p>-----------------------------------------------------</p>
            <p>UI/UX Design</p>
            <p>-----------------------------------------------------</p>
            <p>Custom App Development</p>
          </div>
          <div className="bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Cash Flow Statement</h2>
            <p>Domain Registration</p>
            <p>-----------------------------------------------------</p>
            <p>Cloud Hosting</p>
            <p>-----------------------------------------------------</p>
            <p>Office Supplies</p>
          </div>
        </div>

        {/* BOTTOM Section */}
<div className="flex justify-between mb-4 pl-6 pr-6 pb-0">
  <div className="flex space-x-4">
    <button>Inventory Mangement</button>
  </div>

  {/* Right-hand side buttons */}
  <div className="flex items-center space-x-2">
    {/* Search Icon */}
    <button className=" text-black px-2 py-2 ">
      <SearchIcon />
    </button>

    {/* Filter Icon */}
    <button className=" text-black px-2 py-2 ">
      <FilterListIcon />
    </button>
</div>
</div>
<div className="flex  border py-2 border-black mb-4 shadow bg-[#FFFFFF] ml-6 mr-6 space-x-1    ">
  <div className="w-1/5 px-4 text-center ">Item ID</div>
  <div className="w-1/5 px-4 text-center ">Item Name</div>
  <div className="w-1/5 px-4 text-center ">Stock Level</div>
  <div className="w-1/5 px-4 text-center ">Reorder Level</div>
  <div className="w-1/5 px-4 text-center">Status</div>
</div>

<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6  ">
  <div className=" w-1/5  text-center">ITM-1001</div>
  <div className=" w-1/5  text-center ">Domain Registration</div>
  <div className="w-1/5  text-center">180</div>
  <div className=" w-1/5  text-center">80</div>
  <div className=" w-1/5 mr-4 text-center">In stock</div>
</div>

<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6  ">
  <div className=" w-1/5  text-center">ITM-1001</div>
  <div className=" w-1/5  text-center ">Domain Registration</div>
  <div className="w-1/5  text-center">180</div>
  <div className=" w-1/5  text-center">80</div>
  <div className=" w-1/5 mr-4 text-center">In stock</div>
</div>
<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6  ">
  <div className=" w-1/5  text-center">ITM-1001</div>
  <div className=" w-1/5  text-center ">Domain Registration</div>
  <div className="w-1/5  text-center">180</div>
  <div className=" w-1/5  text-center">80</div>
  <div className=" w-1/5 mr-4 text-center">In stock</div>
</div>
<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6 mb-2 ">
  <div className=" w-1/5  text-center">ITM-1001</div>
  <div className=" w-1/5  text-center ">Domain Registration</div>
  <div className="w-1/5  text-center">180</div>
  <div className=" w-1/5  text-center">80</div>
  <div className=" w-1/5 mr-4 text-center">In stock</div>
</div>








        </div>
        </div>
  );
};
export default Home;