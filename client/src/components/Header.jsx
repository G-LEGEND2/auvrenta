import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const admin = localStorage.getItem("adminToken");

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50 border-b-2 border-[#7a2530]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Auvrenta" className="h-10 w-10 rounded object-cover" />
          <span className="text-lg font-extrabold text-[#7a2530] leading-tight">
            AUVRENTA
            <br />
            <span className="text-xs font-semibold text-gray-700 tracking-widest">
              PROPERTY GROUP
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-[#7a2530]">Home</Link>
          <Link to="/search" className="hover:text-[#7a2530]">Search</Link>
          <Link to="/about" className="hover:text-[#7a2530]">About</Link>
          <Link to="/contact" className="hover:text-[#7a2530]">Contact</Link>
          {admin && (
            <>
              <Link to="/admin" className="text-[#7a2530] font-medium">Dashboard</Link>
              <button onClick={logout} className="text-red-600 hover:underline">Logout</button>
            </>
          )}
        </nav>

        <button className="md:hidden text-xl" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white px-4 py-3 flex flex-col gap-3">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/search" onClick={() => setOpen(false)}>Search</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          {admin && (
            <>
              <Link to="/admin" onClick={() => setOpen(false)}>Dashboard</Link>
              <button onClick={logout} className="text-red-600 text-left">Logout</button>
            </>
          )}
        </div>
      )}
    </header>
  );
}
