import * as React from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function BasicSelect( props ) {
  const [nationality, setNationality] = React.useState('');

  const handleChange = (event) => {
    setNationality(event.target.value);
    props.data_basicselect(event.target.value) ;
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Nationality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={nationality}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'Pakistani'}>Pakistani</MenuItem>
          <MenuItem value={'Indian'}>Indian</MenuItem>
          <MenuItem value={'American'}>American</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}