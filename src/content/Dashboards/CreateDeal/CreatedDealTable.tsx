'use client';
import { FC, ChangeEvent, useState, useEffect } from 'react';
import { format } from 'date-fns';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  useTheme,
  CardHeader,
  TextField,
  InputAdornment
} from '@mui/material';

import Label from '@/components/Label';
import { CryptoOrder, CryptoOrderStatus } from '@/models/crypto_order';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import BulkActions from '../../Management/Transactions/BulkActions';
import EditForm from './EditForm';
import UpdateForm from './UpdateForm';
import { AddBox, Search } from '@mui/icons-material';
import { TooltipWrapper } from '@/components/LogoSign';
import axios from 'axios';

interface CreatedDealTableProps {
  className?: string;
  cryptoOrders: CryptoOrder[];
}

interface Filters {
  status?: CryptoOrderStatus;
}

const getStatusLabel = (cryptoOrderStatus: CryptoOrderStatus): JSX.Element => {
  const map = {
    failed: {
      text: 'Failed',
      color: 'error'
    },
    completed: {
      text: 'Completed',
      color: 'success'
    },
    pending: {
      text: 'Pending',
      color: 'warning'
    },
    inprogress: {
      text: 'In Progress',
      color: 'blue'
    }
  };

  const { text, color }: any = map[cryptoOrderStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (
  cryptoOrders: CryptoOrder[],
  filters: Filters
): CryptoOrder[] => {
  return cryptoOrders.filter((cryptoOrder) => {
    let matches = true;

    if (filters.status && cryptoOrder.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  cryptoOrders: CryptoOrder[],
  page: number,
  limit: number
): CryptoOrder[] => {
  return cryptoOrders.slice(page * limit, page * limit + limit);
};

const CreatedDealTable: FC<CreatedDealTableProps> = ({ cryptoOrders }) => {
  const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
    []
  );
  const selectedBulkActions = selectedCryptoOrders.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [open, setOpen] = useState<boolean>(false);
  const [deletestatus, setDeletestatus] = useState<boolean>(false);
  const [openNew, setOpenNew] = useState<boolean>(false);
  const [selectedIndex, setSelectedId] = useState<number>(0);
  const [createdeals, setCreatedeals] = useState<any>([]);
  const [isUpdate, setIsUpadte] = useState<any>([]);
  const [filters, setFilters] = useState<Filters>({
    status: null
  });

  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'completed',
      name: 'Completed'
    },
    {
      id: 'pending',
      name: 'Pending'
    },
    {
      id: 'failed',
      name: 'Failed'
    },
    {
      id: 'inprogress',
      name: 'In Progress'
    }
  ];

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  const handleSelectAllCryptoOrders = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedCryptoOrders(
      event.target.checked
        ? cryptoOrders.map((cryptoOrder) => cryptoOrder.id)
        : []
    );
  };

  const handleSelectOneCryptoOrder = (
    _event: ChangeEvent<HTMLInputElement>,
    cryptoOrderId: string
  ): void => {
    if (!selectedCryptoOrders.includes(cryptoOrderId)) {
      setSelectedCryptoOrders((prevSelected) => [
        ...prevSelected,
        cryptoOrderId
      ]);
    } else {
      setSelectedCryptoOrders((prevSelected) =>
        prevSelected.filter((id) => id !== cryptoOrderId)
      );
    }
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const [paginatedCryptoOrders, setpaginatedCryptoOrders] = useState([]);
  const [filteredCryptoOrders, setfilteredCryptoOrders] = useState([]);

  useEffect(() => {
    const filter_data = applyFilters(cryptoOrders, filters);
    setfilteredCryptoOrders(filter_data);
    setpaginatedCryptoOrders(applyPagination(filter_data, page, limit));
    // console.log(filter_data);
  }, [cryptoOrders]);
  const selectedSomeCryptoOrders =
    selectedCryptoOrders.length > 0 &&
    selectedCryptoOrders.length < cryptoOrders.length;
  const selectedAllCryptoOrders =
    selectedCryptoOrders.length === cryptoOrders.length;
  const theme = useTheme();

  const [search, setSearch] = useState();

  //   const SearchData = (value1) =>{
  //     return cryptoOrders.filter((val)=>{
  //         return (val.createdBy.toLowerCase().includes(value1.toLowerCase()))
  //     })
  // }
  // SearchData(search)

  // convert date
  function convertMillisecondsToDate(milliseconds) {
    // Create a new Date object with the provided milliseconds
    const date = new Date(milliseconds);

    // Extract individual components of the date
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const millisecondsPart = date.getMilliseconds();

    // Format the date as a string
    const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${
      day < 10 ? '0' + day : day
    } ${hours}:${minutes}:${seconds}.${millisecondsPart}`;

    return formattedDate;
  }

  const handleDelete = async (id: any) => {
    console.log(`deleting ${id}`);
    try {
      await axios.delete(`http://localhost:3000/api/deal?id=${id}`);
      setDeletestatus(!deletestatus);
      alert('Deals deleted sucessfully');
    } catch (error) {
      alert('deals s note deleted ');
    }
  };

  useEffect(() => {
    const fetchRecentDeals = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/deal');
        console.log(res, 'create deas response');
        setCreatedeals(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRecentDeals();
  }, [deletestatus]);
  return (
    <>
      <EditForm
        data={cryptoOrders}
        open={open}
        setOpen={setOpen}
        selectedIndex={selectedIndex}
      />
      <UpdateForm
        update={isUpdate}
        openNew={openNew}
        setOpenNew={setOpenNew}
        setList={() => {}}
      />
      <Card>
        {selectedBulkActions && (
          <Box flex={1} p={2}>
            <BulkActions />
          </Box>
        )}
        {!selectedBulkActions && (
          <CardHeader
            action={
              <Box
                width={'100%'}
                display={'flex'}
                alignItems={'center'}
                gap={2}
              >
                <IconButton>
                  <AddBox />
                </IconButton>
                <FormControl fullWidth variant="outlined">
                  {search}
                  <TextField
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    label="Search"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment>
                          <Search />
                        </InputAdornment>
                      )
                    }}
                  />
                </FormControl>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={filters.status || 'all'}
                    onChange={handleStatusChange}
                    label="Status"
                    autoWidth
                  >
                    {statusOptions.map((statusOption) => (
                      <MenuItem key={statusOption.id} value={statusOption.id}>
                        {statusOption.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            }
            title="Recent Orders"
          />
        )}
        <Divider />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={selectedAllCryptoOrders}
                    indeterminate={selectedSomeCryptoOrders}
                    onChange={handleSelectAllCryptoOrders}
                  />
                </TableCell>
                <TableCell>Deal Creator</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Date</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {createdeals?.map((a, index) => (
                <TableRow
                  hover
                  key={index}
                  // selected={isCryptoOrderSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      // checked={isCryptoOrderSelected}
                      // onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      //   handleSelectOneCryptoOrder(event, cryptoOrder.id)
                      // }
                      // value={isCryptoOrderSelected}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {/* {createdeals?.map((a) => a?.createdBy)} */}
                      {a?.createdBy}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {a?.orderID}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {convertMillisecondsToDate(a?.orderDate)}
                      {/* {format(a?.orderDate? a?.orderDate :"" , 'MMMM dd yyyy')} */}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {/* {cryptoOrder.amountCrypto} */}
                      {a?.cryptoCurrency}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {/* {numeral(cryptoOrder.amount).format(
                          `${cryptoOrder.currency}0,0.00`
                        )} */}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">{a?.status}</TableCell>
                  <TableCell align="right">
                    <Tooltip title="Order Information" arrow>
                      <IconButton
                        // onClick={() => {
                        //   setOpen((pre) => !pre);
                        //   setSelectedId(indexOfElementInList)
                        // }}
                        sx={{
                          '&:hover': {
                            background: theme.colors.info.lighter
                          },
                          color: theme.palette.info.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <PermIdentityTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit Order" arrow>
                      <IconButton
                        onClick={() => {
                          setOpenNew((pre) => !pre);
                          // setSelectedId(a)
                          setIsUpadte(a);
                        }}
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Order" arrow>
                      <IconButton
                        sx={{
                          '&:hover': { background: theme.colors.error.lighter },
                          color: theme.palette.error.main
                        }}
                        color="inherit"
                        size="small"
                        onClick={() => {
                          const id = a?._id;
                          handleDelete(id);
                        }}
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box p={2}>
          <TablePagination
            component="div"
            count={filteredCryptoOrders.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25, 30]}
          />
        </Box>
      </Card>
    </>
  );
};

CreatedDealTable.propTypes = {
  cryptoOrders: PropTypes.array.isRequired
};

CreatedDealTable.defaultProps = {
  cryptoOrders: []
};

export default CreatedDealTable;
