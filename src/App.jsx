import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "./components/Loading";

const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Orders = React.lazy(() => import("./pages/Orders"))
const Customers = React.lazy(() => import("./pages/Customers"))
const NotFound = React.lazy(() => import("./pages/NotFound"))
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))

const Products = React.lazy(() => import("./pages/Products"))
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))

export default function App() {
    return (
      <Suspense fallback={<Loading />}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} /> 

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
      </Route>
      <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
        </Route>
    </Routes>
    </Suspense>
  );
}
