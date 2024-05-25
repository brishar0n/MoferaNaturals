import React from "react";

function ConfirmationModal({ isOpen, onClose, onConfirm, isDryPage }) {
  return (
    isOpen && (
      <div id="popup-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-3xl shadow-lg w-96">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Confirm {isDryPage ? "Drying" : "Washing"}</h2>
          <p className="text-sm text-gray-600 mb-4">Are you sure you want to {isDryPage ? "dry" : "wash"} this batch of wet leaves? </p>
          
          {isDryPage && (
            <p className="text-sm text-gray-600 mb-4 italic">Make sure you have inserted dry leaves into all machines to start the process </p>
          )}
          
          <div className="flex justify-center">
            <button className="mr-2 px-4 py-2 bg-red-700 font-medium text-white rounded-2xl" onClick={onClose}>Cancel</button>
            <button className="px-4 py-2 bg-primary font-medium text-white rounded-2xl" onClick={onConfirm}>Confirm</button>
          </div>
        </div>
      </div>
    )
  );
}

export default ConfirmationModal;