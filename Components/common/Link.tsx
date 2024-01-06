import { ILinks } from "@/Interface";
import { Link } from "@mui/material";
import React from "react";

const MainLink = ({ to, children }: ILinks) => {
  return <Link href={to}>{children}</Link>;
};

export default MainLink;
