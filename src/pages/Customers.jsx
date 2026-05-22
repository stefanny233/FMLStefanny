import { useState } from "react";
import PageHeader from "../components/PageHeader";
import data from "../DummyData.json";

export default function Customers() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 pb-10">

      {/* Header */}
      <div className="p-5">
        <PageHeader
          title="Customers"
          breadcrumb="Customers / Customer List"
        >
          <button
            onClick={() => setShowModal(true)}
            className="bg-hijau text-white px-5 py-2 rounded-xl hover:opacity-90 transition font-medium shadow-md"
          >
            Add Customer
          </button>
        </PageHeader>
      </div>

      {/* Content */}
      <div className="px-5">

        <div className="bg-white rounded-3xl shadow-md p-8 border border-slate-100">

          {/* Header */}
          <div className="flex justify-between items-center mb-8">

            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Customer List
              </h1>

              <p className="text-gray-400 mt-1">
                Manage all customer data easily
              </p>
            </div>

            <div className="bg-hijau text-white px-6 py-3 rounded-2xl shadow-lg">
              <p className="text-sm opacity-80">
                Total Customers
              </p>

              <h1 className="text-2xl font-bold">
                {data.customers.length}
              </h1>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">

              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="py-4">Customer ID</th>
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Loyalty</th>
                </tr>
              </thead>

              <tbody>
                {data.customers.map((customer) => (
                  <tr
                    key={customer.customerId}
                    className="border-b hover:bg-slate-50 transition"
                  >
                    <td className="py-5 font-semibold text-gray-700">
                      {customer.customerId}
                    </td>

                    <td>{customer.customerName}</td>

                    <td>{customer.email}</td>

                    <td>{customer.phone}</td>

                    <td>
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold
                        ${
                          customer.loyalty === "Gold"
                            ? "bg-yellow-100 text-yellow-700"
                            : customer.loyalty === "Silver"
                            ? "bg-gray-200 text-gray-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {customer.loyalty}
                      </span>
                    </td>
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

            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">
                Add New Customer
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

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Customer ID
                </label>

                <input
                  type="text"
                  placeholder="Enter customer ID"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hijau"
                />
              </div>

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

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hijau"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Phone
                </label>

                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hijau"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Loyalty
                </label>

                <select className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hijau">
                  <option>Bronze</option>
                  <option>Silver</option>
                  <option>Gold</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-hijau text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Save Customer
              </button>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}