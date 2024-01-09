import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
// import Footer from '@/components/Footer';
import { Grid, Container } from '@mui/material';
import ProfileCover from '@/content/Management/Users/details/ProfileCover';
import RecentActivity from '@/content/Management/Users/details/RecentActivity';
import Feed from '@/content/Management/Users/details/Feed';
import PopularTags from '@/content/Management/Users/details/PopularTags';
import MyCards from '@/content/Management/Users/details/MyCards';
import Addresses from '@/content/Management/Users/details/Addresses';
import Forms from 'pages/components/forms';
import ProfileForm from 'pages/profile';
import EnrollmentForm from '@/content/Dashboards/Enrollment/EnrollmentForm';
import { useRouter } from 'next/router';


function ManagementUserProfile() {
  const user = {
    savedCards: 7,
    name: 'Abhishek Jha',
    coverImg: '/static/images/placeholders/covers/5.jpg',
    avatar: '/static/images/avatars/4.jpg',
    email: 'abhishekhjha123@gmail.com',
    platformName: 'Term Loan',
    socialMedia: 'LinkedIn',
    phoneNumber:"9136827371",
    city:"Mumbai"
  };

  return (
    <>
      <Head>
        <title>User Details - Management</title>
      </Head>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} >
            {/* <ProfileForm/> */}
            <EnrollmentForm/>
          </Grid>
          <Grid item xs={12} md={8}>
            <ProfileCover user={user} />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentActivity />
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

ManagementUserProfile.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ManagementUserProfile;
