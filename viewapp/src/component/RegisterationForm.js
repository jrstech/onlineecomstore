import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  DropdownToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const RegisterationForm = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [fullname, setFullname] = useState("")
  const [fathername, setFathername] = useState("")
  const [mothername, setMothername] = useState("")
  const [mobilenumber, setMobilenumber] = useState("")
  // const [dob, setDob] = useState("")
  const [gender, setGender] = useState(true)
  const [state, setState] = useState("")
  const [district, setDistrict] = useState("")
  const [block, setBlock] = useState("")
  const [town, setTown] = useState("")
  const [pin, setPin] = useState("")
  // const [profilephoto, setProfilephoto] = useState()
  // const [highschoolmarksheet, setHighschoolmarksheet] = useState()
  // const [intermediatemarksheet, setIntermediatemarksheet] = useState()
  // const [check, setCheck] = useState(false)

  let navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const studentInformationStore = async () => {
    let result = await fetch("http://localhost:5000/studentregistration", {
      method: "post",
      body: JSON.stringify({fullname, fathername, mothername, mobilenumber, gender, state, district, block, town, pin }),
      headers: {
        "Content-Type": "application/json",
      },

    });
    result = await result.json();
    localStorage.setItem("student", JSON.stringify(result));
   if(result){
    navigate("/")
   }
  }

  return (
    <div className="m-5">
      <h2>Student Registration form</h2>
      <hr />
      <Form className="m-5">
        <div className="">
          <FormGroup>
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle className="mt-3" color="primary" caret>
                Select Title
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Mr</DropdownItem>
                <DropdownItem>Mrs</DropdownItem>
                <DropdownItem>Miss</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label for="firstname">Applicant’s Name</Label>
            <Input
              className="w-50"
              type="text"
              name="fullname"
              id="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Enter Full Name"
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup>
            <Label for="fathername">Father Name</Label>
            <Input
              className="w-50"
              type="text"
              name="fathername"
              id="fathername"
              value={fathername}
              onChange={(e) => setFathername(e.target.value)}
              placeholder="Enter Father Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="mothername">Mother Name</Label>
            <Input
              className="w-50"
              type="text"
              name="mothername"
              id="mothername"
              value={mothername}
              onChange={(e) => setMothername(e.target.value)}
              placeholder="Enter Mother Name"
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup>
            <Label for="mobilenumber">Mobile Number</Label>
            <Input
              className="w-50"
              type="number"
              name="mobilenumber"
              id="mobilenumber"
              value={mobilenumber}
              onChange={(e) => setMobilenumber(e.target.value)}
              placeholder="Enter Mobile Number"
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup>
            <Label for="dob">Date of Birth</Label>
            <Input className="w-50" type="date" name="dob" id="dob" />
          </FormGroup>
        </div>
        <div className="d-flex gap-5">
          <FormGroup check>
            <Label check>
              <Input type="radio" name="gender" 
               value={gender}
               onChange={(e) => setGender(e.target.value)}
              /> Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)} /> Female
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="gender" 
                value={gender}
                onChange={(e) => setGender(e.target.value)}/> Transgender
            </Label>
          </FormGroup>
        </div>
        <FormGroup>
          <Label for="state">Select State</Label>
          <Input className="w-50" type="text" name="state" id="state" 
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            {/* <option>Uttar Pradesh</option>
            <option>Madhya Pradesh</option>
            <option>Maharastra</option>
            <option>Uttarakhand</option>
            <option>Bihar</option> */}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="district">Select District</Label>
          <Input className="w-50" type="text" name="district" id="district"
           value={district}
           onChange={(e) => setDistrict(e.target.value)}>
            {/* <option>Raebareli</option>
            <option>Kanpur</option>
            <option>Lucknow</option>
            <option>Lakhimpur Khiri</option>
            <option>Basti</option> */}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="block">Sub-District/Block</Label>
          <Input
            className="w-50"
            type="text"
            name="block"
            id="block"
            value={block}
            onChange={(e) => setBlock(e.target.value)}
            placeholder="Enter Sub-district or block"
          />
        </FormGroup>
        <FormGroup>
          <Label for="town">Town/Village</Label>
          <Input
            className="w-50"
            type="text"
            name="town"
            id="town"
            value={town}
            onChange={(e) => setTown(e.target.value)}
            placeholder="Enter town or village"
          />
        </FormGroup>
        <FormGroup>
          <Label for="pin">Pin Code</Label>
          <Input
            className="w-50"
            type="number"
            name="pin"
            id="pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Enter Pin Code"
          />
        </FormGroup>
        <FormGroup>
          <Label for="profilephoto">Profile Picture</Label>
          <Input
            className="w-50"
            type="file"
            name="profilephoto"
            id="profilephoto"
          />
          <FormText color="muted">
            png/ jpeg formate only be uploaded Max size 80kb.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="highschoolmarksheet">High School</Label>
          <Input
            className="w-50"
            type="file"
            name="highschoolmarksheet"
            id="highschoolmarksheet"
          />
          <FormText color="muted">
            PDF formate only be uploaded Max size 1MB.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="intermediatemarksheet">Intermediate Marksheet</Label>
          <Input
            className="w-50"
            type="file"
            name="intermediatemarksheet"
            id="intermediatemarksheet"
          />
          <FormText color="muted">
            PDF formate only be uploaded Max size 1MB.
          </FormText>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" name="check" /> Agree
          </Label>
        </FormGroup>
        <Button onClick={studentInformationStore} type="button" color="primary mt-4 w-25">Submit</Button>
      </Form>
    </div>
  );
};

export default RegisterationForm;
