import React from "react";
import HeroPNG from "./Assets/img/Hero.png";

function Hero() {
  return (
    <div
      style={{
        //     width: "100%",
        //     height: 600,
        position: "relative",
        //     backgroundImage: `url(${HeroPNG})`,
        //     backgroundSize: "cover",
        //     filter: "brightness(50%)",
      }}
    >
      {/* <img
        src={HeroPNG}
        alt=""
        style={{
          width: "100%",
          height: "auto",
          //   opacity: 0.5,
          filter: "brightness(50%)",
          //   position: "absolute",
        }}
      /> */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          backgroundImage: `url(${HeroPNG})`,
          backgroundSize: "cover",
          filter: "brightness(50%)",
        }}
      ></div>
      <div
        style={{
          zIndex: 1,
          filter: "none",
          position: "absolute",
          color: "#fff",
          textAlign: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -70%)",
          fontSize: 38,
          width: "100%",
        }}
      >
        <div style={{ fontWeight: "bold" }}>
          ORIGINAL <span style={{ fontSize: 48 }}>&amp;</span> UNIQUE
        </div>
        <div>ARCHITECT DESIGNS FOR YOUR LIVING SPACES</div>
        <div></div>
      </div>
    </div>
  );
}

export default Hero;
