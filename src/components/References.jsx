import React from "react";
import { BsPersonBoundingBox } from "react-icons/bs";

export const References = () => {
  return (
    <div className="row mt-3">
      <h2>References:</h2>
      <div style={{ display: "flex" }}>
        <BsPersonBoundingBox size={20} style={{ marginRight: "1rem" }} />
        <p>
          Dr. Mirna Nachouki:Assistant Professor Ajman university +971 50 455
          4056
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <BsPersonBoundingBox size={20} style={{ marginRight: "1rem" }} />
        <p>
          Dr. Khaled Ammar:Assistant Professor Ajman university +971 50 711 9397
        </p>
      </div>
    </div>
  );
};
