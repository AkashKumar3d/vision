import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import Label from '@/components/Label';

const EnrollmentDetail = () => {
  return (
    <Box width={"100%"}>
        <Typography gutterBottom variant="h3" textAlign={"center"} width={"100%"} py={2} >
          Enrollment Detail
        <Tooltip title="Edit Enrollment" arrow>
                      <IconButton
                        color="inherit"
                        size="small"
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
        </Typography>
        <Box>
        </Box>
        <Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Number of states present : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Number of Branches : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Founder : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> SPOC : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> AUM(inr crores) : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Mothly Disbursement(inr crores) : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Product Sagement : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Sub Product : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Borrower Type : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Repayment Type : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Gross NPA : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Net NPA : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> 1-30 DPD : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> 31-60 DPD : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> 61-90 DPD : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> 90+ DPD : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Corporate Deck : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Format Portfolio Cutt : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Financials Last 2 Years : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Last 6 Months GST Turnover (inr crores) : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Borrower Journey (video/deck) : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Product/Credit Notes : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> KYCs & RBI Certificates : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>238476</Typography>
        </Typography>

        </Typography>
        <Box
          display={{ xs: 'block', md: 'flex' }}
          alignItems="center"
          justifyContent="space-between"
        >
        </Box>
      </Box>
  )
}

export default EnrollmentDetail