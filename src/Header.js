import React from "react";

function Header() {
  return (
    <div
      style={{
        width: "100%",
        height: 50,
        // backgroundImage: "linear-gradient(to right, #ff9f00, #f9eb00)",
        position: "absolute",
        zIndex: 999,
      }}
    >
      <div
        style={{
          color: "#f9eb00",
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontWeight: "bold",
          //   position: "fixed",
        }}
      >
        <div style={{ paddingLeft: 15 }}>
          <div>LOGO</div>
        </div>
        <div style={{ paddingRight: 55, color: "ff9f00" }}>
          <div>Login</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
