import AdminSidebar from "../AdminComponent/AdminSideBar";
import { Routes, Route } from "react-router-dom";
import AdminHome from "../AdminPages/Home";

function AdminRoute() {
  return (
    <div className="flex w-[100%]">
      <AdminSidebar />
      <div className="flex-1 p-6 w-[100%] lg:w-[85%] ml-[15%]">
        <Routes>
          <Route path="home" element={<AdminHome />} />
          <Route path="inspiration" element={<div>Inspiration</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminRoute;
