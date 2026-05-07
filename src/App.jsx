import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      {/* Layout Wrapper */}
      <div id="layout-wrapper" className="flex flex-row flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div id="main-content" className="flex-1 p-4">
          <Header />

          {/*Tambahan routing */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/error400"
              element={
                <ErrorPage
                  code="400"
                  description="Bad Request"
                  image="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
                />
              }
            />

            <Route
              path="/error401"
              element={
                <ErrorPage
                  code="401"
                  description="Unauthorized"
                  image="https://cdn-icons-png.flaticon.com/512/564/564619.png"
                />
              }
            />

            <Route
              path="/error403"
              element={
                <ErrorPage
                  code="403"
                  description="Forbidden"
                  image="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
                />
              }
            />

            <Route
              path="*"
              element={
                <ErrorPage
                  code="404"
                  description="Page Not Found"
                  image="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
