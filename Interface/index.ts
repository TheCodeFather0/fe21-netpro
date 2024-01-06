import { ReactNode } from "react";

export interface ILinks {
  to: string;
  children: ReactNode;
  key?: string | number;
}
