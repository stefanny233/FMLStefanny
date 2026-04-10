export default function InputField({ label, type, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-purple-900 font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-800 rounded"
      />
    </div>
  );
}
