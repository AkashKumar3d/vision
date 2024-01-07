import { Box, Button, Card, CardContent, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { currencies } from '../../../../pages/profile';
import Component, { Upload } from './Component';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ro } from 'date-fns/locale';

const EnrollmentForm = () => {
  const [currency, setCurrency] = useState('EUR');
  const [currency_two, setCurrency_two] = useState('EUR');
  const [inputs, setInputs] = useState([])
  const router = useRouter()


  const handleChange = (event) => {
    setCurrency(event.target.value);
  };


  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs((prev) => ({ ...prev, [name]: value }))
    // setInputs({...inputs, [name]:value})
    console.log(inputs, "all insn")
  }


  const handleEnrollSubmit = async  () => {
    try {
      const id = JSON.parse(localStorage.getItem("user-id"))
      let obj = {
        enrollment: inputs,
        enrollstatus: "yes",
      }
      const res = await  axios.put(`http://localhost:3000/api/users/userEnrol?id=${id}`, obj)
      localStorage.setItem("enrollstatus", "yes")
      alert("updated enrollment")
      router.push("/dashboards/createdeal")
    } catch (error) {

    }
  }
  const handleChange_tow = (event) => {
    setCurrency_two(event.target.value);
  };

  const [value, setValue] = useState(30);
  return (
    <Box>
      <Grid item xs={6} position={"relative"}  >
        <Card sx={{ justifyItems: "center", paddingY: '50px', display: 'flex', bgcolor: "#347362", flexDirection: 'column', alignItems: 'center', height: "90%" }}>
          <Typography variant='h3' paddingBottom={2} color={"#ffffff"}>Enrollment</Typography>
          <Divider />
          <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 2, alignItems: "center", width: "100%" }}>
            <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Founder"
                type='text'
                placeholder='Founder'
                sx={{ bgcolor: "white", }}
                variant='filled'
                name="founder"
                // value={inputs.founder}
                onChange={handleInput}

              />
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="SPOC"
                type='text'
                placeholder='SPOC'
                sx={{ bgcolor: "white" }}
                variant='filled'
                name="SPOC"
                onChange={handleInput}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="AUM(inr crores)"
                type='number'
                placeholder="AUM(inr crores)"
                sx={{ bgcolor: "white" }}
                variant='filled'
                name="AUM"
                onChange={handleInput}
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
                onChange={handleInput}
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
                onChange={handleInput}
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
                onChange={handleInput}
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
                name="1-30_DPD"
                onChange={handleInput}
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
                name="31-60_DPD"
                onChange={handleInput}
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
                name="61-90_DPD"
                onChange={handleInput}
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
                name="90+_DPD"
                onChange={handleInput}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                label="Number of states present"
                // value={currency}
                // onChange={handleChange}
                sx={{ bgcolor: "white" }}
                variant='filled'
                name="currency1"
                onChange={handleInput}
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
                // value={currency_two}
                // onChange={handleChange_tow}
                sx={{ bgcolor: "white" }}
                variant='filled'
                name="currency"
                onChange={handleInput}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <Component componentName='Product Sagement' />
              <Component componentName='Sub Product' />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <Component componentName="Borrower Type" />
              <Component componentName="Repayment Type" />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <Upload uploadName="Corporate Deck" />
              <Upload uploadName="Format Portfolio Cutt" />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <Upload uploadName="Financials Last 2 Years" />
              <Upload uploadName="Last 6 Months GST Turnover (inr crores)" />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <Upload uploadName="Borrower Journey (video/deck)" />
              <Upload uploadName="Product/Credit Notes" />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <Upload uploadName="KYCs & RBI Certificates" />
            </Box>

          </CardContent>
          <Button variant='contained' sx={{ width: "90%", color: "white" }} onClick={handleEnrollSubmit}>
            Submit
          </Button>
        </Card>
      </Grid>
    </Box>
  )
}

export default EnrollmentForm