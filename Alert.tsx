import React from "react";

interface Props {
  children: string;
  onClose: () => void;
}

const Alert: React.FC<Props> = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible ">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
