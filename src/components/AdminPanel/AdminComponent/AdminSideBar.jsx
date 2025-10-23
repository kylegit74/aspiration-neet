import React from "react";
import { Home, Info, BookOpen, MessageCircle, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../../../Imagesall/logo.png';

function AdminSidebar() {
  const menuItems = [
    { icon: Home, label: "Home", href: "/admin/home" },

   
  ];

  return (
    <div className="h-screen bg-red-500 w-[15%] text-black  hidden lg:block fixed  text-white p-6 flex flex-col shadow-xl  ">
      {/* Logo Section */}
      <div className="mb-8 flex items-center space-x-3">
        <Link className="relative z-10 flex items-center" to={"/"}>
        <p className="text-2xl font-semibold text-white">AspirationIas</p>
        </Link>
        <div>
       
    
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-400 transition-colors duration-200"
              >
                <item.icon className="w-6 h-6 text-white hover:text-white transition-all duration-300" />
                <span className="font-medium text-lg text-white">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="border-t border-white/20 pt-6 mt-[300px]">
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg pb_bg_ylw text-black transition-colors duration-200 w-full text-red-300 hover:text-white">
          <LogOut className="w-5 h-5 text-black" />
          <span className="font-medium text-black">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;
