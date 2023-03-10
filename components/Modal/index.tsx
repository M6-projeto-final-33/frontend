import { Container, OverWindow } from "./style";
import { RiCloseLine } from "react-icons/Ri";
import Button from "../Button";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

import ModalRequest, { IProps } from "./modalRequest";

const Modal = ({ title }: IProps): JSX.Element => {
  const { modal, setModal } = useContext(ModalContext);

  return (
    <>
      {modal && (
        <OverWindow>
          <Container>
            <header className="modal header">
              <h3 className="modal title">{title}</h3>
              <Button className="modal close" onClick={() => setModal(false)}>
                <RiCloseLine className="modal icon-close" />
              </Button>
            </header>
            <ModalRequest title={title} />
          </Container>
        </OverWindow>
      )}
    </>
  );
};

export default Modal;
