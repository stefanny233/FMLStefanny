import PageHeader from "../components/PageHeader";

export default function FiturXyz() {
    return (
        <div id="fitur-xyz" className="min-h-screen bg-slate-50 pb-10">
            {/* Header */}
            <div className="p-5">
                <PageHeader title="Fitur XYZ" breadcrumb="Fitur XYZ / Fitur XYZ List" />
            </div>
            
            {/* Konten Halaman */}
            <div className="px-5">
                <p>Ini Halaman Fitur XYZ</p>
            </div>
        </div>
    );
}