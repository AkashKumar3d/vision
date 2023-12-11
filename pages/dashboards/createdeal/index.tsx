import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import PageHeader from '@/content/Dashboards/CreateDeal/PageHeader';
import { Container, Grid } from '@mui/material';
import Forms from 'pages/components/forms';
import CreateForm from '@/content/Dashboards/CreateDeal/Form';
import Buttons from 'pages/components/buttons';

function DashboardCreatDeal() {
  return (
    <div>
        <Head>
        <title>Create Deal</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item maxWidth={'lg'}>
            <CreateForm />
          </Grid>
          <Grid>
            <Buttons/>
          </Grid>
          {/* <Grid item lg={8} xs={12}>
            <Wallets />
          </Grid>
          
          <Grid item xs={12}>
            <WatchList />
          </Grid> */}
        </Grid>
      </Container>
      
    </div>
  );
}

DashboardCreatDeal.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCreatDeal;
