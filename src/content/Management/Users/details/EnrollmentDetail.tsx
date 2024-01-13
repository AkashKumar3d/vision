import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import Label from '@/components/Label';
import EnrollmentForm from '@/content/Dashboards/Enrollment/EnrollmentForm';

const EnrollmentDetail = () => {
  const [open , setOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    founder: "",
    spoc: "",
    aum: "",
    Mothly_Disbursement: "",
    Gross_NPA: "",
    Net_NPA: "",
    DPD1: "",
    DPD2: "",
    DPD3: "",
    DPD4: "",
    noOfState: "",
    noOfBranch: "",
    productSagemet: "",
    subProduct: "",
    borrowerType: "",
    repaymentType: "",
    corporateDeck: "",
    formatePortfolioCutt: "",
    financialsLast2: "",
    last6Month: "",
    borrowerJourney: "",
    productCreditNotes: "",
    kycsRBIcertificates: "",
  })
  return (
    <Box width={"100%"}>
      <EnrollmentForm formData={formData} setFormData={setFormData} open={open} setOpen={setOpen}/>
      <Button variant='contained' onClick={()=>{
        setOpen(true)
      }} >
        Fill Enrollment
      </Button>
        <Typography gutterBottom variant="h3" textAlign={"center"} display={"flex"} justifyContent={"space-between"} width={"100%"} py={2} >
          Enrollment Detail
        <Tooltip title="Edit Enrollment" arrow>
                      <IconButton
                        color="inherit"
                        size="small"
                        onClick={()=>{
                          setOpen(true)
                        }}
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
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.noOfState}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Number of Branches : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.noOfBranch}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Founder : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.founder}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> SPOC : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.spoc}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> AUM(inr crores) : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.aum}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Mothly Disbursement(inr crores) : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.Mothly_Disbursement}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Product Sagement : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.productSagemet}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Sub Product : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.subProduct}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Borrower Type : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.borrowerType}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Repayment Type : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.repaymentType}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Gross NPA : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.Gross_NPA}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Net NPA : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.Net_NPA}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> 1-30 DPD : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.DPD1}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> 31-60 DPD : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.DPD2}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> 61-90 DPD : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.DPD3}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> 90+ DPD : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.DPD4}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Corporate Deck : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.corporateDeck}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Format Portfolio Cutt : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.formatePortfolioCutt}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Financials Last 2 Years : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.financialsLast2}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Last 6 Months GST Turnover (inr crores) : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.last6Month}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Borrower Journey (video/deck) : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.borrowerJourney}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> Product/Credit Notes : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.productCreditNotes}</Typography>
        </Typography>
        <Typography sx={{justifyContent:"space-around", alignItems:"center", display:"flex", py:0.2}}> 
          <Typography sx={{width:"50%", }}> KYCs & RBI Certificates : </Typography>
          <Typography sx={{border:1, width:"50%", borderRadius:"2px", p:1}}>{formData.kycsRBIcertificates}</Typography>
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