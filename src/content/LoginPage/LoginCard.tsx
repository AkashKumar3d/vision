// Import the necessary components and hooks
import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
// import Image from "next/image"; // Import the Image component
import Logo from "../../../public/static/images/logo/VisionLogo.svg";
import LoginTab from "./LoginTab";
import Link1 from 'src/components/Link';
import BGLogin from '@/public/static/images/background/bgloginfolder.svg'
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  container: {
    width: "1000px",
    height: "700px",
    textAlign: "center",
    overflow:"hidden",
    
  },
  folder_tab: {
    width: "100%",
    height: "96.9%",
    borderRadius: "0px 110px 0px 30px",
    boxShadow: "10px 0px 5px 5px #708090",
    backgroundColor: "#347362",
    
  },
  folder_tab_Element1:{
    marginTop: "5%",
    width: "100%",
    height: "100%",
    justifyContent:"center",
    gap:"3%",
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
  },
  
  folder: {
    width: "100%",
    height: "96.9%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    },

    folderElement1:{
      width: "100%",
      height: "15%",
    },
    


    folderElement2:{
      display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
      height:"85%",
      width:"100%",
      borderRadius: "0 30px 30px 0px",
    boxShadow: "5px 0 0 5px #708090",
    backgroundColor: "#347362",
      
    }
})

export default function LoginCard() {
  const classes = useStyle();

  return (
    <Container className={classes.container}>
      <ul className="circles">
        <Box width={"100%"} height={"100%"} display={"flex"}>
      <Box className={classes.folder_tab}>
          <Box className={classes.folder_tab_Element1}>
              <Typography color={"white"} variant="h3">
                Login
              </Typography>
              <LoginTab/>
              <Grid container justifyContent={"center"} >
                    <Button
                      component={Link1}
                      href="/api/auth/login?returnTo=/dashboards"
                      color="primary"
                      variant="text"
                      sx={{'&:hover':{color:"#fff"} }}
                    >
                      {"Don't have an account? Sign Up"}
                    </Button>
                </Grid>
          </Box>
      </Box>
      <Box className={classes.folder}>
        <Box className={classes.folderElement1}>
            <img src={Logo} width={"30%"}  />
        </Box>
        <Box className={classes.folderElement2}>
      <img src={BGLogin} style={{ objectFit:"contain", width:"100%", height:"100%"}} alt='BgLoginNew'  />
            <Typography color={"white"} position={"absolute"} bottom={40} right={"28%"}>
            We are Vision, a trailblazing Digital Neo Non-Banking Exchange platform
            </Typography>
        </Box>
      </Box>
      </Box>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </Container>
  );
}
