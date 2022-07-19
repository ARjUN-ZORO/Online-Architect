import React, { useState } from "react";
import BG from "./Assets/img/bg.png";
import API from "./api";
function Four() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [rPwd, setRPwd] = useState("");
  const onsubmit = (e) => {
    e.preventDefault();
    if (fName && lName && mobile && email && pwd && pwd === rPwd) {
      console.log(fName, lName, mobile, email, pwd);
      API.post("auth/register", {
        firstName: fName,
        lastName: lName,
        mobile,
        email,
        password: pwd,
      })
        .then(({ data }) => {
          //   this.setState({ error: null });
          // store.set('user', data.user);
          localStorage.setItem("token", data.token);
          // history.push('/');
        })
        .catch((error) => {
          this.setState({ error });
        });
    }
  };
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
            value="4"
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              // justifyContent: "space-evenly",
            }}
          >
            <div style={{ width: "50%" }}></div>
            <div style={{ width: "50%" }}>
              <form onSubmit={onsubmit}>
                <div>Create Account</div>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "50%",
                    }}
                  >
                    {/* <label
                      // className="Lable-For-Input_feild"
                      for="FirstName"
                    >
                      First name:
                    </label> */}
                    <input
                      type="text"
                      name="first name"
                      id="FirstName"
                      className="input-form"
                      placeholder="First Name"
                      value={fName}
                      onChange={(txt) => setFName(txt.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "50%",
                    }}
                  >
                    {/* <label
                      // className="Lable-For-Input_feild"
                      for="Lastname"
                    >
                      Last name:
                    </label> */}
                    <input
                      type="text"
                      name="last name"
                      id="Lastname"
                      className="input-form"
                      placeholder="Last Name"
                      value={lName}
                      onChange={(txt) => setLName(txt.target.value)}
                    />
                  </div>
                </div>
                <input
                  type="text"
                  name="mobile"
                  id=""
                  placeholder="mobile"
                  className="input-form"
                  style={{ width: "100%" }}
                  value={mobile}
                  onChange={(txt) => setMobile(txt.target.value)}
                />
                <input
                  type="text"
                  name="email"
                  id=""
                  placeholder="email"
                  className="input-form"
                  style={{ width: "100%" }}
                  value={email}
                  onChange={(txt) => setEmail(txt.target.value)}
                />
                <input
                  type="password"
                  name="password"
                  id=""
                  placeholder="password"
                  className="input-form"
                  style={{ width: "100%" }}
                  value={pwd}
                  onChange={(txt) => setPwd(txt.target.value)}
                />
                <input
                  type="password"
                  name="rpassword"
                  id=""
                  placeholder="rpassword"
                  className="input-form"
                  style={{ width: "100%" }}
                  value={rPwd}
                  onChange={(txt) => setRPwd(txt.target.value)}
                />
                <div>
                  <input type="submit" value="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Four;
