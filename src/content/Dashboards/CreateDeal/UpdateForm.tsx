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
  InputLabel,
  Modal,
  Dialog,
  Avatar
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


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

function UpdateForm({ update, setList ,openNew,setOpenNew,}) {
  const [currency, setCurrency] = useState('EUR');
  const [ data, setData ] = useState({

  })


  console.log(update, "deals for update")
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Dialog open={openNew}  onClose={()=> {
      setOpenNew(false)
    }}>
      <Grid item xs={12} position={"relative"} width={"100vw"} height={"100wh"} >
              <Button sx={{position:"absolute", right:0 , bgcolor:"transparent", color:"red", fontSize:"900px", '&:hover':{cursor:"pointer"}}} onClick={
                ()=>{
                  setOpenNew(false)
                }
              }>
                <CloseOutlinedIcon />
              </Button>
            <Card sx={{justifyItems:"center",paddingY:'50px', borderRadius:"0px 300px 0px 0px",boxShadow:"1px 15px 20px 9px" , display:'flex', bgcolor:"#347362" ,flexDirection:'column', alignItems:'center',height:"100%", width:"100%",  }}>
              <Typography variant='h3' paddingBottom={2} color={"#ffffff"}>Update New Deal</Typography>
              <Divider />
              <CardContent sx={{display:"grid",justifyContent:"space-evenly",gap:2 , alignItems:"center", }}>
                <Box sx={{display:"flex", width:"100%", gap:2}}>
                  <TextField
                  fullWidth
                    required
                    id="outlined-required"
                    label="Deal Creator"
                    type='text'
                    placeholder='Deal Creator'
                    sx={{bgcolor:"white",}}
                    variant='filled'
                    onChange={(e)=> {
                      setData((pre)=> {
                        return ({
                          ...pre,
                          createdBy: e.target.value
                        })
                      })
                    }}
                  />

                    <TextField
                    fullWidth
                          id="outlined-select-currency"
                          select
                          label="Product"
                          value={currency}
                          onChange={handleChange}
                          sx={{bgcolor:"white"}}
                          variant='filled'
                        >
                          {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value} onClick={()=> {
                          setData(pre =>{
                            return({
                              ...pre, orderID:option.value
                            })
                          } )
                        }}>
                          {option.label}
                        </MenuItem>
                      ))}
                        </TextField>
                </Box>

                <Box sx={{display:"flex",justifyContent:"space-between", width:"100%", gap:2}}>
                  <TextField
                  fullWidth
                    required
                    id="outlined-required"
                    label="Amount"
                    type='text'
                    placeholder="Amount"
                    sx={{bgcolor:"white"}}
                    variant='filled'
                    onChange={(e)=>{
                      setData(pre =>{
                        return{
                          ...pre, cryptoCurrency:e.target.value
                        }
                      })
                    }}
                  />
                  <TextField
                  fullWidth
                    required
                    id="outlined-required"
                    label="consultant"
                    type="text"
                    placeholder="consultant"
                    sx={{bgcolor:"white"}}
                    variant='filled'
                    onChange={(e)=>{
                      setData(pre =>{
                        return{
                          ...pre, consultant:e.target.value
                        }
                      })
                    }}
                  />
                </Box>

              </CardContent>
              <Button variant='contained' sx={{width:"78%", color:"white"}} onClick={()=> {
              setList((pre)=> {
                return [...pre, {
                  id: '1',
                  orderDetails: 'Owner',
                  createdBy:'Khushboo',
                  orderDate: new Date().getTime(),
                  status: 'Pending',
                  consultant:"",
                  orderID: 'Term Loan',
                  sourceName: 'Bank Account',
                  sourceDesc: '*** 1111',
                  amountCrypto: ' ',
                  cryptoCurrency: '0',
                  currency: '₹',
                  ...data
                }]
              })
              setOpenNew(false)
            }} >
                        Submit
              </Button>
            </Card>
      </Grid>
          </Dialog>
    
  );
}

export default UpdateForm;
