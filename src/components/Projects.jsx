import React from "react";
import GULF from "../assets/gulf.svg";
import SAUDI from "../assets/saudi.svg";
import AJMANMAPLOGO from '../assets/ajman_map_logo.png';
import Mex1 from '../assets/mex.webp';
import Mex2 from '../assets/mex2.webp';
import Mex3 from '../assets/mex3.webp';

export const Projects = () => {
  return (
    <>
    <div className="row mt-3 mb-3">
    <h2>Projects and Achievments</h2>
      <h3 className="mt-1">MEX Social Trading Mobile App:</h3>
      <p>
      A revolutionary mobile app that brings a new dimension to online trading.
       Seamlessly blending the power of social networking with cutting-edge trading technology.
       MEX Social Trading empowers users to make informed trading decisions, regardless of their level of experience. 
      </p>
      <p>
      <a href="https://play.google.com/store/apps/details?id=com.socialtrading&hl=en_US">Google play Link</a> ||
         <a href="https://apps.apple.com/lt/app/mex-social-trading-platform/id1625898867">  Apple Store Link</a>
      </p>
      <div style={{display:'flex',justifyContent:'space-around'}}>
      <img src={Mex1} width='200px'/> 
      <img src={Mex2} width='200px'/>
      <img src={Mex3} width='200px'/> 
      </div>  
      </div>
      <div className="row">
        <h3>Airline Reservation System:</h3>
        <p>
          An B2B/B2C online Solution, Provides 24/7 online access to Airline
          Admins/Travel Agents, Enableing them to search & book online all types
          of travel services (with instant confirmation & on-request
          capability)...Services include: Flight search || Reservation
          Management || Ancillary booking || Payment processing and many more.
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <a rel="noreferrer" href="https://gfabe.tpconnects.online">
                {" "}
                <img
                  style={{ width: "150px", height: "150px" }}
                  src={GULF}
                  alt="gulf"
                />
              </a>
              <p>https://gfabe.tpconnects.online</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <a
                rel="noreferrer"
                target="_blank"
                href="https://svuatabe.tpconnects.online"
              >
                <img
                  style={{ width: "150px", height: "150px" }}
                  src={SAUDI}
                  alt="saudi"
                />
              </a>
              <p>https://svuatabe.tpconnects.online</p>
            </div>
          </div>
        </p>
      </div>
      <div className="row">
        <h3 className="mt-1">Ajman Buisness Map:</h3>
        <p>
          An e-platform which displays businesses conducted at the emirate’s
          level and distributes them depending on the economic activities and
          geographic location. It also serves as informative portal for
          decision-makers in government entities, business community, investors
          and other stakeholders
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <a href="https://www.ajmanded.ae/imap">Ajman Business Map</a>
          <img src={AJMANMAPLOGO} alt="map logo"/>
        </div>
      </div>
      
    </>
  );
};
