export default function PageHeader() {
    return (
        <div
            id="pageheader-container"
            className="flex justify-between items-center bg-white p-4 rounded shadow-sm mb-4"
        >
            {/* Left */}
            <div
                id="pageheader-left"
                className="flex flex-col"
            >
                <span
                    id="page-title"
                    className="font-poppins text-2xl font-bold text-gray-800"
                >
                    Dashboard
                </span>

                <div
                    id="breadcrumb-links"
                    className="flex items-center text-sm text-gray-400 mt-1"
                >
                    <span
                        id="breadcrumb-home"
                        className="hover:text-gray-600 cursor-pointer"
                    >
                        Dashboard
                    </span>

                    <span
                        id="breadcrumb-separator"
                        className="mx-2"
                    >
                        /
                    </span>

                    <span
                        id="breadcrumb-current"
                        className="text-gray-600"
                    >
                        Order List
                    </span>
                </div>
            </div>

            Right
            <div id="action-button">
                <button
                    id="add-button"
                    className="bg-hijau text-white px-4 py-2 rounded-lg"
                >
                    Add Button
                </button>
            </div>
        </div>
    );
}