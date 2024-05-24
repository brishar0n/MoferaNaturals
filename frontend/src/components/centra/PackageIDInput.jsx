import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const packageIDs = [
  123,
  127,
  102,
  19,
  40,
  51,
  63,
];

function getStyles(id, packageID, theme) {
  return {
    fontWeight:
    packageID.indexOf(id) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function PackageIDInput({ onPackageIDChange }) {
  const theme = useTheme();
  const [packageID, setPackageID] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPackageID(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    onPackageIDChange(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div className='montserrat'>
      <FormControl className="w-full bg-quinary">
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={packageID}
          onChange={handleChange}
          input={<OutlinedInput notched={false} sx={{border: 'none', boxShadow:'none'}}/>}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} sx={{ height: 20, fontSize: 12 }}  />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
          sx={{
            fontSize: 12,
            border: 'none',
            boxShadow: 'none', 
          }}
        >
          {packageIDs.map((id) => (
            <MenuItem
              key={id}
              value={id}
              style={getStyles(id, packageID, theme)}
            >
              {id}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
