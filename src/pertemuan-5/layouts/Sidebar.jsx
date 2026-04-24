import { MdDashboard } from "react-icons/md";
import { FaShoppingCart, FaUsers, FaPlus } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className="w-64 h-screen bg-white flex flex-col justify-between p-4 border-r"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col mb-6">
        <span id="logo-title" className="font-poppins text-3xl font-bold">
          Sedap{" "}
          <b id="logo-dot" className="text-green-500">
            .
          </b>
        </span>

        <span id="logo-subtitle" className="font-barlow text-gray-400 text-sm">
          Modern Admin Dashboard
        </span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="flex-1">
        <ul id="menu-list" className="space-y-3">
          <li>
            <div
              id="menu-1"
              className="flex items-center p-2 rounded hover:bg-gray-100 cursor-pointer"
            >
              <MdDashboard className="mr-4 text-xl" />
              <span>Dashboard</span>
            </div>
          </li>

          <li>
            <div
              id="menu-2"
              className="flex items-center p-2 rounded hover:bg-gray-100 cursor-pointer"
            >
              <FaShoppingCart className="mr-4 text-xl" />
              <span>Orders</span>
            </div>
          </li>

          <li>
            <div
              id="menu-3"
              className="flex items-center p-2 rounded hover:bg-gray-100 cursor-pointer"
            >
              <FaUsers className="mr-4 text-xl" />
              <span>Customers</span>
            </div>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-6">
        <div
          id="footer-card"
          className="bg-gray-100 p-3 rounded flex justify-between items-center"
        >
          <div id="footer-text" className="text-xs">
            <span>Please organize your menus through button below!</span>

            <div
              id="add-menu-button"
              className="mt-2 bg-green-500 text-white px-2 py-1 rounded flex items-center justify-center cursor-pointer"
            >
              <FaPlus className="mr-2" />
              <span>Add Menus</span>
            </div>
          </div>

          <img
            id="footer-avatar"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            className="w-10 h-10 rounded-full bg-white p-1"
          />
        </div>

        <span id="footer-brand" className="block text-xs text-gray-400 mt-3">
          Sedap Restaurant Admin Dashboard
        </span>

        <p id="footer-copyright" className="text-xs text-gray-400">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}
