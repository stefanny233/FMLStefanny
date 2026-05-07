import { useState } from "react";
import PageHeader from "../components/PageHeader";
import data from "../dummyData.json";

export default function Orders() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 pb-10">
      {/* Header */}
      <div className="p-5">
        <PageHeader title="Orders" breadcrumb="Orders / Order List">
          <button
            onClick={() => setShowModal(true)}
            className="bg-hijau text-white px-5 py-2 rounded-xl hover:opacity-90 transition font-medium shadow-md"
          >
            Add Order
          </button>
        </PageHeader>
      </div>

      {/* Content */}
      <div className="px-5">
        <div className="bg-white rounded-3xl shadow-md p-8 border border-slate-100">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Order List</h1>

              <p className="text-gray-400 mt-1">
                Manage all customer orders easily
              </p>
            </div>

            <div className="bg-hijau text-white px-6 py-3 rounded-2xl shadow-lg">
              <p className="text-sm opacity-80">Total Orders</p>

              <h1 className="text-2xl font-bold">{data.orders.length}</h1>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="py-4">Order ID</th>
                  <th>Customer Name</th>
                  <th>Status</th>
                  <th>Total Price</th>
                  <th>Order Date</th>
                </tr>
              </thead>

              <tbody>
                {data.orders.map((order) => (
                  <tr
                    key={order.orderId}
                    className="border-b hover:bg-slate-50 transition"
                  >
                    <td className="py-5 font-semibold text-gray-700">
                      {order.orderId}
                    </td>

                    <td>{order.customerName}</td>

                    <td>
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold
                        ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>

                    <td>{order.totalPrice}</td>

                    <td>{order.orderDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">
                Add New Order
              </h1>

              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-red-500 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Form */}
            <form className="space-y-5">
              {/* Order ID */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Order ID
                </label>

                <input
                  type="text"
                  placeholder="Enter order ID"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hijau"
                />
              </div>

              {/* Customer Name */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Customer Name
                </label>

                <input
                  type="text"
                  placeholder="Enter customer name"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hijau"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Status
                </label>

                <select className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hijau">
                  <option>Pending</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
              </div>

              {/* Total Price */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Total Price
                </label>

                <input
                  type="text"
                  placeholder="Enter total price"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hijau"
                />
              </div>

              {/* Order Date */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Order Date
                </label>

                <input
                  type="date"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hijau"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-hijau text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Save Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
