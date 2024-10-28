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
import VisibilityIcon from '@mui/icons-material/Visibility';

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

      {/* Main Content */}
      <div className="w-4/5  bg-[#F9F4F0] bg-F9F4F0">
        <div className="flex justify-between items-center pb-3 bg-[#F9F4F0] border-b border-black w-full pl-6 pr-6 pt-4 pb-4">
          <h1 className="text-2xl font-bold">Clients</h1>
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
  <button
          onClick={() => handleClick('Client list')}
          className={`px-4 py-2 ${activeButton === 'Client list' ? 'bg-black text-white' : ' text-black'}`}
        >
         Client list
        </button>
        <button
          onClick={() => handleClick('Recent Activity')}
          className={`px-4 py-2 ${activeButton === 'Recent Activity' ? 'bg-black text-white' : ' text-black'}`}
        >
          Recent Activity
        </button>
  </div>
  <button className="bg-purple-500 text-white px-4 py-2 border border-black flex items-center">
    <AddCircleIcon className="text-black mr-2" />
    Add Clients
  </button>
</div>

    
    {/* Invoice Details Table */}
    
    {/* Header Row */}
<div className="flex items-center  border pt-2 pb-2 border-black mb-4 shadow bg-[#FFFFFF] ml-6 mr-6 space-x-6">
  <div className=" w-1/8 px-4 text-center  ">Contact person</div>
  <div className=" w-1/10 px-4 text-center ml-9">Client Name</div>
  <div className=" w-1/8 px-4 text-center ml-12">Email</div>
  <div className=" w-1/8 px-4 text-center ml-6">Phone Number</div>
  <div className=" w-1/8 px-4 text-center">Total Invoices</div>
  <div className=" w-1/8 px-4 text-center">Location</div>
  <div className=" w-1/8 px-4 text-center">Outstanding Amount</div>
  <div className=" w-1/8 px-4 text-center">View & edit</div>
</div>

{/* Data Row */}
<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6 space-x-6">
  <div className="w-1/8 px-4 text-center flex items-center justify-center">
    <img
      src="/path-to-profile-pic.jpg"
      alt="Profile"
      className="w-8 h-8 rounded-full mr-2"
    />
    <span>Amit Sharma</span>
  </div>
  <div className="w-1/8 px-4 text-center">Acme Industries</div>
  <div className="w-1/8 px-4 text-center">amit.sharma@abc.com</div>
  <div className="w-1/8 px-4 text-center">+91 987654321</div>
  <div className="w-1/8 px-4 text-center">15</div>
  <div className="w-1/8 px-4 text-center">Mumbai</div>
  <div className="w-1/8 px-4 text-center">₹2,50,000</div>
  <div className="w-1/8 px-4 text-center">
    <div className="inline-block bg-purple-500 rounded-full ">
      <VisibilityIcon className="text-white" />
    </div>
  </div>
</div>



<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6 space-x-6">
  <div className="w-1/8 px-4 text-center flex items-center justify-center">
    <img
      src="/path-to-profile-pic.jpg"
      alt="Profile"
      className="w-8 h-8 rounded-full mr-2"
    />
    <span>Amit Sharma</span>
  </div>
  <div className="w-1/8 px-4 text-center">Acme Industries</div>
  <div className="w-1/8 px-4 text-center">amit.sharma@abc.com</div>
  <div className="w-1/8 px-4 text-center">+91 987654321</div>
  <div className="w-1/8 px-4 text-center">15</div>
  <div className="w-1/8 px-4 text-center">Mumbai</div>
  <div className="w-1/8 px-4 text-center">₹2,50,000</div>
  <div className="w-1/8 px-4 text-center">
    <div className="inline-block bg-purple-500 rounded-full ">
      <VisibilityIcon className="text-white" />
    </div>
  </div>
</div>


<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6 space-x-6">
  <div className="w-1/8 px-4 text-center flex items-center justify-center">
    <img
      src="/path-to-profile-pic.jpg"
      alt="Profile"
      className="w-8 h-8 rounded-full mr-2"
    />
    <span>Amit Sharma</span>
  </div>
  <div className="w-1/8 px-4 text-center">Acme Industries</div>
  <div className="w-1/8 px-4 text-center">amit.sharma@abc.com</div>
  <div className="w-1/8 px-4 text-center">+91 987654321</div>
  <div className="w-1/8 px-4 text-center">15</div>
  <div className="w-1/8 px-4 text-center">Mumbai</div>
  <div className="w-1/8 px-4 text-center">₹2,50,000</div>
  <div className="w-1/8 px-4 text-center">
    <div className="inline-block bg-purple-500 rounded-full ">
      <VisibilityIcon className="text-white" />
    </div>
  </div>
</div>
<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6 space-x-6">
  <div className="w-1/8 px-4 text-center flex items-center justify-center">
    <img
      src="/path-to-profile-pic.jpg"
      alt="Profile"
      className="w-8 h-8 rounded-full mr-2"
    />
    <span>Amit Sharma</span>
  </div>
  <div className="w-1/8 px-4 text-center">Acme Industries</div>
  <div className="w-1/8 px-4 text-center">amit.sharma@abc.com</div>
  <div className="w-1/8 px-4 text-center">+91 987654321</div>
  <div className="w-1/8 px-4 text-center">15</div>
  <div className="w-1/8 px-4 text-center">Mumbai</div>
  <div className="w-1/8 px-4 text-center">₹2,50,000</div>
  <div className="w-1/8 px-4 text-center">
    <div className="inline-block bg-purple-500 rounded-full ">
      <VisibilityIcon className="text-white" />
    </div>
  </div>
</div>
<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6 space-x-6">
  <div className="w-1/8 px-4 text-center flex items-center justify-center">
    <img
      src="/path-to-profile-pic.jpg"
      alt="Profile"
      className="w-8 h-8 rounded-full mr-2"
    />
    <span>Amit Sharma</span>
  </div>
  <div className="w-1/8 px-4 text-center">Acme Industries</div>
  <div className="w-1/8 px-4 text-center">amit.sharma@abc.com</div>
  <div className="w-1/8 px-4 text-center">+91 987654321</div>
  <div className="w-1/8 px-4 text-center">15</div>
  <div className="w-1/8 px-4 text-center">Mumbai</div>
  <div className="w-1/8 px-4 text-center">₹2,50,000</div>
  <div className="w-1/8 px-4 text-center">
    <div className="inline-block bg-purple-500 rounded-full ">
      <VisibilityIcon className="text-white" />
    </div>
  </div>
</div>

{/* Bottom sec */}
<div className="flex justify-between items-center mb-4 pl-6 pt-2 pr-6">
  <div className="flex space-x-4">
  <button
          onClick={() => handleClick('Month')}
          className={`px-4 py-2 ${activeButton === 'Month' ? 'bg-black text-white' : ' text-black'}`}
        >
         Month
        </button>
        <button
          onClick={() => handleClick('Week')}
          className={`px-4 py-2 ${activeButton === 'Week' ? 'bg-black text-white' : ' text-black'}`}
        >
          Week
        </button>
        <button
          onClick={() => handleClick('Day')}
          className={`px-4 py-2 ${activeButton === 'Day' ? 'bg-black text-white' : ' text-black'}`}
        >
          Day
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
<div className="border border-black p-4 bg-[#FFFFFF] ml-6 mr-6 mb-6">
      <div className="font-bold mb-2">Revenue by Client</div>
      <div className="h-64 bg-gray-200 flex justify-center items-center">
        <span className="text-gray-500">Placeholder for Content</span>
      </div>
    </div>


        </div>
        </div>
  );
};
export default Home;