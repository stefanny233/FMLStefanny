import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
  return (
    <div
      id="header-container"
      className="flex justify-between items-center bg-white p-4 rounded shadow-sm mb-4"
    >
      {/* Search Bar */}
      <div id="search-bar" className="relative w-1/3">
        <input
          id="search-input"
          type="text"
          placeholder="Search menu, orders..."
          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 pr-10 
               text-sm focus:outline-none focus:ring-2 focus:ring-green-400 
               focus:bg-white transition"
        />

        <FaSearch
          id="search-icon"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 
               text-gray-400 text-sm pointer-events-none"
        />
      </div>

      {/* Icon & Profile Section */}
      <div id="icons-container" className="flex items-center gap-4">
        {/* Icons */}
        <div id="notification-icon" className="relative text-xl cursor-pointer">
          <FaBell />
          <span
            id="notification-badge"
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full"
          >
            50
          </span>
        </div>

        <div id="chart-icon" className="text-xl cursor-pointer">
          <FcAreaChart />
        </div>

        <div id="settings-icon" className="text-xl cursor-pointer">
          <SlSettings />
        </div>

        {/* Profile Section */}
        <div id="profile-container" className="flex items-center gap-2 ml-4">
          <span id="profile-text" className="text-sm text-gray-600">
            Hello, <b>Stefanny Huang</b>
          </span>

          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828791.png"
            className="w-5 h-5 mr-2"
          />
        </div>
      </div>
    </div>
  );
}
