import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import PageHeader from '@/content/Dashboards/CreateDeal/PageHeader';
import { Container, Grid } from '@mui/material';
// import Forms from 'pages/components/forms';
import CreateForm from '@/content/Dashboards/CreateDeal/Form';
// import Buttons from 'pages/components/buttons';
import EditForm from '@/content/Dashboards/CreateDeal/EditForm';
import CreatedDealTable from '@/content/Dashboards/CreateDeal/CreatedDealTable';
import { subDays } from 'date-fns';
import { CryptoOrder } from '@/models/crypto_order';

export const cryptoOrders: CryptoOrder[] = [
  {
    id: '1',
    orderDetails: 'Owner',
    createdBy:'Khushboo',
    orderDate: new Date().getTime(),
    status: 'completed',
    orderID: 'Term Loan',
    sourceName: 'Bank Account',
    sourceDesc: '*** 1111',
    amountCrypto: 34.4565,
    amount: 56787,
    cryptoCurrency: 'cr',
    currency: '₹'
  },
  {
    id: '2',
    orderDetails: 'Owner',
    createdBy:'Khushboo',
    orderDate: subDays(new Date(), 1).getTime(),
    status: 'completed',
    orderID: 'Term Loan',
    sourceName: 'Bank Account',
    sourceDesc: '*** 1111',
    amountCrypto: 6.58454334,
    amount: 8734587,
    cryptoCurrency: 'lakh',
    currency: '₹'
  },
  {
    id: '3',
    orderDetails: 'Owner',
    createdBy:'Khushboo',
    orderDate: subDays(new Date(), 5).getTime(),
    status: 'failed',
    orderID: 'Co-Landing',
    sourceName: 'Bank Account',
    sourceDesc: '*** 1111',
    amountCrypto: 6.58454334,
    amount: 8734587,
    cryptoCurrency: 'lakh',
    currency: '₹'
  },
  {
    id: '4',
    orderDetails: 'Owner',
    createdBy:'Khushboo',
    orderDate: subDays(new Date(), 55).getTime(),
    status: 'completed',
    orderID: 'Co-Landing',
    sourceName: 'Bank Account',
    sourceDesc: '*** 1111',
    amountCrypto: 6.58454334,
    amount: 8734587,
    cryptoCurrency: 'lakh',
    currency: '₹'
  },
  {
    id: '5',
    orderDetails: 'Owner',
    createdBy:'Khushboo',
    orderDate: subDays(new Date(), 56).getTime(),
    status: 'pending',
    orderID: 'Co-Landing',
    sourceName: 'Bank Account',
    sourceDesc: '*** 1111',
    amountCrypto: 6.58454334,
    amount: 8734587,
    cryptoCurrency: 'lakh',
    currency: '₹'
  },
  {
    id: '6',
    orderDetails: 'Owner',
    createdBy:'Khushboo',
    orderDate: subDays(new Date(), 33).getTime(),
    status: 'completed',
    orderID: 'Term Loan',
    sourceName: 'Bank Account',
    sourceDesc: '*** 1111',
    amountCrypto: 6.58454334,
    amount: 8734587,
    cryptoCurrency: 'lakh',
    currency: '₹'
  },
  {
    id: '7',
    orderDetails: 'Owner',
    createdBy:'Khushboo',
    orderDate: new Date().getTime(),
    status: 'pending',
    orderID: 'Term Loan',
    sourceName: 'Bank Account',
    sourceDesc: '*** 1212',
    amountCrypto: 2.346546,
    amount: 234234,
    cryptoCurrency: 'lakh',
    currency: '₹'
  },
  {
    id: '8',
    orderDetails: 'Employee',
    createdBy:'Khushboo',
    orderDate: subDays(new Date(), 22).getTime(),
    status: 'completed',
    orderID: 'Term Loan',
    sourceName: 'Paypal Account',
    sourceDesc: '*** 1111',
    amountCrypto: 3.345456,
    amount: 34544,
    cryptoCurrency: 'lakh',
    currency: '₹'
  },
  {
    id: '9',
    orderDetails: 'Owner',
    createdBy:'Khushboo',
    orderDate: subDays(new Date(), 11).getTime(),
    status: 'completed',
    orderID: 'Term Loan',
    sourceName: 'Bank Account',
    sourceDesc: '*** 2222',
    amountCrypto: 1.4389567945,
    amount: 123843,
    cryptoCurrency: 'lakh',
    currency: '₹'
  },
  {
    id: '10',
    orderDetails: 'Wallet Transfer',
    createdBy:'Khushboo',
    orderDate: subDays(new Date(), 123).getTime(),
    status: 'failed',
    orderID: 'Co-Landing',
    sourceName: 'Wallet Transfer',
    sourceDesc: "John's Cardano Wallet",
    amountCrypto: 765.5695,
    amount: 7567,
    cryptoCurrency: 'Thousand',
    currency: '₹'
  }
];
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
          <Grid item xs={12} lg={12}>
            <EditForm/>
          </Grid>
          <Grid item xs={12} lg={12}>
            <CreatedDealTable cryptoOrders={cryptoOrders}/>
          </Grid>
        </Grid>
      </Container>
      
    </div>
  );
}

DashboardCreatDeal.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCreatDeal;
