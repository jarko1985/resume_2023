import React from "react";
import PIC from "../assets/profile_pic1.JPG";
import Home from "../assets/home.svg";
import Phone from "../assets/phone.svg";
import Email from "../assets/email.svg";
import Portfolio from "../assets/portfolio.svg";

export const Header = () => {
  return (
    <>
      <div
        className="row"
        style={{
          marginLeft: "5px",
          marginRight: "5px",
          borderBottom: "4px inset grey",
        }}
      >
        <div className="col-9">
          <h2 style={styles.name}>Hassan Jarko</h2>
          <h3 style={styles.profession}>Full Stack Engineer</h3>
          <p style={{ fontSize: "1rem" }}>
            React JS || Next JS || React Native || Node JS || TypeScript || CI/CD || Docker || MYSQL || MONGODB || tailwind || CSS3 || SCSS || Bootstrap5
          </p>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img style={styles.icons} src={Home} alt="home" />
                <p style={{ marginLeft: "5px", marginTop: "20px" }}>
                 Al Nahda 1 Dubai 
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img style={styles.icons} src={Phone} alt="phone" />
                <p style={{ marginLeft: "5px", marginTop: "20px" }}>
                  +971 50 951 8842
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img style={styles.icons} src={Email} alt="email" />
                <p style={{ marginLeft: "5px", marginTop: "20px" }}>
                  <a href="mailto:hassan.jarko@yahoo.com">
                    hassan.jarko@yahoo.com
                  </a>
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img style={styles.icons} src={Portfolio} alt="portfolio" />
                <p style={{ marginLeft: "5px", marginTop: "20px" }}>
                  <a href="https://hassan-jarko-portfolio.netlify.app/">
                    Portfolio Website
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center">
          <img style={styles.profileImage} src={PIC} alt="hassan_pic" />
        </div>
      </div>
    </>
  );
};

const styles = {
  titles: {
    fontSize: "12px",
    fontWeight: "bold",
  },
  profileImage: {
    width: "200px",
    height: "260px",
    border: "2px grey inset",
  },
  name: {
    marginBottom: "15px",
  },
  profession: {
    marginBottom: "20px",
  },
  icons: {
    width: "30px",
    height: "30px",
  },
};
