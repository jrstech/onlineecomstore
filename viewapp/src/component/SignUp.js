import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const naviaget = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      naviaget("/");
    }
  }, []);

  const collectData = async () => {
    console.log(name, email, password);
    if(!name || !email || !password){
      setError(true);
      return false;
    }
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    alert("User Registered");
    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      naviaget("/");
    }
  };

  return (
    <div>
      <div className="inputbox">
        <h3 className="p-2"> Ragister </h3>
        <div>
          <Input
            className="w-50 inputfield"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
          { error && !name && <p className="waringmessage">Please enter name</p>}
        </div>
        <div>
          <Input
            className="w-50 inputfield"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          { error && !email && <p className="waringmessage">Please Enter email id</p>}
        </div>
        <div>
          <Input
            className="w-50 inputfield"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
           { error && !password && <p className="waringmessage">please enter password</p>}
        </div>
        <div>
          <Button
            color="primary"
            className="w-25 inputfield"
            type="button"
            onClick={collectData}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
