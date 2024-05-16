import { useState } from "react";

function AddNotesModal({ isOpen, toggleModal, handleEdit, handleSave,savedNotes }) {
    const [editableNotes, setEditableNotes] = useState(savedNotes || ''); // State to track the editable notes

    const handleChange = (event) => {
        setEditableNotes(event.target.value);
    };

    return (
        <>
            {/* Main modal */}
            {isOpen && (
                <div id="static-modal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full bg-black bg-opacity-50 bottom-0 flex">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-lg shadow">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Add notes
                                </h3>
                                <button onClick={toggleModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="static-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="border-black border-solid p-4 md:p-5">
                                {savedNotes ? (
                                    <textarea value={editableNotes} onChange={handleChange} className="w-full rounded-md bg-quinary py-2 px-2 text-xs mb-3" rows="4" />
                                ) : (
                                    <input type="text" value={editableNotes} onChange={handleChange} className="w-full rounded-md bg-quinary py-2 px-2 text-xs mb-3" required />
                                )}
                            </div>
                            {/* Modal footer */}
                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                                <button onClick={handleSave} data-modal-hide="static-modal" type="button" className="text-white bg-secondary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save</button>
                                <button onClick={handleEdit} data-modal-hide="static-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AddNotesModal;