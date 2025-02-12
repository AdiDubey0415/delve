"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 p-5 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}
      >
        <nav className="space-y-3 items-center">
          <Link
            href="/projects"
            className={`block p-3 rounded hover:bg-gray-700 ${
              pathname === "/projects" ? "bg-blue-600" : "bg-gray-800"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/tables"
            className={`block p-3 rounded hover:bg-gray-700 ${
              pathname === "/tables" ? "bg-blue-600" : "bg-gray-800"
            }`}
          >
            Tables
          </Link>
          <Link
            href="/users"
            className={`block p-3 rounded hover:bg-gray-700 ${
              pathname === "/users" ? "bg-blue-600" : "bg-gray-800"
            }`}
          >
            Users
          </Link>
          <Link
            href="/logs"
            className={`block p-3 rounded hover:bg-gray-700 ${
              pathname === "/logs" ? "bg-blue-600" : "bg-gray-800"
            }`}
          >
            Logs
          </Link>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
