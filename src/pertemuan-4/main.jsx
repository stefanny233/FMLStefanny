import { useState } from "react";
import { createRoot } from "react-dom/client";
import GuestPage from "./GuestPage";
import AdminPage from "./AdminPage";

function App() {
  const [page, setPage] = useState("guest");

  return (
    <>
      {page === "guest" && <GuestPage goAdmin={() => setPage("admin")} />}
      {page === "admin" && <AdminPage goGuest={() => setPage("guest")} />}
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);