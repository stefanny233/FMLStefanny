const InputField = ({ label, type, value, onChange, error, placeholder, options, isSelect }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold text-gray-700 mb-1">{label}</label>
      {isSelect ? (
        <select
          value={value}
          onChange={onChange}
          className={`w-full p-2 border rounded-lg bg-white ${error ? "border-red-500" : "border-pink-200"}`}
        >
          <option value=""> Pilih {label} </option>
          {options.map((opt) => (
            <option key={opt.val} value={opt.val}>{opt.label}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full p-2 border rounded-lg ${error ? "border-red-500" : "border-pink-200"}`}
        />
      )}
      {/* Alert Error di bawah input */}
      {error && <p className="text-red-500 text-[10px] mt-1 italic">⚠️ {error}</p>}
    </div>
  );
};
export default InputField;

