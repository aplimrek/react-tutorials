import { MouseEventHandler } from "react";
import "../App.css";

type PrimaryModalProps = {
  closePortal: MouseEventHandler<any>;
};

const PrimaryModal = ({ closePortal }: PrimaryModalProps) => {
  return (
    <div onClick={closePortal} className="modal">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal-content"
      >
        Cool
        <button onClick={closePortal}>Close Portal</button>
      </div>
    </div>
  );
};

export default PrimaryModal;
