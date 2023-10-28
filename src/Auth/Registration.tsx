import React from 'react';

type RegistrationProps = {
  isOpen: boolean;
  onClose: () => void;
}

const Registration: React.FC<RegistrationProps> = ({ isOpen, onClose }) => {
  return (
    isOpen ? (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="modal-header">
              <h3 className="text-2xl font-semibold">Регистрация</h3>
            </div>
            <div className="modal-body">
              {/* Форма регистрации */}
              {/* Добавьте форму регистрации с необходимыми полями */}
            </div>
            <div className="modal-footer py-4 text-right px-6">
              <button onClick={onClose} className="text-sm bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600">Закрыть</button>
            </div>
          </div>
        </div>
      </div>
    ) : null
  );
};

export default Registration;
