import { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const FailedNotification = ({htmlContent}) => {
  const showError = () => {
    withReactContent(Swal).fire({
      icon: 'error',
      title: "<p style='color:#016B4d'>Failed!</p>",
      html: `<p style='color:#016B4d'>${htmlContent}</p>`,
      confirmButtonColor: '#016B45',
      confirmButtonText: 'Done',
      customClass: {
        confirmButton: 'sweet_confirmbuttonImportant',
      },
    }).then((result) => {
        if (result.isConfirmed) {
          // Reload the page after the user clicks on "Done"
          window.location.reload();
        }
      });
  };

  useEffect(() => {
    // Show success notification when the component mounts
    showError();
  }, []); // Empty dependency array ensures the effect runs only once after the component mounts

  // Since we are triggering the success notification directly in the useEffect,
  // we don't need to return any JSX here.
  return null;
};

export default FailedNotification;