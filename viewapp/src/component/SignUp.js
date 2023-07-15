import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const naviaget = useNavigate();

useEffect (() => {
  const auth = localStorage.getItem('userformation')
  if(auth) {
    naviaget('/')
  }
})


  const collectData = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    alert("User Registered");
    localStorage.setItem('userformation', JSON.stringify(result));

    if(result){ naviaget('/')}
  };

  return (
    <div>
      <div className="inputbox">
        <h3> Ragister </h3>
        <div>
          <Input
            className="w-50 inputfield"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>
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
