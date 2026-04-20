import { useState } from "react";
import data from "./cafeData.json";

export default function AdminPage({ goGuest }) { // Pastikan goGuest diterima sebagai props
  const [form, setForm] = useState({
    search: "",
    category: "",
    tag: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const allCategory = [...new Set(data.map((item) => item.category))];
  const allTags = [...new Set(data.flatMap((item) => item.tags))];

  const filtered = data.filter((item) => {
    const search = form.search.toLowerCase();
    const matchSearch = item.name.toLowerCase().includes(search);
    const matchCategory = form.category ? item.category === form.category : true;
    const matchTag = form.tag ? item.tags.includes(form.tag) : true;
    return matchSearch && matchCategory && matchTag;
  });

  return (
    <div className="p-8 bg-[#F4F1EE] min-h-screen font-sans text-[#2D2424]">
      
      {/* HEADER - Terlihat lebih seperti Dashboard Resmi */}
      <div className="flex justify-between items-center mb-10 bg-white p-6 rounded-2xl shadow-sm border border-[#DCD7C9]">
        <div>
          <h1 className="text-3xl font-bold text-[#3E2723] flex items-center gap-3">
            <span className="bg-[#606C38] text-white p-2 rounded-lg text-sm">ADMIN</span>
            Manajemen Inventori
          </h1>
          <p className="text-gray-500 text-sm mt-1">Kelola data menu dan kategori toko Anda</p>
        </div>

        <button
          onClick={goGuest}
          className="bg-white text-[#3E2723] border-2 border-[#3E2723] px-6 py-2 rounded-full font-bold hover:bg-[#3E2723] hover:text-white transition-all duration-300"
        >
          Kembali ke Toko
        </button>
      </div>

      {/* FILTER BOX - Dikelompokkan dalam satu area putih yang bersih */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#DCD7C9] mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Cari Item</label>
            <input
              type="text"
              name="search"
              placeholder="Ketik nama kopi..."
              onChange={handleChange}
              className="p-3 border border-[#DCD7C9] rounded-xl focus:ring-2 focus:ring-[#606C38] outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Urutkan Kategori</label>
            <select
              name="category"
              onChange={handleChange}
              className="p-3 border border-[#DCD7C9] rounded-xl focus:ring-2 focus:ring-[#606C38] outline-none bg-white"
            >
              <option value="">Semua Kategori</option>
              {allCategory.map((c, i) => (
                <option key={i} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Filter Label</label>
            <select
              name="tag"
              onChange={handleChange}
              className="p-3 border border-[#DCD7C9] rounded-xl focus:ring-2 focus:ring-[#606C38] outline-none bg-white"
            >
              <option value="">Semua Tag</option>
              {allTags.map((t, i) => (
                <option key={i} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* TABLE SECTION */}
      <div className="bg-white rounded-2xl shadow-md border border-[#DCD7C9] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#3E2723] text-white">
              <th className="p-5 font-semibold uppercase text-xs tracking-widest">Produk</th>
              <th className="p-5 font-semibold uppercase text-xs tracking-widest text-center">Kategori</th>
              <th className="p-5 font-semibold uppercase text-xs tracking-widest text-center">Harga Satuan</th>
              <th className="p-5 font-semibold uppercase text-xs tracking-widest text-center">Rating Pelanggan</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#EEEAE3]">
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <tr key={item.id} className="hover:bg-[#FDFBF7] transition-colors">
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <img src={item.image} className="w-10 h-10 rounded-lg object-cover border border-gray-200" alt="" />
                      <span className="font-bold text-[#3E2723]">{item.name}</span>
                    </div>
                  </td>
                  <td className="p-5 text-center">
                    <span className="bg-[#F0EBE3] text-[#3E2723] px-3 py-1 rounded-md text-xs font-bold uppercase">
                      {item.category}
                    </span>
                  </td>
                  <td className="p-5 text-center font-mono font-semibold text-[#283618]">
                    Rp {item.price.toLocaleString()}
                  </td>
                  <td className="p-5 text-center">
                    <div className="inline-flex items-center bg-[#FEFAE0] px-3 py-1 rounded-full border border-[#DDA15E]">
                      <span className="text-[#BC6C25] font-bold">⭐ {item.rating}</span>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-12 text-center text-gray-400 italic">
                  Data menu tidak ditemukan dalam database...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex justify-between items-center text-gray-400 text-xs px-2 uppercase tracking-tighter">
        <span>Total Item: {filtered.length}</span>
        <span>Sistem Inventori Kopi v1.0</span>
      </div>
    </div>
  );
}