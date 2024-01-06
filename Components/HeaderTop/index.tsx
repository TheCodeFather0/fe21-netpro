"use client";
import * as React from "react";
import MainLink from "../common/Link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { SelectChangeEvent } from "@mui/material/Select";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import Image from "next/image";

export default function HeaderTop() {
  const [age, setAge] = React.useState("10");
  const [country, setCountry] = React.useState("10");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleChangeLang = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };

  return (
    <Stack
      direction="row"
      gap={2}
      bgcolor="primary.main"
      alignItems="center"
      sx={{
        height: 70,
        "& > a": { color: "white", fontSize: "13px" },
      }}
    >
      <MainLink to="/">
        <LocationOnIcon />
        Fəzail Bayramov küç., 1156, Xətai ray., Bakı, Azərbaycan, AZ1025
      </MainLink>

      <MainLink to="/">
        <WhatsAppIcon />
        +994505754080 / +994505754070
      </MainLink>

      <MainLink to="/">
        <EmailIcon />
        info@netprogroup.az
      </MainLink>

      <Box
        sx={{
          "& > a": {
            color: "white",
            display: "inline-block",
            border: "1px solid white",
            px: "0.5em",
            py: "0.3em",
            ml: 2,
            borderRadius: 1,
          },
        }}
      >
        <MainLink to="/">
          <LocationOnIcon />
        </MainLink>
        <MainLink to="/">
          <WhatsAppIcon />
        </MainLink>
        <MainLink to="/">
          <EmailIcon />
        </MainLink>
      </Box>

      <FormControl>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{
            border: "1px solid white",
            height: 40,
            "& > *": { color: "white" },
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="Age"
          onChange={handleChangeLang}
          sx={{
            height: 40,
            display: "flex",
            alignItems: "center",
            "& > *": { color: "white", border: 0 },
          }}
        >
          <MenuItem value={10}>
            <Image width={20} height={20} alt="flag" src="./flag.svg" /> AZ
          </MenuItem>
          <MenuItem value={20}>
            <Image width={20} height={20} alt="flag" src="./flag.svg" /> RU
          </MenuItem>
          <MenuItem value={30}>
            <Image width={20} height={20} alt="flag" src="./flag.svg" /> EN
          </MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}
