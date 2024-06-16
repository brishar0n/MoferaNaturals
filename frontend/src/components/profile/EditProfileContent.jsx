import profile from '../../assets/profile/profile.svg';
import { IoLocationSharp } from "react-icons/io5";
import SuccessNotification from "../SuccessNotification";
import FailedNotification from "../FailedNotification";
import { useState } from "react";
import axios from 'axios';

function EditProfileContent({ role, name, email, centraUnit, formSubmitted, handleFormSubmission }) {
    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] = useState(false);
    const [formSubmissionFailed, setFormSubmissionFailed] = useState(false);

    function handleNameChange(event) {
        setNewName(event.target.value);
    }

    function handleEmailChange(event) {
        setNewEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setNewPassword(event.target.value);
    }

    function handleConfirmPasswordChange(event) {
        setConfirmPassword(event.target.value);
    }

    function validatePasswordsMatch() {
        if (newPassword !== confirmPassword) {
            setPasswordsMatch(false);
            return false;
        }
        setPasswordsMatch(true);
        return true;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (!validatePasswordsMatch()) return; 

        const payload = {
            username: newName,
            email: newEmail,
            new_password: newPassword,
            confirm_password: confirmPassword,
            centra_unit: role === 'centra' ? centraUnit : null
        };

        try {
            const response = await axios.put('https://mofera-backend-fork-o1xucajgl-mofera-2.vercel.app/profile/', payload, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                setFormSubmittedSuccessfully(true);
                handleFormSubmission(); 
            }
        } catch (error) {
            console.error('Failed to update user profile:', error);
            setFormSubmissionFailed(true);
        }
    }

    return (
        <div className='flex flex-col justify-center items-center py-10 w-5/6 mx-auto text-primary'>
            {formSubmittedSuccessfully && <SuccessNotification htmlContent="You have successfully edited your user profile." />}
            {formSubmissionFailed && <FailedNotification htmlContent="Failed to update user profile." />}
            {!passwordsMatch && <FailedNotification htmlContent="Passwords do not match." />}

            <img src={profile} className="w-screen relative z-40 w-44 h-44 mt-2" alt="profile" />

            <p className='text-3xl mt-1 font-medium'>{name}</p>

            <div className='mt-1 flex justify-center'>
                <p className='font-medium flex gap-1 items-center text-base'><IoLocationSharp />Ponchiki, Aroma Ketek</p>
            </div>

            <form className='flex flex-col my-2 w-full text-left bg-denary rounded-2xl p-5 mt-7 items-center' onSubmit={handleSubmit}>
                <p className='font-bold text-center text-xl'>User Profile</p>
                
                <div className='mt-5 w-full'>
                    <p className='font-bold text-left'>Centra Unit: {centraUnit}</p>
                </div>
                
                <div className='mt-5 mb-2 w-full'>
                    <p className='font-bold text-left mb-2'>Username: </p>
                    <input value={newName} onChange={handleNameChange} className="cursor-auto w-full border-b border-primary bg-transparent" placeholder={name}/>
                </div>

                <div className='mb-2 mt-5 w-full'>
                    <p className='font-bold text-left mb-2'>Email: </p>
                    <input value={newEmail} onChange={handleEmailChange} className="cursor-auto w-full border-b border-primary bg-transparent " placeholder={email}/>
                </div>

                <div className='mb-2 mt-5 w-full'>
                    <p className='font-bold text-left mb-2'>New Password: </p>
                    <input type="password" value={newPassword} onChange={handlePasswordChange} className="cursor-auto w-full border-b border-primary bg-transparent" />
                </div>

                <div className='mb-2 mt-5 w-full'>
                    <p className='font-bold text-left mb-2'>Confirm Password: </p>
                    <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} className="cursor-auto w-full border-b border-primary bg-transparent" />
                </div>
                
                <div className='mb-2 mt-5'>
                    <button className='rounded-3xl bg-primary px-5 py-3 text-white font-medium' type='submit'>Save Details</button>
                </div>
            
            </form>
        </div>
    );
}

export default EditProfileContent;
