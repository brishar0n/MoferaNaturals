import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { getPackages } from '../../../api/centraAPI';

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

// const packageData = [
//   { packageId: 123, shippingId: null, status: "READY TO SHIP" },
//   { packageId: 127, shippingId: 1, status: "CONFIRMED" },
//   { packageId: 102, shippingId: 2, status: "CANCELLED" },
//   { packageId: 19, shippingId: 1, status: "SHIPPING" },
//   { packageId: 40, shippingId: 2, status: "CONFIRMED"},
//   { packageId: 51, shippingId: null , status: "READY TO SHIP"},
//   { packageId: 63, shippingId: 1, status: "CONFIRMED" },
// ];

// const packageData = [
//   { id: 123, centra_id: 1, weight: 10, shippingId: null, status: 0, received_date: null, reception_id: null, exp_date: "2025-05-01" },
//   { id: 127, centra_id: 2, weight: 5, shippingId: 1, status: 2, received_date: "2024-06-21", reception_id: null, exp_date: "2025-06-15" },   // 
//   { id: 102, centra_id: 3, weight: 0, shippingId: 2, status: 2, received_date: "2024-06-25", recepiton_id: null, exp_date: "2025-06-19" },  // not arrived in gh
//   { id: 19, centra_id: 3, weight: 8, shippingId: 1, status: 1, received_date: null, reception_id: null, exp_date: "2025-07-10" },  // confirmed by gh
//   { id: 40, centra_id: 4, weight: 10, shippingId: 2, status: 3, received_date: "2024-06-30", reception_id: 1, exp_date: "2025-04-01" },  // received by xyz
//   { id: 51, centra_id: 5, weight: 5, shippingId: null, status: 0, received_date: null, reception_id: null, exp_date: "2025-06-15"  }, // package not sent and expired
//   { id: 63, centra_id: 6, weight: 8, shippingId: 1, status: 3, received_date: "2024-07-06", reception_id: 2, exp_date: "2025-06-16" }, 
// ];

function getStyles(id, packageID, theme) {
  return {
    fontWeight:
    packageID.indexOf(id) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function PackageIDInput({ shippingID, onPackageIDChange, confirmed, packageData }) {
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

  React.useEffect(() => {
    // Reset selected package IDs when shipping ID changes
    setPackageID([]);
  }, [shippingID]);

  // Filter package IDs based on the selected shipping ID
  const filteredPackageIDs = packageData
    .filter((pkg) => pkg.shipping_id === shippingID)
    .map((pkg) => pkg.id);

  const filterPackageIDsConfirmed = packageData
    .filter((pkg) => pkg.status === 2)
    .map((pkg) => pkg.id);

  // Filter package IDs that are either not shipped or belong to the selected shipping ID
  const packageIDsToShow = confirmed
    ? filterPackageIDsConfirmed
    : shippingID
      ? filteredPackageIDs
      : packageData
        .filter((pkg) => pkg.shipping_id === null)
        .map((pkg) => pkg.id);


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
          {packageIDsToShow.map((id) => (
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
