import { Box, Button, Grid, Link, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import RingLoader from 'react-spinners/RingLoader';
// import FadeLoader from 'react-spinners'

const EmailLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  console.log(otp, data);

  const handleAction = async () => {
    if (showOtpField) {
      if (otp === data) {
        router.push('/enrollment');
        localStorage.setItem('email', email);
      } else {
        alert('Please enter a valid OTP');
      }
    } else {
      if (email.trim() !== '') {
        // sendEmail(email);
        // let response1: any = await axios.get(`http://localhost:3000/api/users?email=${email}`)
        setLoading(true)
        // if (response1.data.data.length != 0) {
          setShowOtpField(true);
          try {
            let response: any = await axios.post('http://localhost:3000/api/auth/emailLogin', { email })
            console.log(response)
            if (response.data.otp.length != 0) {
              setData(response.data.otp)
              setLoading(false)
              alert('otp send successfully')
            } else {
              alert('please try again')
              setLoading(false)
            }
          } catch (e) {
            console.log(e)
            setLoading(false)
          }
        } else {
          alert('user not register')
          setLoading(false)
        }
      } 
    //   else {
    //     alert('Please enter your email');
    //     setLoading(false)
    //   }
    // }
  };

  // type size = any

  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      {/* Render the appropriate fields based on the state */}
      {showOtpField ? (
        <TextField
          label="Enter OTP"
          fullWidth
          margin="normal"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      ) : (
        <TextField
          label="Enter Email"
          fullWidth
          type="email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: '16px' }}
        onClick={handleAction}
      >
        {showOtpField && !loading ? (
          'Verify OTP'
        ) : loading ? (
          <RingLoader color="#fff" size={30} />
        ) : (
          'Send OTP'
        )}
        {/* <RingLoader color="#fff" size={30} /> */}
      </Button>
    </Box>
  );
};

export default EmailLogin;
