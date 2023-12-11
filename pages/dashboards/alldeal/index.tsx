import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

function DashboardAllDeal() {
  return (
    <div>
        <Head>
        <title>All Deal</title>
      </Head>
        All Deal
    </div>
  );
}

DashboardAllDeal.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardAllDeal;
