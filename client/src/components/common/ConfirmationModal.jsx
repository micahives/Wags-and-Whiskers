import React from 'react';

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <p className="text-lg text-gray-800">{message}</p>
        <div className="mt-4 flex justify-end">
          <button onClick={onCancel} className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-md">Cancel</button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded-md">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;