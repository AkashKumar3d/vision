import {
  Box,
  Button,
  OutlinedInput,
  Chip,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  FilledInput
} from '@mui/material';
import React, { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
const names = [
  'Humaira Sims',
  'Santiago Solis',
  'Dawid Floyd',
  'Mateo Barlow',
  'Samia Navarro',
  'Kaden Fields',
  'Genevieve Watkins',
  'Mariah Hickman',
  'Rocco Richardson',
  'Harris Glenn'
];

const Component = (props) => {
  const [selectedNames, setSelectedNames] = useState([]);
  return (
    <FormControl variant="filled" sx={{ bgcolor: 'white' }} fullWidth>
      <InputLabel>{props.componentName}</InputLabel>
      <Select
        multiple
        value={selectedNames}
        onChange={(e) => setSelectedNames(e.target.value)}
        renderValue={(selected) => (
          <Stack
            direction="row"
            flexWrap="nowrap"
            sx={{
              overflow: 'auto',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none'
              },
              '&-ms-overflow-style:': {
                display: 'none'
              }
            }}
          >
            {selected.map((value) => (
              <Chip
                key={value}
                label={value}
                onDelete={() =>
                  setSelectedNames(
                    selectedNames.filter((item) => item !== value)
                  )
                }
                deleteIcon={
                  <CancelIcon
                    onMouseDown={(event) => event.stopPropagation()}
                  />
                }
              />
            ))}
          </Stack>
        )}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default Component;

export const Upload = (props) => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <FormControl variant="filled" sx={{ bgcolor: 'whitesmoke' }} fullWidth>
      <Stack alignItems="center" height={'50px'} width={'100%'}>
        <label htmlFor="upload-image" style={{ height: '', width: '80%' }}>
          <input
            id="upload-image"
            accept="image/*"
            type="file"
            style={{ display: 'none', backgroundColor: 'red' }}
            onChange={handleFileUpload}
            placeholder="Name"
          />
          <Box
            width={'100%'}
            sx={{
              justifyContent: 'space-between',
              display: 'flex',
              height: '100%'
            }}
          >
            {props.uploadName}
            {imageUrl && (
              <img src={imageUrl} alt="Uploaded Image" height={30} />
            )}
          </Box>
        </label>
      </Stack>
    </FormControl>
  );
};
