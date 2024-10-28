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
          <h1 className="text-2xl font-bold">Cash flow</h1>
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
             <div class="grid grid-cols-3 gap-4 p-6 pt-8 ">
  
  <div class="col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
    {/* box1 */}
    <div class="h-full bg-white p-4 border border-black ">
    <div className="flex justify-between items-center ">
                        <h3 className="text-xl font-semibold">Stripe<span className="text-base font-normal ml-2">Accept card payments</span></h3>
                        <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" class="sr-only peer"></input>
      <div class="w-11 h-6 bg-black peer-focus:outline-none  rounded-full peer dark:black"></div>
      <span class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full"></span>
    </label>
                    </div>
                    <div className=" flex-grow pt-3 ">
                        <p>European cards: 2.10% + ₹20 per transaction</p>
                        <p>Foreign cards & AMEX: 3.60% + ₹20 per transaction</p>
                        <div className="flex space-x-7 pt-3 ">
                        <img src="/path-to-icons/apple.png" alt="Apple" />
                        <img src="/path-to-icons/amex.png" alt="America" />
                        <img src="/path-to-icons/visa.png" alt="Visa" />
                        <button className="text-purple-500  ">See history</button>
                        </div>
                </div>
    </div>
    {/* box2 */}
    <div class="h-full bg-white p-4 border border-black ">
    <div className="flex justify-between items-center ">
                        <h3 className="text-xl font-semibold">PayPal<span className="text-base font-normal ml-2">Accept PayPal</span></h3>
                        <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" class="sr-only peer"></input>
      <div class="w-11 h-6 bg-black peer-focus:outline-none  rounded-full peer dark:black "></div>
      <span class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full"></span>
    </label>
                    </div>
                    <p className="flex-grow pt-3 ">Transaction Fees Apply: Standard PayPal fees per transaction.</p>
                    <div className="flex justify-between items-center pt-3 ">
                    <img src="/path-to-icons/paypal.png" alt="PayPal" />
                    <button className="text-purple-500 ">See history</button>
                    </div>
    </div>
    {/* box3 */}
    <div class="h-full bg-white p-4 border border-black ">
    <div className="flex justify-between items-center ">
                        <h3 className="text-xl font-semibold">Razorpay<span className="text-base font-normal ml-2">Accept Razorpay</span></h3>
                        <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" class="sr-only peer"></input>
      <div class="w-11 h-6 bg-black peer-focus:outline-none  rounded-full peer dark:black "></div>
      <span class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full"></span>
    </label>

                    </div>
                    <p className="flex-grow pt-3 ">Transaction Fees Apply: Standard Razorpay fees per transaction.</p>
                    <div className="flex justify-between items-center pt-3 ">
                    <img src="/path-to-icons/razorpay.png " alt="Razorpay" />
                    <button className="text-purple-500 mt-auto">See history</button>
                    </div>
                
    </div>
    {/* box4 */}
    <div class="h-full bg-white p-4 border border-black ">
    <div className="flex justify-between items-center ">
                        <h3 className="text-xl font-semibold">Estimate deposit</h3>
                        <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" class="sr-only peer"></input>
      <div class="w-11 h-6 bg-black peer-focus:outline-none  rounded-full peer dark:black "></div>
      <span class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full"></span>
    </label>
    </div>
    
                    <p className="flex-grow pt-6 pb-3 ">Let clients pay estimate deposits using offline payment methods, such as cash and checks.</p>
                    <button className="bg-purple-500 text-white py-2 px-4 border border-black mt-9 w-full ">
                    <AddCircleIcon className=" text-black mr-2 " />
                      Add offline payment method</button>
    </div>
  </div>

  <div class="grid grid-rows-3 gap-4">

    <div class="h-full bg-white p-4 border border-black ">
    <div className="flex justify-between items-center ">
                        <h3 className="text-xl font-semibold">Tips</h3>
                        <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" class="sr-only peer"></input>
      <div class="w-11 h-6 bg-black peer-focus:outline-none  rounded-full peer dark:black "></div>
      <span class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full"></span>
    </label>
                    </div>
                    <div className=" flex-grow pt-3 ">
                        <p>Let customers add a tip when they pay online.</p>
                        </div>
    </div>
    <div class="h-full bg-white p-4 border border-black ">
    <div className="flex justify-between items-center ">
                        <h3 className="text-xl font-semibold">Remittance advice</h3>
                        <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" class="sr-only peer"></input>
      <div class="w-11 h-6 bg-black peer-focus:outline-none  rounded-full peer dark:bg-black "></div>
      <span class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full"></span>
    </label>
                    </div>
                    <div className=" flex-grow pt-3">
                        <p>Show remittance advice at the bottom of an invoice so clients can attach payments.</p>
                        </div>
    </div>
    <div class="h-full bg-white p-4 border border-black ">
    <div className="flex justify-between items-center mb-4">
    <h3 className="text-xl font-semibold">Invoice due date</h3>
                    </div>
                    <p>Payment terms</p>
                    <select className="border border-black p-2 w-full">
                      <option>Same day</option>
                      </select>

                    <p>Terms will be applied to all future invoices</p>
    </div>
  </div>
</div>
<div className="flex justify-between mb-4 pl-6 pr-6 pb-0">
  <div className="flex space-x-4">
  <button
          onClick={() => handleClick('Recent Transactions')}
          className={`px-4 py-2 ${activeButton === 'Recent Transactions' ? 'bg-black text-white' : ' text-black'}`}
        >
          Recent Transactions
        </button>
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
    
    {/* Invoice Details Table */}
    
    <div className="flex font-bold border py-2 border-black mb-4 shadow bg-[#FFFFFF] ml-6 mr-6  mb-2 ">
  <div className="w-1/5 px-4 text-center ">Client</div>
  <div className="w-1/5 px-4 text-center ">Date & time</div>
  <div className="w-1/5 px-4 text-center ">Transaction</div>
  <div className="w-1/5 px-4 text-center ">Amount</div>
  <div className="w-1/5 px-4 text-center">Platform fee</div>
  <div className="w-1/5 px-4 text-center">Status</div>
</div>

<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6 ">
<div className="flex items-center w-1/6 px-4">
    <img
      src="https://via.placeholder.com/30" 
      alt="Profile"
      className="w-8 h-8 rounded-full mr-2" 
    />
    <span className="text-center">Acme Industries</span>
  </div>
  <div className=" w-1/6 px-4 text-center ">07 Aug 2024, 11:45AM</div>
  <div className=" w-1/6 px-4 text-center">Transfer</div>
  <div className="w-1/6 px-4 text-center">₹1,20,000.00</div>
  <div className=" w-1/6 px-4 text-center">₹1,00.00</div>
  <div className="w-32 ml-10 px-6 text-center bg-yellow-500">Pending</div>
</div>

<div className="flex items-center border-l border-r border-black py-2 bg-[#FFFFFF] ml-6 mr-6">
<div className="flex items-center w-1/6 px-4">
    <img
      src="https://via.placeholder.com/30" 
      alt="Profile"
      className="w-8 h-8 rounded-full mr-2" 
    />
    <span className="text-center">Acme Industries</span>
  </div>
  <div className=" w-1/6 px-4 text-center ">07 Aug 2024, 11:45AM</div>
  <div className=" w-1/6 px-4 text-center">Transfer</div>
  <div className="w-1/6 px-4 text-center">₹1,20,000.00</div>
  <div className=" w-1/6 px-4 text-center">₹1,00.00</div>
  <div className="w-32 ml-10 px-6 text-center bg-green-500">Completed</div>
</div>


<div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6">
<div className="flex items-center w-1/6 px-4">
    <img
      src="https://via.placeholder.com/30" 
      alt="Profile"
      className="w-8 h-8 rounded-full mr-2" 
    />
    <span className="text-center">Acme Industries</span>
  </div>
  <div className=" w-1/6 px-4 text-center ">06 Aug 2024, 09:20AM</div>
  <div className=" w-1/6 px-4 text-center">Transfer</div>
  <div className="w-1/6 px-4 text-center">₹30,000.00</div>
  <div className=" w-1/6 px-4 text-center">₹00.00</div>
  <div className=" w-32 ml-10 px-6 text-center bg-red-500">Failed</div>
</div>
</div>
<div>
  


        
        </div>
        </div>
  );
};
export default Home;