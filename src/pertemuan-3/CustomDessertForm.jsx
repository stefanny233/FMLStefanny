import { useState } from "react";
import InputField from "./components/InputField";
import cakeHero from "../assets/cake-hero.jpg"; 

const CustomDessertForm = () => {
  const [formData, setFormData] = useState({ nama: "", jumlah: "", catatan: "", dessert: "", topping: "" });
  const [errors, setErrors] = useState({});
  const [isDone, setIsDone] = useState(false);

  const dessertMenu = [
    { val: "Cake", label: "Classic Cake (Rp 20.000)", price: 20000 }, 
    { val: "Ice Cream", label: "Velvet Ice Cream (Rp 10.000)", price: 10000 }
  ];
  const toppingMenu = [
    { val: "Coklat", label: "Belgian Chocolate (Rp 5.000)", price: 5000 }, 
    { val: "Keju", label: "Cheddar Cheese (Rp 5.000)", price: 5000 }
  ];

  const validate = () => {
    let err = {};
    if (!formData.nama) err.nama = "Nama wajib diisi";
    else if (formData.nama.length < 3) err.nama = "Minimal 3 huruf";
    if (!formData.jumlah || formData.jumlah < 1) err.jumlah = "Minimal 1 porsi";
    if (!formData.dessert) err.dessert = "Pilih menu utama";
    if (!formData.topping) err.topping = "Pilih topping";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const total = () => {
    const dPrice = dessertMenu.find(m => m.val === formData.dessert)?.price || 0;
    const tPrice = toppingMenu.find(m => m.val === formData.topping)?.price || 0;
    return (dPrice + tPrice) * (parseInt(formData.jumlah) || 0);
  };

  return (
    <div className="min-h-screen bg-[#fff5f5] flex items-center justify-center py-12 px-6">
      {/* Container Utama: Lebar (max-w-4xl) dan Flex */}
      <div className="max-w-4xl w-full bg-white rounded-[3rem] shadow-[0_35px_70px_-15px_rgba(0,0,0,0.1)] overflow-hidden border-[8px] border-[#fbcfe8] flex flex-col md:flex-row">
        
        {/* SISI KIRI: Area Gambar & Judul */}
        <div className="md:w-1/2 relative min-h-[400px] border-b-[8px] md:border-b-0 md:border-r-[8px] border-[#fbcfe8]">
          <img 
            src={cakeHero} 
            alt="Passie Treats Hero" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay teks di kiri bawah */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#d44161]/90 via-[#d44161]/20 to-transparent p-12 flex flex-col justify-end">
            <h2 className="text-5xl font-serif font-black text-white leading-tight">Passie <br/> Treats</h2>
            <p className="text-pink-100 text-sm mt-4 font-medium tracking-[0.2em] uppercase">Premium Dessert House</p>
            <div className="w-16 h-1 bg-white mt-6"></div>
          </div>
        </div>

        {/* SISI KANAN: Form & Result */}
        <div className="md:w-1/2 p-10 md:p-14 bg-white overflow-y-auto max-h-[800px]">
          <form onSubmit={(e) => { e.preventDefault(); if(validate()) setIsDone(true); else setIsDone(false); }} className="space-y-5">
            <InputField label="Nama Pemesan" placeholder="Your name" value={formData.nama} error={errors.nama} onChange={(e)=>setFormData({...formData, nama: e.target.value})} />
            
            <div className="grid grid-cols-2 gap-4">
              <InputField label="Jumlah" type="number" value={formData.jumlah} error={errors.jumlah} onChange={(e)=>setFormData({...formData, jumlah: e.target.value})} />
              <InputField label="Dessert" isSelect options={dessertMenu} value={formData.dessert} error={errors.dessert} onChange={(e)=>setFormData({...formData, dessert: e.target.value})} />
            </div>

            <InputField label="Topping" isSelect options={toppingMenu} value={formData.topping} error={errors.topping} onChange={(e)=>setFormData({...formData, topping: e.target.value})} />
            <InputField label="Catatan" placeholder="Contoh: Kurangi Gula ya..." value={formData.catatan} error={errors.catatan} onChange={(e)=>setFormData({...formData, catatan: e.target.value})} />

            <button className="w-full bg-[#d44161] hover:bg-[#b0304a] text-white py-4 rounded-2xl font-black text-lg shadow-xl transition-all transform active:scale-95 border-b-4 border-[#8b1e36]">
              KONFIRMASI PESANAN
            </button>
          </form>

          {/* Invoice Section di bawah Form */}
          <div className="mt-8 transition-all duration-500">
            {isDone && (
              <div className="p-6 bg-[#fff9fa] rounded-[2rem] border-4 border-[#fbcfe8] shadow-inner animate-in fade-in zoom-in">
                <div className="flex justify-between items-center border-b-2 border-dashed border-[#fbcfe8] pb-4 mb-4">
                   <span className="text-[10px] font-black text-[#d44161] tracking-widest uppercase italic">Invoice Summary</span>
                   <span className="text-xs font-bold text-gray-400">#{Math.floor(Math.random()*9000)}</span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <p className="flex justify-between"><span className="text-gray-400 font-bold uppercase text-[10px]">Item</span> <span className="font-bold text-gray-700">{formData.jumlah}x {formData.dessert}</span></p>
                  <p className="flex justify-between"><span className="text-gray-400 font-bold uppercase text-[10px]">Total</span> <span className="text-2xl font-serif font-black text-[#d44161]">Rp {total().toLocaleString()}</span></p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CustomDessertForm;