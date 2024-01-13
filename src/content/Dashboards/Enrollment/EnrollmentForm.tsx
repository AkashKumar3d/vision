import { Box, Button, Card, CardContent, Dialog, Divider, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { currencies } from '../../../../pages/profile';
import Component, { Upload } from './Component';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ro } from 'date-fns/locale';
import { Cancel } from '@mui/icons-material';

const EnrollmentForm = ({ open, setOpen,formData={}, setFormData }) => {
  const [currency, setCurrency] = useState('EUR');
  const [currency_two, setCurrency_two] = useState('EUR');
  const [selectedProductValue, setSelectedProductValue] = useState('');
  const [selectedSubValue, setSelectedSubValue] = useState('');
  const [inputs, setInputs] = useState([])
  const router = useRouter()
  const [uploadedFiles, setUploadedFiles] = useState({
    file1: [],
    file2: [],
    file3: [],
    file4: [],
    file5: [],
    file6: [],
    file7: [],
  });
  

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFormData((preFormData) => ({
      ...preFormData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  }

  const handleFilesUpload = (field, files) => {
    setUploadedFiles({
      ...uploadedFiles,
      [field]: files
    });
    console.log(uploadedFiles)
  };




  const handleEnrollSubmit = async () => {
    try {
      const id = JSON.parse(localStorage.getItem("user-id"))
      let obj = {
        enrollment: inputs,
        enrollstatus: "yes",
      }
      const res = await axios.put(`http://localhost:3000/api/users/userEnrol?id=${id}`, obj)
      localStorage.setItem("enrollstatus", "yes")
      alert("updated enrollment")
      router.push("/dashboards/createdeal")
    } catch (error) {

    }
  }
  return (
    <Dialog open={open} maxWidth={"md"} fullWidth onClose={() => { setOpen(false) }}>
      <Grid item xs={12} position={"relative"} overflow={"hidden"} sx={{ padding: 5 }}  >
        <Box display={"flex"} paddingBottom={2} justifyContent={"space-between"} alignItems={"center"}  >
          <Typography variant='h3' >Enrollment Form</Typography>
          <IconButton onClick={() => { setOpen(false) }} >
            <Cancel fontSize='large' />
          </IconButton>
        </Box>
        <Card sx={{ justifyItems: "center", overflowY: "scroll", paddingBottom: '50px', display: 'flex', bgcolor: "#347362", flexDirection: 'column', alignItems: 'center', height: "500px" }}>
          <Divider />
          <form >
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 2, alignItems: "center", width: "100%" }}>
              <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="Founder"
                  name='founder'
                  type='text'
                  placeholder='Founder'
                  sx={{ bgcolor: "white", }}
                  variant='filled'
                  // value={inputs.founder}
                  onChange={handleChangeForm}
                  value={formData.founder}

                />
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="SPOC"
                  name="spoc"
                  type='text'
                  placeholder='SPOC'
                  sx={{ bgcolor: "white" }}
                  variant='filled'
                  onChange={handleChangeForm}
                  value={formData.spoc}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="AUM(inr crores)"
                  name="aum"
                  type='number'
                  placeholder="AUM(inr crores)"
                  sx={{ bgcolor: "white" }}
                  variant='filled'
                  onChange={handleChangeForm}
                  value={formData.aum}
                />
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="Mothly Disbursement(inr crores)"
                  type="number"
                  placeholder="Mothly Disbursement(inr crores)"
                  sx={{ bgcolor: "white" }}
                  variant='filled'
                  name="Mothly_Disbursement"
                  onChange={handleChangeForm}
                  value={formData.Mothly_Disbursement}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="Gross NPA"
                  type="number"
                  placeholder="Gross NPA"
                  sx={{ bgcolor: "white" }}
                  variant='filled'
                  name="Gross_NPA"
                  onChange={handleChangeForm}
                  value={formData.Gross_NPA}
                />
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="Net NPA"
                  type="number"
                  placeholder="Net NPA"
                  sx={{ bgcolor: "white" }}
                  variant='filled'
                  name="Net_NPA"
                  onChange={handleChangeForm}
                  value={formData.Net_NPA}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="1-30 DPD"
                  type="number"
                  placeholder="1-30 DPD"
                  sx={{ bgcolor: "white" }}
                  variant='filled'
                  name="DPD1"
                  onChange={handleChangeForm}
                  value={formData.DPD1}
                />
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="31-60 DPD"
                  type="number"
                  placeholder="31-60 DPD"
                  sx={{ bgcolor: "white" }}
                  variant='filled'
                  name="DPD2"
                  onChange={handleChangeForm}
                  value={formData.DPD2}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="61-90 DPD"
                  type="number"
                  placeholder="61-90 DPD"
                  sx={{ bgcolor: "white" }}
                  variant='filled'
                  name="DPD3"
                  onChange={handleChangeForm}
                  value={formData.DPD3}
                />
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="90+ DPD"
                  type="number"
                  placeholder="90+ DPD"
                  sx={{ bgcolor: "white" }}
                  variant='filled'
                  name="DPD4"
                  onChange={handleChangeForm}
                  value={formData.DPD4}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
                <TextField
                  fullWidth
                  id="outlined-select-currency"
                  select
                  label="Number of states present"
                  value={currency}
                  sx={{ bgcolor: "white" }}
                  variant='filled'
                  name="noOfState"
                  onChange={handleChangeForm}
                  value={formData.noOfState}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  id="outlined-select-currency"
                  select
                  label="Number of Branches"
                  sx={{ bgcolor: "white" }}
                  variant='filled'
                  name="noOfBranch"
                  onChange={handleChangeForm}
                  value={formData.noOfBranch}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
                <TextField
                  select
                  fullWidth
                  id="Product-Sagement"
                  label="Product Sagement"
                  placeholder="Product Sagement"
                  sx={{ bgcolor: "white" }}
                  variant='filled'
                  name="productSagemet"
                  value={selectedProductValue}
                  onChange={(e) => {
                    setSelectedProductValue(e.target.value);
                }}
                >
                  <MenuItem value="Unsecured Business Loan">
                    Unsecured Business Loan
                  </MenuItem>
                </TextField>
                <TextField
                  select
                  fullWidth
                  id="Sub-Sagement"
                  label="Sub Product"
                  placeholder="Sub Product"
                  sx={{ bgcolor: "white" }}
                  variant='filled'
                  name="subProduct"
                  value={selectedSubValue}
                  onChange={(e) => {
                    setSelectedSubValue(e.target.value)
                  }}
                >
                  <MenuItem value="Term Loan">
                    Term Loan
                  </MenuItem>
                </TextField>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
                <TextField
                  select
                  fullWidth
                  id="Borrower-Type"
                  label="Borrower Type"
                  placeholder="Borrower Type"
                  sx={{ bgcolor: "white" }}
                  variant='filled'
                  name="borrowerType"
                  value={selectedSubValue}
                  onChange={(e) => {
                    setSelectedSubValue(e.target.value)
                  }}
                >
                  <MenuItem value="MSME">
                    MSME
                  </MenuItem>
                  <MenuItem value="Self Employed">
                    Self Employed
                  </MenuItem>
                  <MenuItem value="Start Up">
                    Start Up
                  </MenuItem>
                </TextField>
                <TextField
                  select
                  fullWidth
                  id="Repayment-Type"
                  label="Repayment Type"
                  placeholder="Repayment Type"
                  sx={{ bgcolor: "white" }}
                  variant='filled'
                  name="repaymentType"
                  value={selectedSubValue}
                  onChange={(e) => {
                    setSelectedSubValue(e.target.value)
                  }}
                >
                  <MenuItem value="EMI">
                    EMI
                  </MenuItem>
                  <MenuItem value="EFI">
                    EFI
                  </MenuItem>
                </TextField>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
                <Upload id={"CorporateDeck"} name={"corporateDeck"} onFilesUpload={(files) => handleFilesUpload('file1', files)} label="Corporate Deck" />
                <Upload id={"FormatPortfolioCutt"} name={"formatePortfolioCutt"} onFilesUpload={(files) => handleFilesUpload('file2', files)} label="Format Portfolio Cutt" />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
                <Upload id={3} name={"financialsLast2"} onFilesUpload={(files) => handleFilesUpload('file3', files)} label="Financials Last 2 Years" />
                <Upload id={4} name={"last6Month"} onFilesUpload={(files) => handleFilesUpload('file4', files)} label="Last 6 Months GST Turnover (inr crores)" />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
                <Upload id={5} name={"borrowerJourney"} onFilesUpload={(files) => handleFilesUpload('file5', files)} label="Borrower Journey (video/deck)" />
                <Upload id={6} name={"productCreditNotes"} onFilesUpload={(files) => handleFilesUpload('file6', files)} label="Product/Credit Notes" />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
                <Upload id={7} name={"kycsRBIcertificates"} onFilesUpload={(files) => handleFilesUpload('file7', files)} label="KYCs & RBI Certificates" />
              </Box>

            </CardContent>
            <Button variant='contained' sx={{ width: "90%", color: "white" }} onClick={handleEnrollSubmit}>
              Submit
            </Button>
          </form>
        </Card>
      </Grid>
    </Dialog>
  )
}

export default EnrollmentForm