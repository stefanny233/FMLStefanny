import { useState } from "react";
import data from "./cafeData.json";

export default function GuestPage({ goAdmin }) {
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
    <div className="p-8 bg-[#F1F3EC] min-h-screen font-sans text-[#1A2421]">
      
      {/* HEADER - High End Matcha Aesthetic */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-16 relative">
        <div className="relative">
          <div className="absolute -left-4 -top-2 w-12 h-12 bg-[#DCE5C8] rounded-full blur-2xl opacity-60"></div>
          <h1 className="text-5xl font-black text-[#2D3A1A] tracking-tighter uppercase italic">
            Matcha <span className="text-[#606C38] not-italic font-light">&</span> Co.
          </h1>
          <p className="text-[#606C38] font-bold tracking-[0.3em] text-[10px] uppercase ml-1">The Art of Premium Brewing</p>
        </div>

        <button
          onClick={goAdmin}
          className="relative group overflow-hidden bg-[#2D3A1A] text-[#F1F3EC] px-8 py-3 rounded-full font-bold shadow-[0_10px_20px_rgba(45,58,26,0.3)] hover:shadow-[0_15px_30px_rgba(96,108,56,0.4)] transition-all duration-500"
        >
          <span className="relative z-10"> Admin</span>
          <div className="absolute inset-0 bg-[#606C38] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
        </button>
      </div>

      {/* FILTER SECTION - Premium Rounded Gaya Minimalis */}
      <div className="max-w-7xl mx-auto mb-16 bg-white p-8 rounded-[40px] shadow-[20px_20px_60px_#d9dbd4,-20px_-20px_60px_#ffffff] border border-white/50">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black text-[#606C38] uppercase tracking-[0.2em] ml-2">Discovery</span>
            <input
              type="text"
              name="search"
              placeholder="Apa yang ingin Anda minum?"
              onChange={handleChange}
              className="p-4 bg-[#F8F9F5] border-2 border-transparent focus:border-[#606C38] rounded-2xl outline-none transition-all placeholder:text-gray-300 font-medium"
            />
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black text-[#606C38] uppercase tracking-[0.2em] ml-2">Collections</span>
            <select
              name="category"
              onChange={handleChange}
              className="p-4 bg-[#F8F9F5] border-2 border-transparent focus:border-[#606C38] rounded-2xl outline-none font-medium text-[#2D3A1A] appearance-none"
            >
              <option value="">Semua Kategori</option>
              {allCategory.map((c, i) => <option key={i} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black text-[#606C38] uppercase tracking-[0.2em] ml-2">Mood</span>
            <select
              name="tag"
              onChange={handleChange}
              className="p-4 bg-[#F8F9F5] border-2 border-transparent focus:border-[#606C38] rounded-2xl outline-none font-medium text-[#2D3A1A]"
            >
              <option value="">Pilih Karakter</option>
              {allTags.map((t, i) => <option key={i} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-[35px] p-4 transition-all duration-500 hover:-translate-y-4 shadow-sm hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-transparent hover:border-[#DCE5C8]"
          >
            {/* Image dengan Border Gaya Organik */}
            <div className="relative overflow-hidden rounded-[25px] h-72 mb-6">
              <img
                src={item.image}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                alt={item.name}
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                <span className="text-[10px] font-black text-[#2D3A1A] uppercase tracking-widest">{item.category}</span>
              </div>
            </div>

            <div className="px-4 pb-4">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h2 className="text-2xl font-black text-[#2D3A1A] leading-none mb-2">{item.name}</h2>
                  <div className="flex gap-2">
                    {item.tags.slice(0,2).map((tag, i) => (
                      <span key={i} className="text-[9px] font-bold text-[#606C38] border border-[#606C38]/20 px-2 py-0.5 rounded-md uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center bg-[#FEFAE0] px-3 py-1 rounded-full border border-[#DDA15E]/30">
                  <span className="text-[#BC6C25] text-xs font-black italic">⭐ {item.rating}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 pt-6 border-t border-[#F1F3EC]">
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-bold tracking-tighter">Price</span>
                  <p className="text-2xl font-black text-[#283618]">
                    Rp {item.price.toLocaleString()}
                  </p>
                </div>
                
                <a 
  href={item.externalLink || "https://www.starbucks.com/menu"} 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-[#606C38] w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#606C38]/30 hover:bg-[#2D3A1A] transition-colors group cursor-pointer"
>
  <span className="group-hover:translate-x-1 transition-transform">→</span>
</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER LUXURY */}
      <div className="mt-32 pb-12 text-center">
        <div className="w-20 h-[2px] bg-[#606C38] mx-auto mb-8 opacity-20"></div>
        <p className="text-[#606C38] font-black uppercase tracking-[0.5em] text-[10px]">
          Luxury Taste • Premium Quality • Est. 2026
        </p>
      </div>
    </div>
  );
}