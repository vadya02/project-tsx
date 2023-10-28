import React from 'react';
import { useState } from 'react';
import Login from '../Auth/Login';
import Registration from '../Auth/Registration';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../input.css'
const Header: React.FC = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const openRegistrationModal = () => setRegistrationModalOpen(true);
  const closeRegistrationModal = () => setRegistrationModalOpen(false);

  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl font-semibold">Лого сайта</div>
          <nav className="space-x-4">
            <button
              onClick={openLoginModal}
              className="text-white hover:underline">
              Вход
            </button>
            <button
              onClick={openRegistrationModal}
              className="text-white hover:underline">
              Регистрация
            </button>
            <button
              className="bg-blue-200 text-black active:bg-blue-500 
              font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => openLoginModal}
            ></button>
          </nav>
        </div>
      </div>

      {/* Компонент для входа */}
      <Login isOpen={loginModalOpen} onClose={closeLoginModal} />

      {/* Компонент для регистрации */}
      <Registration isOpen={registrationModalOpen} onClose={closeRegistrationModal} />
    </header>
  );
};

export default Header;
