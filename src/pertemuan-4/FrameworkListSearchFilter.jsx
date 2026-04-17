import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  /** Deklrasai state **/
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedTag, setSelectedTag] = useState("");

  /*Inisialisasi DataForm*/
		const [dataForm, setDataForm] = useState({
			searchTerm: "",
			selectedTag: "",
			/*Tambah state lain beserta default value*/
			});
		
		/*Inisialisasi Handle perubahan nilai input form*/
		const handleChange = (evt) => {
			const { name, value } = evt.target;
			setDataForm({
				...dataForm,
				[name]: value,
			});
		};

  /** Deklrasai Logic Search & Filter **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });
  /** Deklarasi pengambilan unique tags di frameworkData **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];
  return (
    <div className="p-8 bg-[#FDFBF7] min-h-screen font-sans">
      {/* Header dengan font yang lebih organik */}
      <div className="mb-12">
        <h1 className="text-4xl font-black text-[#3E2723] tracking-tight">
          Framework<span className="text-[#818B60]">Library.</span>
        </h1>
        <div className="h-1.5 w-20 bg-[#818B60] mt-2 rounded-full"></div>
      </div>

      <input
        type="text"
        name="searchTerm"
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={handleChange}
      />

      <select
        name="selectedTag"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={handleChange}
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFrameworks.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white border-[3px] border-[#3E2723] p-6 rounded-[24px] hover:shadow-[10px_10px_0px_0px_rgba(129,139,96,1)] transition-all duration-300 ease-in-out"
          >
            {/* Badge Tahun ala sticker */}
            <div className="absolute -top-3 -right-3 bg-[#818B60] text-white px-3 py-1 rounded-full text-[10px] font-bold border-2 border-[#3E2723] rotate-12 group-hover:rotate-0 transition-transform">
              EST. {item.details.releaseYear}
            </div>

            <h2 className="text-2xl font-black text-[#3E2723] mb-2 leading-none">
              {item.name}
            </h2>

            <p className="text-[#5D4037] text-sm font-medium leading-relaxed mb-4">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#ECF0E5] text-[#4F583D] px-3 py-1 text-[11px] font-bold rounded-lg border border-[#818B60]/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mt-auto">
              <div>
                <p className="text-[10px] text-[#8D6E63] uppercase font-bold tracking-widest">
                  Mastermind
                </p>
                <p className="text-sm font-bold text-[#3E2723]">
                  {item.details.developer}
                </p>
              </div>

              <a
                href={item.details.officialWebsite}
                className="h-10 w-10 flex items-center justify-center bg-[#3E2723] text-[#ECF0E5] rounded-full hover:bg-[#818B60] transition-colors"
                title="Visit Website"
              >
                <span className="text-xl">↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
