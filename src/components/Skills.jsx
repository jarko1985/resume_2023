import React from "react";
import { FaClipboardCheck } from "react-icons/fa";
import REACT_LOGO from "../assets/react_logo.png";
import NODE_LOGO from "../assets/node_logo.png";
import CSS_LOGO from "../assets/css_logo.png";
import SQL_LOGO from "../assets/sql_logo.png";
import MONGO_LOGO from "../assets/mongo_logo.png";
import BOOTSTRAP_LOGO from "../assets/bootstrap_logo.png";
import SASS from '../assets/sass.svg';
import REACT_NATIVE_LOGO from "../assets/react_native_logo.png";
import NEXT from '../assets/next.svg';
import KOA from '../assets/koa.svg';
import TAILWIND from '../assets/tailwind-logocss.svg';
import DOCKER from '../assets/docker-logo.svg'  

export const Skills = () => {
  return (
    <div className="row mt-1">
      <h2>Skills</h2>
      <ul style={{ marginLeft: "20px", listStyle: "none" }}>
        <div style={{ display: "flex" }}>
          <FaClipboardCheck color="green" size={20} />
          <li style={styles.text}>
            Well versed in React JS && Next JS...including  Redux(State Management), Zustand, Context API, Props, Hoc,
            Routing....etc
          </li>
        </div>
        <div style={{ display: "flex" }}>
          <FaClipboardCheck color="green" size={20} />
          <li style={styles.text}>
          Mobile Development: React Native, Redux, Expo
          </li>
        </div>
        <div style={{ display: "flex" }}>
          <FaClipboardCheck color="green" size={20} />
          <li style={styles.text}>
          Handle data fetching and integration with backend services or APIs.
          </li>
        </div>
        <div style={{ display: "flex" }}>
          <FaClipboardCheck color="green" size={20} />
          <li style={styles.text}>
          Familiarity with containerization and deployment using technologies like Docker and Kubernetes.
          </li>
        </div>
        <div style={{ display: "flex" }}>
          <FaClipboardCheck color="green" size={20} />
          <li style={styles.text}>
          Write well-documented, clean, and modular code following best practices.
          </li>
        </div>
        <div style={{ display: "flex" }}>
          <FaClipboardCheck color="green" size={20} />
          <li style={styles.text}>
            Experience dealing with MongoDB, SQL, and Firebase....
          </li>
        </div>
        <div style={{ display: "flex" }}>
          <FaClipboardCheck color="green" size={20} />
          <li style={styles.text}>
            Client Side Rendering with React or PUG or EJS or HBS
          </li>
        </div>
        <div style={{ display: "flex" }}>
          <FaClipboardCheck color="green" size={20} />
          <li style={styles.text}>
            knowledge dealing with cloud technologies like Azure, google cloud,
            and Amazon AWS
          </li>
        </div>
        <div style={{ display: "flex" }}>
          <FaClipboardCheck color="green" size={20} />
          <li style={styles.text}>
            Experience dealing with versions and version control Git-GitHub- Bit
            bucket
          </li>
        </div>
        <div style={{ display: "flex" }}>
          <FaClipboardCheck color="green" size={20} />
          <li style={styles.text}>
            Software engineering:write scripts, software test procedures,
            compatibility
          </li>
        </div>
        <div style={{ display: "flex" }}>
          <FaClipboardCheck color="green" size={20} />
          <li style={styles.text}>
            Hardware experience:in depth knowledge of how a computer is built,as
            well as the various components that go into the computers
          </li>
        </div>
        <div style={{ display: "flex" }}>
          <FaClipboardCheck color="green" size={20} />
          <li style={styles.text}>Programming languages:</li>
        </div>
      </ul>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div className="col d-flex align-items-center">
            <img style={styles.logos} src={REACT_LOGO} alt="react" />
            <p style={{ marginLeft: "5px", marginTop:'1rem' }}>React JS</p>
          </div>
          <div className="col d-flex align-items-center">
            <img style={styles.logos} src={NEXT} alt="react" />
            <p style={{ marginLeft: "5px",marginTop:'1rem' }}>NEXT JS</p>
          </div>
          <div className="col d-flex align-items-center">
            <img style={styles.logos} src={NODE_LOGO} alt="node" />
            <p style={{ marginLeft: "5px", marginTop:'1rem' }}>Node JS</p>
          </div>
          <div className="col d-flex align-items-center">
            <img style={styles.logos} src={DOCKER} alt="node" />
            <p style={{ marginLeft: "5px", marginTop:'1rem' }}>Docker</p>
          </div>
          <div className="col d-flex align-items-center">
            <img style={styles.logos} src={TAILWIND} alt="node" />
            <p style={{ marginLeft: "5px", marginTop:'1rem' }}>tailwind CSS</p>
          </div>
         
        </div>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <div className="col d-flex align-items-center">
            <img style={styles.logos} src={BOOTSTRAP_LOGO} alt="bootstrap" />
            <p style={{ marginLeft: "5px", marginTop:'1rem' }}>Bootstrap 5</p>
          </div>
          <div className="col d-flex align-items-center">
            <img style={styles.logos} src={REACT_NATIVE_LOGO} alt="React Native" />
            <p style={{ marginLeft: "5px", marginTop:'1rem' }}>React Native</p>
          </div>
          <div className="col d-flex align-items-center">
            <img style={styles.logos} src={CSS_LOGO} alt="css" />
            <p style={{ marginLeft: "5px", marginTop:'1rem' }}>CSS3</p>
          </div>
          {/* <div className="col d-flex align-items-center">
            <img style={styles.logos} src={REACT_NATIVE_LOGO} alt="css" />
            <p style={{ marginLeft: "5px", marginTop:'1rem' }}>React Native</p>
          </div> */}
          <div className="col d-flex align-items-center">
            <img style={styles.logos} src={SQL_LOGO} alt="sql" />
            <p style={{ marginLeft: "5px" , marginTop:'1rem' }}>My SQL</p>
          </div>
          <div className="col d-flex align-items-center">
            <img style={styles.logos} src={MONGO_LOGO} alt="mongo" />
            <p style={{ marginLeft: "5px" , marginTop:'1rem' }}>Mongo DB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  icons: {
    color: "green",
  },
  logos: {
    width: "50px",
    height: "50px",
  },
  text: {
    fontSize: "1.1rem",
    marginLeft: "5px",
  },
};
