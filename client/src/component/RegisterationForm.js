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
import { Country, State, City } from "country-state-city";

const RegisterationForm = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [fullname, setFullname] = useState("");
  const [fathername, setFathername] = useState("");
  const [mothername, setMothername] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  // const [dob, setDob] = useState("")
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [block, setBlock] = useState("");
  const [town, setTown] = useState("");
  const [pin, setPin] = useState("");
  // const [profilephoto, setProfilephoto] = useState()
  // const [highschoolmarksheet, setHighschoolmarksheet] = useState()
  // const [intermediatemarksheet, setIntermediatemarksheet] = useState()
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(false);

  let navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const studentInformationStore = async () => {
    if (
      !fullname ||
      !fathername ||
      !mothername ||
      !mobilenumber ||
      !state ||
      !district ||
      !block ||
      !town
      
    ) {
      setError(true);
      return false;
    }
    let result = await fetch("http://localhost:5000/studentregistration", {
      method: "post",
      body: JSON.stringify({
        fullname,
        fathername,
        mothername,
        mobilenumber,
        gender,
        state,
        district,
        block,
        town,
        pin,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("student", JSON.stringify(result));
    if (result) {
      navigate("/");
    }
  };

  // reset filed =============================================
  const resetForm = () => {
    setDropdownOpen(false);
    setFullname("");
    setFathername("");
    setMothername("");
    setMobilenumber("");
    // setDob(""); // this if you want to reset the Date of Birth field
    setGender(true);
    setState("");
    setDistrict("");
    setBlock("");
    setTown("");
    setPin("");
    setCheck(false);
    setError(false);
  };

  return (
    <div className="m-5">
      <h2>Student Registration form</h2>
      <hr />
      <Form className="student-form-style">
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
              className="w-100"
              type="text"
              name="fullname"
              id="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Enter Full Name"
            />
            {error && !fullname && (
              <p className="waringmessage m-2">Monetary field</p>
            )}
          </FormGroup>
        </div>
        <div>
          <FormGroup>
            <Label for="fathername">Father Name</Label>
            <Input
              className="w-100"
              type="text"
              name="fathername"
              id="fathername"
              value={fathername}
              onChange={(e) => setFathername(e.target.value)}
              placeholder="Enter Father Name"
            />
            {error && !fathername && (
              <p className="waringmessage m-2">Monetary field</p>
            )}
          </FormGroup>
          <FormGroup>
            <Label for="mothername">Mother Name</Label>
            <Input
              className="w-100"
              type="text"
              name="mothername"
              id="mothername"
              value={mothername}
              onChange={(e) => setMothername(e.target.value)}
              placeholder="Enter Mother Name"
            />
            {error && !mothername && (
              <p className="waringmessage m-2">Monetary field</p>
            )}
          </FormGroup>
        </div>
        <div>
          <FormGroup>
            <Label for="mobilenumber">Mobile Number</Label>
            <Input
              className="w-100"
              type="number"
              name="mobilenumber"
              id="mobilenumber"
              value={mobilenumber}
              onChange={(e) => setMobilenumber(e.target.value)}
              placeholder="Enter Mobile Number"
            />
            {error && !mobilenumber && (
              <p className="waringmessage m-2">Monetary field</p>
            )}
          </FormGroup>
        </div>
        <div>
          <FormGroup>
            <Label for="dob">Date of Birth</Label>
            <Input className="w-100" type="date" name="dob" id="dob" />
          </FormGroup>
        </div>
        <div className="d-flex gap-5">
         
          <FormGroup>
          <Label htmlFor="gender">Select Gender</Label>
          <Input
            className="w-100"
            type="select"
            name="gender"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option>-Select Gender-</option>
            <option>Male</option>
            <option>Female</option>
            <option>Transgender</option>
            </Input>
          </FormGroup>
        </div>
        <FormGroup>
          <Label htmlFor="state">Select State</Label>
          <Input
            className="w-100"
            type="select"
            name="state"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option>-Select State-</option>
            <option>Uttar Pradesh</option>
            <option>Madhya Pradesh</option>
            <option>Maharastra</option>
            <option>Uttarakhand</option>
            <option>Bihar</option>
          </Input>
          {error && !state && (
            <p className="waringmessage m-2">Monetary field</p>
          )}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="district">Select District</Label>
          <Input
            className="w-100"
            type="select"
            name="district"
            id="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          >
            <option>-Select District-</option>
            <option>Raebareli</option>
            <option>Kanpur</option>
            <option>Lucknow</option>
            <option>Lakhimpur Khiri</option>
            <option>Basti</option>
          </Input>
          {error && !district && (
            <p className="waringmessage m-2">Monetary field</p>
          )}
        </FormGroup>
        {console.log(typeof district)}
        <FormGroup>
          <Label htmlFor="block">Sub-District/Block</Label>
          <Input
            className="w-100"
            type="text"
            name="block"
            id="block"
            value={block}
            onChange={(e) => setBlock(e.target.value)}
            placeholder="Enter Sub-district or block"
          />
          {error && !block && (
            <p className="waringmessage m-2">Monetary field</p>
          )}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="town">Town/Village</Label>
          <Input
            className="w-100"
            type="text"
            name="town"
            id="town"
            value={town}
            onChange={(e) => setTown(e.target.value)}
            placeholder="Enter town or village"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="pin">Pin Code</Label>
          <Input
            className="w-100"
            type="number"
            name="pin"
            id="pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Enter Pin Code"
          />
        </FormGroup>
        <FormGroup>
          <Label className="mt-2" for="profilephoto">
            Select Course
          </Label>
        </FormGroup>
        <FormGroup className="d-flex justify-content-between w-100 gap-5">
          <Label className="mt-2" htmlFor="profilephoto">
            Profile Picture
          </Label>
          <div>
            <Input
              className="w-100"
              type="file"
              name="profilephoto"
              id="profilephoto"
            />
          </div>
          <div>
            <Button className="">Upload</Button>
          </div>
        </FormGroup>{" "}
        <FormText color="muted">
          Profile picture upload only png/jpeg format (Min size 15kb), (Max size
          50kb).
        </FormText>
        <FormGroup className="d-flex gap-5 justify-content-between w-100 align-items-center">
          <Label className="mt-2 " htmlFor="highschoolmarksheet">
            10<sup>th</sup> Marksheet
          </Label>
          <div>
            <Input
              className="w-100 "
              type="file"
              name="highschoolmarksheet"
              id="highschoolmarksheet"
            />
          </div>
          <div>
            <Button>Upload</Button>
          </div>
        </FormGroup>
        <FormText color="muted">
          Marksheet upload only PDF format (Min size 200kb), (Max size 1MB).
        </FormText>
        <FormGroup className="d-flex justify-content-between w-100 align-items-center gap-5">
          <Label className="mt-2 " htmlFor="intermediatemarksheet">
            12<sup>th</sup> Marksheet
          </Label>
          <div>
            <Input
              className="w-100"
              type="file"
              name="intermediatemarksheet"
              id="intermediatemarksheet"
            />
          </div>
          <div>
            <Button>Upload</Button>
          </div>
        </FormGroup>
        <FormText color="muted">
          Marksheet upload only PDF format (Min size 200kb),(Max size 1MB).
        </FormText>
        <FormGroup check>
          <Label htmlFor="check" check>
            {" "}
            Agree{" "}
          </Label>
          <Input type="checkbox" name="check" />
        </FormGroup>
        <FormGroup>
          <Button
            onClick={studentInformationStore}
            type="button"
            color="primary m-2 w-25"
          >
            Submit
          </Button>
          <Button type="reset" color="primary m-2 w-25" onClick={resetForm}>
            Reset
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default RegisterationForm;
