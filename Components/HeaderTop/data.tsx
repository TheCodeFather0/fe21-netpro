import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

interface ILinks {
  id: number;
  title?: string;
  icon: any;
}
export const navLinks: ILinks[] = [
  {
    id: 0,
    title: "Fəzail Bayramov küç., 1156, Xətai ray., Bakı, Azərbaycan, AZ1025",
    icon: <LocationOnIcon />,
  },
  {
    id: 1,
    title: "+994505754080 / +994505754070",
    icon: <WhatsAppIcon />,
  },
  {
    id: 2,
    title: "info@netprogroup.az",
    icon: <EmailIcon />,
  },
];

export const icons: ILinks[] = [
  {
    id: 0,
    icon: <LocationOnIcon />,
  },
  {
    id: 1,
    icon: <WhatsAppIcon />,
  },
  {
    id: 2,
    icon: <EmailIcon />,
  },
];
