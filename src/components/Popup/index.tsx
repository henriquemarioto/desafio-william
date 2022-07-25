import { Container } from "./style";
import React, { HTMLAttributes, ReactNode } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface Props {
  title: string;
  setShowPopup: any;
  children: ReactNode;
}

const Popup = ({ title, setShowPopup, children }: Props) => {
  return (
    <Container>
      <div>
        <div>
          <h3>{title}</h3>
          <Button onClick={() => setShowPopup(false)}>
            <IoMdClose />
          </Button>
        </div>
        {children}
      </div>
    </Container>
  );
};

export default Popup;
