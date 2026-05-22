import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
// Import langsung dari path absolut lokal kamu
import productsData from "../data/products.json";

export default function Products() {
  return (
    <div id="dashboard-container" className="mt-4 px-4">
      <PageHeader title="Products" />

      {/* Container Tabel */}
      <div className="mt-6 overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100">
        <table className="w-full text-left border-collapse">
          {/* Header Tabel */}
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Product Name
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Code
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Brand
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
                Stock
              </th>
            </tr>
          </thead>

          {/* Isi Tabel Looping dari JSON */}
          <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
            {productsData.map((product) => {
              // LOGIKA MENENTUKAN WARNA STOK
              let stockColor = "";
              if (product.stock <= 15) {
                stockColor = "bg-red-50 text-red-700 border border-red-200"; // Menipis
              } else if (product.stock <= 40) {
                stockColor =
                  "bg-amber-50 text-amber-700 border border-amber-200"; // Sedang
              } else {
                stockColor =
                  "bg-emerald-50 text-emerald-700 border border-emerald-200"; // Aman
              }

              return (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50/80 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-gray-400">
                    #{product.id}
                  </td>
                  <td className="px-6 py-4">
                    <Link 
                      to={`/products/${product.id}`}
                      className="text-emerald-400 hover:text-emerald-500"
                    >
                      {product.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-gray-500">
                    {product.code}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{product.brand}</td>
                  <td className="px-6 py-4 font-semibold text-gray-800">
                    Rp {product.price.toLocaleString("id-ID")}
                  </td>
                  {/* Kolom Stok dengan Badge Dinamis */}
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`inline-block min-w-[75px] px-2.5 py-1 text-xs font-bold rounded-md ${stockColor}`}
                    >
                      {product.stock} Pcs
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
