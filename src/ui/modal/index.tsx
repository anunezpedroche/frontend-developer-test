import Button from "../button";
import "./index.css";
import * as ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  onClose: () => void;
}

export default function Modal({ children, title, onClose }: ModalProps) {
  return ReactDOM.createPortal(
    <div className="modal__background">
      <div className="modal__container">
        <div className="modal__title">
          <h3 className="modal__title--text">{title}</h3>
          <Button
            variant="ghost"
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              onClose();
            }}
          >
            X
          </Button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal") as Element
  );
}
