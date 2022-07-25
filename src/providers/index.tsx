import { ReactNode } from "react";
import { PeopleProvider } from "./people";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => (
  <PeopleProvider>{children}</PeopleProvider>
);

export default Providers;
