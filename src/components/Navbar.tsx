import logo from "../assets/LOGO_DEVOPS_SO_GLOBO2 BRANCO.png";
import { navigations } from "../constants/index.jsx";

import { useNavigate } from "react-router-dom";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [mobileModal, setMobileModal] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setMobileModal(!mobileModal);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="w-34 h-12 mr-2" src={logo} alt="logo" />
            {/* <span className="text-xl tracking-tight">Tecnology</span> */}
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navigations.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <button
              className="py-2 px-3 border rounded-md"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              onClick={handleRegister}
              className="bg-gradient-to-r  from-blue-500 to-blue-800 py-2 px-3 border rounded-md"
            >
              Criar Conta
            </button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button className="" onClick={toggleModal}>
              {mobileModal ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileModal && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navigations.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-6">
              <button
                className="py-2 px-3 border rounded-md"
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                onClick={handleRegister}
                className="py-2 px-3 border rounded-md bg-gradient-to-r from-blue-500 to-blue-800"
              >
                Criar Conta
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
