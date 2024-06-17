import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const FailedNotification = ({ htmlContent, trigger }) => {
  const [show, setShow] = useState(false);

  const showError = () => {
    withReactContent(Swal).fire({
      icon: 'error',
      title: "<p style='color:#016B4d'>Failed!</p>",
      html: `<p style='color:#016B4d'>${htmlContent}</p>`,
      confirmButtonColor: '#016B45',
      confirmButtonText: 'Done',
      customClass: {
        confirmButton: 'sweet_confirmbuttonImportant',
        popup: 'rounded-3xl w-96 montserrat',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setShow(false); // Close the notification
      }
    });
  };

  useEffect(() => {
    if (trigger) {
      setShow(true);
    }
  }, [trigger]);

  useEffect(() => {
    if (show) {
      showError();
    }
  }, [show]);

  // Since we are triggering the error notification directly in the useEffect,
  // we don't need to return any JSX here.
  return null;
};

export default FailedNotification;
