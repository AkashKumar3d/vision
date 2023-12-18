import {
  Typography,
  Box,
  Card,
  Container,
  Button,
  styled,
  Paper,
  Grid
} from '@mui/material';
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Link from 'src/components/Link';
import Head from 'next/head';

import Logo from 'src/components/LogoSign';
import Hero from 'src/content/Overview/Hero';
import LoginCard from '@/content/LoginPage/LoginCard';
import Documentation from '@/content/LoginPage/Documentation';
import BGLogin from '@/public/static/images/background/bgloginNEW.svg'
import Image from 'next/image';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(1)};
`
);

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

function Overview() {
  return (
    <OverviewWrapper sx={{ position:"relative"}}>
      <img src={BGLogin} style={{position:"absolute", objectFit:"cover", backgroundColor:"white", opacity:"0.2", width:"100%", height:"100%"}} alt='BgLoginNew'  />
      <Head>
        <title>Vision LogIn/SignIn</title>
      </Head>
      <HeaderWrapper sx={{ position:"relative"}}>
        <Container maxWidth="lg" sx={{position:"absolute"}}>
          <Box display="flex" alignItems="center">
            <Logo />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex={1}
            >
              <Box />
              <Box display={"flex"}>
                <Grid>
                  <Documentation/>
                </Grid>
                <Button
                  component={Link}
                  href="/api/auth/login/route?returnTo=/dashboard"
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </HeaderWrapper>
      <Box position={"relative"} sx={{opacity:"0.98"}}>
        <LoginCard/>
      </Box>
      <Box>
        <Hero/>
      </Box>
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
