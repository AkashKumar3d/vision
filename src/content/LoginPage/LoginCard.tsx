// Import the necessary components and hooks
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Image from "next/image"; // Import the Image component
import Logo from "../../../public/static/images/logo/VisionLogo.svg";
import LoginTab from "./LoginTab";
import Link1 from 'src/components/Link';
import BGNew from '../../../public/static/images/background/bgloginNEW.svg'

export default function LoginCard() {

  return (
    <Container component="main" maxWidth="lg" >
      <Box
        sx={{
          bgcolor: "red",
          height: "90%",
        }}
      >
        <Grid container bgcolor={"red"} sx={{ height: "100%" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={12}
            md={6}
            sx={{
              backgroundImage: '../../../public/static/images/background/bgloginNEW.svg',
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
              objectFit:"contain",
              
              position: "relative",
            }}
          >
            <img src={BGNew} style={{ position:"absolute", width:"100%",height:"100%", justifySelf:"center"}} />
            <Box
              bgcolor={"#00000099"}
              position={"absolute"}
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
                  backgroundColor: "#ffffff99",
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
              height={"250px"}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                component={"div"}
                style={{
                  width: "95%",
                  backgroundColor: "#00000090",
                 
                  textAlign: "center",
                  border: "1px",
                  borderRadius: "10px",
                }}
              >
                <p style={{ color: 'HighlightText', lineHeight:"3", wordSpacing:"2px" }}>
                Our Platform is designed to serve
Various service providers such as NBFCs, Banks, Business Correspondences, Fintechs, Insurance Service Providers, Rating Agencies, Collection Agencies, KYC Providers, Credit-Bureau Agencies, AA Platform, LOS/LMS Providers, Marketing Agencies, VC & PE Firms, and Investment Bankers etc.
                </p>
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent:"space-between",
                gap:4,
                alignItems: "center",
                width: "100%",
              }}
            >
              {/* Use the Image component for the logo */}
              {/* <Image src={Logo} alt="Logo" width={150} height={150} /> */}
              <Typography variant="h2" mt={7}>
                Login
              </Typography>
                <Typography variant="h5" px={5} color={"black"} textAlign={"center" } letterSpacing={1} lineHeight={2} >Unlocking Possibilities, One Secure Login at a Time: Where Innovation Meets Authentication</Typography>
              <LoginTab/>
              <Grid container justifyContent={"center"} py={3}>
                <Button
                  component={Link1}
                  href="/api/auth/login/route?returnTo=/dashboard"
                  color="primary"
                  variant="text"
                  sx={{'&:hover':{color:"#347362"} }}
                >
                  {"Don't have an account? Sign Up"}
                </Button>
                </Grid>
            </Box>
          </Grid>
        </Grid>
        
        
      
      </Box>
    </Container>
  );
}
