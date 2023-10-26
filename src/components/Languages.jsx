import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import ENGLAND from "../assets/england.png";
import UAE from "../assets/uae.png";
import GERMANY from "../assets/germany.png";
export const Languages = () => {
  return (
    <div className="row mt-3">
      <h2>Languages</h2>
      <div style={styles.languagesContainer}>
        <div style={{ display: "flex", alignItems: "center", margin:"0.4rem 0" }}>
          <img src={UAE} alt="uae" style={styles.flagStyles} />
          <p style={{ marginLeft: "5px", marginTop: "15px" }}>
            Arabic: Native Language
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "stretch" , margin:"0.4rem 0" }}>
          <img src={ENGLAND} alt="england" style={styles.flagStyles} />
          <p style={{ marginLeft: "5px" }}>English: </p>
          <div
            style={{ marginLeft: "5px", marginRight: "5px", display: "flex" }}
          >
            <p style={{ marginRight: "5px" }}>Speaking</p>
            <BsStarFill size={20} color="green" />
            <BsStarFill size={20} color="green" />
            <BsStarFill size={20} color="green" />
            <BsStarFill size={20} color="green" />
            <BsStarFill size={20} color="green" />
          </div>
          <div style={{ marginLeft: "5px", display: "flex" }}>
            <p style={{ marginRight: "5px" }}>Reading</p>
            <BsStarFill size={20} color="green" />
            <BsStarFill size={20} color="green" />
            <BsStarFill size={20} color="green" />
            <BsStarFill size={20} color="green" />
            <BsStarFill size={20} color="green" />
          </div>
          <div style={{ marginLeft: "5px", display: "flex" }}>
            <p style={{ marginRight: "5px" }}>Writing</p>
            <BsStarFill size={20} color="green" />
            <BsStarFill size={20} color="green" />
            <BsStarFill size={20} color="green" />
            <BsStarFill size={20} color="green" />
            <BsStarFill size={20} color="green" />
          </div>
        </div>
        <div style={{ display: "flex", margin:"0.4rem 0" }}>
          <img src={GERMANY} alt="germany" style={styles.flagStyles} />
          <p style={{ marginLeft: "5px" }}>German: </p>
          <div
            style={{ marginLeft: "5px", marginRight: "5px", display: "flex" }}
          >
            <p style={{ marginRight: "5px" }}>Speaking</p>
            <BsStarFill size={20} color="green" />
            <BsStarHalf size={20} color="green" />
            <BsStar size={20} color="green" />
            <BsStar size={20} color="green" />
            <BsStar size={20} color="green" />
          </div>
          <div style={{ marginLeft: "5px", display: "flex" }}>
            <p style={{ marginRight: "5px" }}>Reading</p>
            <BsStarFill size={20} color="green" />
            <BsStar size={20} color="green" />
            <BsStar size={20} color="green" />
            <BsStar size={20} color="green" />
            <BsStar size={20} color="green" />
          </div>
          <div style={{ marginLeft: "5px", display: "flex" }}>
            <p style={{ marginRight: "5px" }}>Writing</p>
            <BsStarFill size={20} color="green" />
            <BsStar size={20} color="green" />
            <BsStar size={20} color="green" />
            <BsStar size={20} color="green" />
            <BsStar size={20} color="green" />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  flagStyles: {
    width: "35px",
    height: "35px",
  },
};
