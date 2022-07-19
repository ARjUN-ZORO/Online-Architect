import React from "react";
import BG from "./Assets/img/bg.png";
function Three() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: 16,
          margin: 50,
          padding: 20,
          width: 700,
          // height: 200,
          boxShadow: "rgba(0, 0, 0, 0.5) 15px 10px 40px -17px",
          position: "relative",
        }}
      >
        <div
          style={{
            padding: 5,
            borderColor: "#000",
            borderWidth: 1,
            borderStyle: "dashed",
            width: "fit-content",
            borderRadius: 32,
            position: "absolute",
            top: "-25px",
            left: "-25px",
          }}
        >
          <input
            type="submit"
            value="3"
            style={{
              backgroundImage: "linear-gradient(to right, #ff9f00, #f9eb00)",
              borderRadius: 32,
              padding: "15px 20px",
              borderWidth: 0,
              fontSize: 20,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // alignItems: "center",
            padding: 20,
          }}
        >
          <div style={{ fontSize: 22 }}>Select Architectural plan :</div>
          <div
            style={{
              borderWidth: 3,
              borderRadius: 15,
              borderColor: "black",
              borderStyle: "solid",
              height: 100,
              position: "relative",
              backgroundImage: `url(${BG})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              //   position: "relative",
            }}
          >
            <div
              style={{
                height: 0,
                width: 100,
                borderBottom: "100px solid #ff9f00",
                borderRight: "70px solid transparent",
                transform: "rotateX(180deg)",
                position: "absolute",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                // left: "-1px",
                // padding: 20,
                zIndex: 1,
              }}
            ></div>
            <div
              style={{
                backgroundColor: "rgba(250, 250, 250, 0.5)",
                height: "100%",
                position: "relative",
              }}
            ></div>
            {/* <div> szf zd g</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Three;
