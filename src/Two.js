import React from "react";

function Two() {
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
            value="2"
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
            * Select basement, ground &amp; number of floors. Enter space
            features like kitchen, living room etc., and upload rough sketch or
            image.
          </label>
          <div style={{ display: "flex", fontSize: 20 }}>
            <div>
              <input type="radio" name="basement" id="1" />
              <label htmlFor="radio1">Basement</label>
            </div>
            <div>
              <input type="radio" name="basement2" id="2" />
              <label htmlFor="radio1">Basement2</label>
            </div>
          </div>
          <div>
            <input type="radio" name="basement2" id="2" />
            <span style={{ fontSize: 20, marginRight: 10 }}>No. of Floors</span>
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
              width: 640,
              right: 40,
              position: "relative",
              backgroundColor: "#f4f4f4",
              display: "flex",
              //   justifyContent: "space-between",
              paddingLeft: 50,
              paddingRight: 50,
              fontSize: 22,
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <span style={{ marginRight: 90 }}>No. Floors</span>
            <span style={{ marginRight: 230 }}>Details</span>
            <span>Reference</span>
          </div>
          <div
            style={{
              fontSize: 20,
              marginBottom: 50,
            }}
          >
            <div style={{ display: "flex", marginBottom: 50 }}>
              <label style={{ marginRight: 70 }}>Ground Floor :</label>
              <input
                type="text"
                name=""
                id=""
                style={{ marginRight: 120, height: 80, borderRadius: 16 }}
              />
              <input
                type="button"
                name=""
                id=""
                value="Upload"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ff9f00, #f9eb00)",
                  borderRadius: 32,
                  padding: "15px 40px",
                  borderWidth: 0,
                  boxShadow: "rgb(255 159 0) 15px 10px 40px -17px",
                  height: 45,
                  alignSelf: "center",
                }}
              />
            </div>
            <div style={{ display: "flex", marginBottom: 50 }}>
              <label style={{ marginRight: 70 }}>Ground Floor :</label>
              <input
                type="text"
                name=""
                id=""
                style={{ marginRight: 120, height: 80, borderRadius: 16 }}
              />
              <input
                type="button"
                name=""
                id=""
                value="Upload"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ff9f00, #f9eb00)",
                  borderRadius: 32,
                  padding: "15px 40px",
                  borderWidth: 0,
                  boxShadow: "rgb(255 159 0) 15px 10px 40px -17px",
                  height: 45,
                  alignSelf: "center",
                }}
              />
            </div>
            <div style={{ display: "flex" }}>
              <label style={{ marginRight: 70 }}>Ground Floor :</label>
              <input
                type="text"
                name=""
                id=""
                style={{ marginRight: 120, height: 80, borderRadius: 16 }}
              />
              <input
                type="file"
                name="file"
                id="file"
                placeholder="Upload"
                style={
                  {
                    // backgroundImage:
                    //   "linear-gradient(to right, #ff9f00, #f9eb00)",
                    // borderRadius: 32,
                    // padding: "15px 40px",
                    // borderWidth: 0,
                    // boxShadow: "rgb(255 159 0) 15px 10px 40px -17px",
                    // height: 45,
                    // alignSelf: "center",
                  }
                }
              />
            </div>
          </div>
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

export default Two;
