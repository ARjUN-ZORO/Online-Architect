import React from "react";
import EWNS from "./Assets/img/EWNS.png";

function One() {
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
          marginTop: 100,
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
            value="1"
            style={{
              backgroundImage: "linear-gradient(to right, #ff9f00, #f9eb00)",
              borderRadius: 32,
              padding: "15px 20px",
              borderWidth: 0,
              fontSize: 20,
            }}
          />
        </div>
        <form
          action=""
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // alignItems: "center",
            padding: 20,
          }}
        >
          <label htmlFor="" style={{ marginBottom: 20, fontSize: 22 }}>
            * Enter site dimensions & facing direction :
          </label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 30,
              alignItems: "end",
            }}
          >
            <label htmlFor="" style={{ fontSize: 20, marginRight: 10 }}>
              Site Measurement :
            </label>
            <select
              name=""
              id=""
              style={{
                backgroundColor: "#ffffff",
                padding: 5,
                borderWidth: 1,
                borderColor: "#000000",
                borderRadius: 5,
                width: 200,
                fontWeight: "bold",
                marginRight: 50,
              }}
            >
              <option value="20x30">20 x 30</option>
              <option value="20x30">30 x 40</option>
              <option value="20x30">30 x 50</option>
              <option value="20x30">40 x 60</option>
              <option value="20x30">60 x 80</option>
              <option value="other">Other</option>
            </select>
            <div>
              <div>* If others please specify :</div>
              <div>
                <input
                  type="number"
                  name="w"
                  id="w"
                  style={{
                    backgroundColor: "#ffffff",
                    padding: 5,
                    borderWidth: 1,
                    borderColor: "#000000",
                    borderRadius: 5,
                    fontWeight: "bold",
                    width: 50,
                  }}
                />{" "}
                X{" "}
                <input
                  type="number"
                  name="h"
                  id="h"
                  style={{
                    backgroundColor: "#ffffff",
                    padding: 5,
                    borderWidth: 1,
                    borderColor: "#000000",
                    borderRadius: 5,
                    fontWeight: "bold",
                    width: 50,
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <span style={{ fontSize: 20, marginRight: 10 }}>
              Total Measurement in Sq ft:
            </span>
            <input
              type="number"
              name=""
              id=""
              style={{
                backgroundColor: "#ffffff",
                padding: 5,
                borderWidth: 1,
                borderColor: "#000000",
                borderRadius: 5,
                fontWeight: "bold",
                width: 115,
                height: 30,
              }}
            />
          </div>
          <div
            style={{
              marginTop: 50,
              marginBottom: 50,
              width: 740,
              height: 0,
              borderBottom: 2,
              borderBottomStyle: "dashed",
              borderBottomColor: "black",
              right: 40,
              position: "relative",
            }}
          ></div>
          <div
            style={{
              fontSize: 20,
              marginBottom: 50,
            }}
          >
            <span style={{ marginRight: 20 }}>* Your Site Facing:</span>
            <select
              name=""
              id=""
              style={{
                backgroundColor: "#ffffff",
                padding: 5,
                borderWidth: 1,
                borderColor: "#000000",
                borderRadius: 5,
                width: 200,
                fontWeight: "bold",
              }}
            >
              <option value="">EAST</option>
            </select>
          </div>
          <img
            src={EWNS}
            alt=""
            srcset=""
            style={{
              width: 220,
              position: "relative",
              left: "-30px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: 50,
            }}
          >
            <input
              type="submit"
              value="PROCEED"
              style={{
                backgroundImage: "linear-gradient(to right, #ff9f00, #f9eb00)",
                borderRadius: 32,
                padding: "15px 40px",
                borderWidth: 0,
                boxShadow: "rgb(255 159 0) 15px 10px 40px -17px",
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default One;
