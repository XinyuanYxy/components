import reactDOM from "react-dom";
import { useEffect } from "react";
export default function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return reactDOM.createPortal(
    <div>
      <div className="absolute inset-0 bg-gray-100/50 " onClick={onClose}></div>
      <div className="absolute left-36 top-36 mr-4 p-2 bg-white">
        <div className="flex flex-col justify-between ">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}
