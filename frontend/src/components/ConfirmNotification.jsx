import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ConfirmNotification = ({onClose, text, confirmationText, confirmedText, confirmedTitle, cancelledText}) => {
    const nav = useNavigate();

    const showConfirm = () => {
        withReactContent(Swal).fire({
            title: "Are you sure?",
            text: text,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: confirmationText,
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
            customClass: {
                popup: 'rounded-3xl w-96 montserrat', 
                confirmButton: 'rounded-3xl', 
                cancelButton: 'rounded-3xl'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                withReactContent(Swal).fire({
                title: confirmedTitle,
                text: confirmedText,
                icon: "success",
                customClass: {
                    popup: 'rounded-3xl w-96 montserrat', 
                }
                
                });
                nav("/welcomeback");
            } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
            ) {
                withReactContent(Swal).fire({
                title: "Cancelled",
                text: cancelledText,
                icon: "error",
                customClass: {
                    popup: 'rounded-3xl w-96 montserrat',
                }
            });
        }
        onClose();
      });
    }

    useEffect(() => {
        // Show success notification when the component mounts
        showConfirm();
    }, []); // Empty dependency array ensures the effect runs only once after the component mounts

    // Since we are triggering the success notification directly in the useEffect,
    // we don't need to return any JSX here.
    return null;
};

export default ConfirmNotification;