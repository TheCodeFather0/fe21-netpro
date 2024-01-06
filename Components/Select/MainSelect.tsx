import React from "react";
import Image from "next/image";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormControl, MenuItem } from "@mui/material";

interface ISelect {
  state: any;
  setState: any;
  data: any;
}
const MainSelect = ({ state, setState, data }: ISelect) => {
  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };

  return (
    <FormControl>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={state}
        label="Age"
        onChange={handleChange}
        sx={{
          height: 40,
          display: "flex",
          alignItems: "center",
          "& > *": { color: "white" },
        }}
      >
        {data.map((item: string) => {
          return <MenuItem value={item}>{item}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default MainSelect;
