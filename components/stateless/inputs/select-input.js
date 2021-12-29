import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectInput = ({ label, options, value, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={label}>{label}</InputLabel>
      <Select labelId={label} value={value} onChange={onChange} sx={{ height: 42 }}>
        {options.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
