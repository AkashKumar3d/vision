// Import the necessary components and hooks
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image"; // Import the Image component
import Logo from "../../../public/static/images/logo/VisionLogo.svg";
import BG from "../../../public/static/images/background/background.jpeg";

// Define the LoginCard component
export default function LoginCard() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);

  const handleAction = () => {
    // Check if OTP field is visible
    if (showOtpField) {
      // Perform OTP verification logic here
      // For simplicity, check if OTP is non-empty
      if (otp.trim() !== '') {
        // Redirect to the dashboard page
        router.push('/dashboard/crypto');
      } else {
        // Handle validation error
        alert('Please enter a valid OTP');
      }
    } else {
      // Perform email verification logic here
      // For simplicity, check if email is non-empty
      if (email.trim() !== '') {
        // Simulate sending an email and show the OTP field
        sendEmail(email);
        setShowOtpField(true);
      } else {
        // Handle validation error
        alert('Please enter your email');
      }
    }
  };

  // Function to simulate sending an email (replace with your email logic)
  const sendEmail = (email) => {
    // Simulate sending an email with the OTP
    const otp = generateOtp();
    alert(`Email sent to ${email} with OTP: ${otp}`);
  };

  // Function to generate a random OTP (replace with your OTP logic)
  const generateOtp = () => {
    // This is a simple example, generate a random 6-digit OTP
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ height: "70%" }}>
      <Box
        sx={{
          bgcolor: "red",
          height: "100%",
        }}
      >
        <Grid container bgcolor={"red"} sx={{ height: "100%" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <Box
              bgcolor={"#00000080"}
              position={"absolute"}
              top={"0"}
              color={"white"}
              width={"100%"}
              height={"200px"}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                component={"div"}
                style={{
                  width: "80%",
                  backgroundColor: "#ffffff90",
                  textAlign: "center",
                  border: "1px",
                  borderRadius: "10px",
                }}
              >
                <h3 color="HighlightText">
                  We are <span style={{ color: '#ef8450' }}>Vision</span>,<br />a
                  trailblazing Digital Neo Non-Banking{' '}
                  <span style={{ color: '#ef8450' }}>Exchange platform</span>
                </h3>
              </Typography>
            </Box>
            <Box
              bgcolor={"#34736290"}
              position={"absolute"}
              bottom={"0"}
              color={"white"}
              width={"100%"}
              height={"100px"}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                component={"div"}
                style={{
                  width: "90%",
                  backgroundColor: "#00000020",
                  textAlign: "center",
                  border: "1px",
                  borderRadius: "10px",
                }}
              >
                <p style={{ color: 'HighlightText' }}>
                  geared to streamline and revolutionize the way financial
                  services are delivered and consumed in the digital era.
                </p>
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              {/* Use the Image component for the logo */}
              <Image src={Logo} alt="Logo" width={150} height={150} />
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
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
