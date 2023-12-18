import { AppBar, Card, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';

import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import EmailLogin from './EmailLogin';
import PhoneLogin from './PhoneLogin';

const LoginTab = () => {
  const [openTab, setOpenTab] = useState('phone');

  const handleTab = () => {
    setOpenTab(openTab === 'phone' ? 'email' : 'phone');
  };

  return (
    <Card sx={{padding:4}}>
      <AppBar position='static' sx={{ width: '100%',borderRadius:"10px", border:"1px", }}>
        <Tabs
          value={openTab}
          sx={{borderRadius:"10px", border:"1px", bgcolor:"white"}}
          onChange={handleTab}
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
          aria-label="basic tabs example"
        >
          <Tab value="phone" icon={<PhoneIcon />} />
          <Tab value="email" icon={<MailIcon />} />
        </Tabs>
      </AppBar>
      {openTab === 'email' ? <EmailLogin /> : <PhoneLogin />}
    </Card>
  );
};

export default LoginTab;
