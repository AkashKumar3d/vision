import { Box, Button,  TextField } from '@mui/material'
import React from 'react'

import { useState } from "react";
import { useRouter } from "next/router";


const EmailLogin = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpField, setShowOtpField] = useState(false);
  
    const handleAction = () => {
      if (showOtpField) {
        if (otp.trim() !== '') {
          router.push('/dashboards/crypto');
        } else {
          alert('Please enter a valid OTP');
        }
      } else {
        if (email.trim() !== '') {
          sendEmail(email);
          setShowOtpField(true);
        } else {
          alert('Please enter your email');
        }
      }
    };
  
  const sendEmail = (email) => {
  const otp = generateOtp();
      alert(`Email sent to ${email} with OTP: ${otp}`);
    };
  
   
    const generateOtp = () => {
      
      return Math.floor(100000 + Math.random() * 900000).toString();
    };

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
                    type='email'
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
                  {showOtpField ? "Verify OTP" : "Send OTP"}
                </Button>
              </Box>
  )
}

export default EmailLogin