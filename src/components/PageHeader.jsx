export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div
      id="pageheader-container"
      className="flex justify-between items-center bg-white p-4 rounded shadow-sm mb-4"
    >
      {/* Left */}
      <div id="pageheader-left" className="flex flex-col">
        <span
          id="page-title"
          className="font-poppins text-2xl font-bold text-gray-800"
        >
          {title}
        </span>

        <div
          id="breadcrumb-links"
          className="flex items-center text-sm text-gray-400 mt-1"
        >
          <span
            id="breadcrumb-home"
            className="hover:text-gray-600 cursor-pointer"
          >
            {breadcrumb}
          </span>
        </div>
      </div>

      {/* Right */}
      <div id="action-button">{children}</div>
    </div>
  );
}
