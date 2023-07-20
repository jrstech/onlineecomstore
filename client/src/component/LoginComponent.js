import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const naviaget = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      naviaget("/");
    }
  }, []);

  const loginHandle = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      naviaget("/");
    } else {
      alert("Please Enter valid infromation");
    }
  };

  return (
    <div>
      <div className="inputbox">
        <h3 className="p-2"> Login </h3>
        <div>
          <Input
            className="w-50 inputfield"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div>
          <Input
            className="w-50 inputfield"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div>
          <Button
            color="primary"
            className="w-25 inputfield"
            type="button"
            onClick={loginHandle}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
