import { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const SuccessNotification = ({htmlContent}) => {
  const showSuccess = () => {
    withReactContent(Swal).fire({
      icon: 'success',
      title: "<p style='color:#016B4d'>Success!</p>",
      html: `<p style='color:#016B4d'>${htmlContent}</p>`,
      confirmButtonColor: '#016B45',
      confirmButtonText: 'Done',
      customClass: {
        confirmButton: 'sweet_confirmbuttonImportant',
        popup: 'rounded-3xl w-96 montserrat',
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
    showSuccess();
  }, []); // Empty dependency array ensures the effect runs only once after the component mounts

  // Since we are triggering the success notification directly in the useEffect,
  // we don't need to return any JSX here.
  return null;
};

export default SuccessNotification;