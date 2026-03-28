import Foto from "./components/Foto";
import InformasiPribadi from "./components/InformasiPribadi";
import Pendidikan from "./components/Pendidikan";
import Keahlian from "./components/Keahlian";
import Kontak from "./components/Kontak";
import Deskripsi from "./components/Deskripsi";

export default function BiodataDiri() {
  return (
    <div className="biodata-container">
      <div className="header">
        <h1>Portofolio Saya</h1>
        <p>Frontend Developer | React Enthusiast</p>
      </div>
      
      <div className="content">
        <Foto />
        <InformasiPribadi />
        <Deskripsi />
        <Pendidikan />
        <Keahlian />
        <Kontak />
      </div>
    </div>
  );
}