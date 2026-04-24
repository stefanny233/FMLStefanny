import PageHeader from "../components/PageHeader";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div id="dashboard-container" className="mt-4">
      {/* Header */}
      <PageHeader />

      {/* Grid */}
      <div
        id="dashboard-grid"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4"
      >
        {/* Orders */}
        <div
          id="dashboard-orders"
          className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
        >
          <div id="orders-info" className="flex flex-col">
            <span id="orders-count" className="text-2xl font-bold">
              75
            </span>
            <span id="orders-text" className="text-gray-400 text-sm">
              Total Orders
            </span>
          </div>

          <div id="orders-icon" className="bg-blue-500 p-3 rounded-full">
            <FaShoppingCart className="text-3xl text-white" />
          </div>
        </div>

        {/* Delivered */}
        <div
          id="dashboard-delivered"
          className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
        >
          <div id="delivered-info" className="flex flex-col">
            <span id="delivered-count" className="text-2xl font-bold">
              175
            </span>
            <span id="delivered-text" className="text-gray-400 text-sm">
              Total Delivered
            </span>
          </div>

          <div id="delivered-icon" className="bg-green-500 p-3 rounded-full">
            <FaTruck className="text-3xl text-white" />
          </div>
        </div>

        {/* Canceled */}
        <div
          id="dashboard-canceled"
          className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
        >
          <div id="canceled-info" className="flex flex-col">
            <span id="canceled-count" className="text-2xl font-bold">
              40
            </span>
            <span id="canceled-text" className="text-gray-400 text-sm">
              Total Canceled
            </span>
          </div>

          <div id="canceled-icon" className="bg-red-500 p-3 rounded-full">
            <FaBan className="text-3xl text-white" />
          </div>
        </div>

        {/* Revenue */}
        <div
          id="dashboard-revenue"
          className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
        >
          <div id="revenue-info" className="flex flex-col">
            <span id="revenue-amount" className="text-2xl font-bold">
              Rp.128
            </span>
            <span id="revenue-text" className="text-gray-400 text-sm">
              Total Revenue
            </span>
          </div>

          <div id="revenue-icon" className="bg-yellow-500 p-3 rounded-full">
            <FaDollarSign className="text-3xl text-white" />
          </div>
        </div>
      </div>
      {/*TAMBAHAN: RECENT ORDERS*/}
      <div className="mt-8 px-4">
        {/* --- STAT CARDS --- */}

        {/* --- RECENT ORDERS CARD --- */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <h2 className="font-bold text-gray-800 text-lg">Recent Orders</h2>
            <button className="text-green-500 text-sm font-semibold hover:underline">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Total
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {[
                  {
                    id: "#001",
                    name: "Stefanny",
                    status: "Delivered",
                    color: "bg-green-100 text-green-700",
                    price: "Rp 50K",
                  },
                  {
                    id: "#002",
                    name: "Andi",
                    status: "Pending",
                    color: "bg-yellow-100 text-yellow-700",
                    price: "Rp 30K",
                  },
                  {
                    id: "#003",
                    name: "Budi",
                    status: "Canceled",
                    color: "bg-red-100 text-red-700",
                    price: "Rp 20K",
                  },
                ].map((order, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors group"
                  >
                    <td className="px-6 py-4 font-medium text-gray-700">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{order.name}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${order.color}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {order.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* ===================== [4] PROMO DESSERT ===================== */}
      <div className="mt-6 px-4">
        <div
          className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 
                  rounded-2xl p-6 text-white flex items-center justify-between shadow-lg
                  hover:scale-[1.02] transition"
        >
          {/* LEFT CONTENT */}
          <div className="flex flex-col">
            {/* Badge */}
            <span className="bg-white text-green-600 text-xs px-2 py-1 rounded-full w-fit mb-2 font-semibold">
              Limited Offer
            </span>

            <h2 className="text-2xl font-bold mb-2">
              Dessert Special Offer
            </h2>

            <p className="text-sm opacity-90 mb-3">
              Get 20% discount on all dessert menu this week!
            </p>

            <button className="bg-white text-green-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition w-fit">
              Order Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081986.png"
              className="w-28 h-28 drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
