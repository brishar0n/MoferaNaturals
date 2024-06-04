import axios from 'axios'
import {URL} from "./APIconst"

export const register = async (data) => {
    try{
    /* Make sure to use port 8000 or change to your port, my port is 8000 */

        const response = await axios.post(URL + '/auth/', {
        username: data.username,
        email: data.email,
        password: data.password,
        role: data.role,
        });
        console.log('Signup successful', response.data);
        /*This verification will be included later */
        /*  if (response.data.verification_link) {
        await axios.post('http://localhost:8000/auth/send-verification-email', {
            email: email,
            verification_link: response.data.verification_link, 
        });
        } */

        /* navigate('/UserVerification'); */

        /* once the admin page is set up, we can navigate to the UserVerification, for now navigate to the Login */
        navigate('/Login');
    } catch (error) {
        console.error('Signup failed', error.response.data);
        if (error.response.status === 400 && error.response.data.email) {
        setRegistrationError('A user with this email already exists.');
        } else {
        setRegistrationError('A user with this email already exists.');
        }
    }
}

export const login = async (formData) => {
    try {
        const response = await axios.post(URL + '/auth/token', formData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        console.log("Successful login", response.data);
        const { access_token, username } = response.data;
        localStorage.setItem('token', access_token);
        localStorage.setItem('username', username);
  
        navigate('/welcomeback');
      } catch (error) {
        console.error('Login failed:', error);
        setLoginError('Wrong password. Please try again.'); 
      }
}