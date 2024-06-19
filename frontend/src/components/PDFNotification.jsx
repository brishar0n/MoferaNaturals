import { useState, useEffect } from 'react';
import PDFDownload from './PDFDownload';
import { motion } from 'framer-motion';

function SuccessModal({ htmlContent, doc_id, onClose }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -50 }} 
            transition={{ duration: 0.3 }} 
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none px-10"
        >
            <div className="relative w-auto max-w-3xl mx-auto my-6 z-50">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Success
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={onClose}
                        >
                            <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                x
                            </span>
                        </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                        <p className="text-lg leading-relaxed mt-2 mb-4">{htmlContent}</p>
                        <PDFDownload doc_id={doc_id} />
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </motion.div>
    );
}

export default function PDFNotification({ htmlContent, trigger, doc_id }) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
      setShowModal(false);
  };

  useEffect(() => {
      if (trigger) {
          setShowModal(true);
      }
  }, [trigger]); // Only run when trigger prop changes

  return (
      <>
          {showModal && (
              <SuccessModal
                  htmlContent={htmlContent}
                  doc_id={doc_id}
                  onClose={handleCloseModal}
              />
          )}
      </>
  );
}