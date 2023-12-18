import { useState } from 'react';
import {
  Card,
  CardHeader,
  List,
  Divider,
  Switch,
  TextField,
  Button,
  Container,
  Grid,
  CardContent,
  Box,
  MenuItem,
  Typography,
  FormLabel,
  InputLabel
} from '@mui/material';
import { Label } from '@mui/icons-material';


const label = { inputProps: { 'aria-label': 'Switch demo' } };
const currencies = [
  {
    value: 'Co-Landing',
    label: 'Co-Landing'
  },
  {
    value: 'Term Loan',
    label: 'Term Loan'
  },
  {
    value: 'Co-Landing',
    label: 'Co-Landing'
  },
  {
    value: 'Term Loan',
    label: 'Term Loan'
  }
];

function CreateForm() {
  const [currency, setCurrency] = useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Create Deal" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                  }}
                  noValidate
                  autoComplete="off"
                >
            <List sx={{flexDirection:"column", display:"flex", alignItems:"center", justifyContent:"space-between", gap:4,}}>
              <Box>
            <TextField
              id="filled-number"
              label="Deal Creator"
              type="text"
              InputLabelProps={{
                shrink: true
              }}
              variant="filled"
            />
            <TextField
                      id="filled-select-Product"
                      select
                      required
                      label="Product"
                      value={currency}
                      onChange={handleChange}
                      variant="filled"
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
            </TextField>
            </Box>

            <Box sx={{display:"flex", justifyContent:"space-between" }}>
            <TextField
              id="filled-number"
              required
              label="Amount"
              type="number"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
              variant="filled"
            />
            
            <Typography sx={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingX:2, gap:3}}>
            <InputLabel sx={{ width:"100%"}} variant='standard' filled >Consultant</InputLabel>
            <Box >
              <InputLabel required>
                Yes <Switch {...label} defaultChecked />
              
              </InputLabel>
              <InputLabel required>
                No <Switch {...label}  />
              </InputLabel>
              </Box>
            </Typography>
            </Box>
            <Button sx={{ margin: 1 }} variant="contained" color="primary">
                        Submit
                      </Button>      
            </List>
        
          </Box>
          </CardContent>
          </Card>
          </Grid>
          </Grid>
          </Container>
    
  );
}

export default CreateForm;
