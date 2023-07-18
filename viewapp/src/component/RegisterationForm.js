import React, { useState } from "react";
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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
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
              name="email"
              id="firstname"
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
              placeholder="Enter Father Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="mothername">Mather Name</Label>
            <Input
              className="w-50"
              type="text"
              name="mothername"
              id="mothername"
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
              <Input type="radio" name="gender" /> Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="gender" /> Female
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="gender" /> Transgender
            </Label>
          </FormGroup>
        </div>
        <FormGroup>
          <Label for="state">Select State</Label>
          <Input className="w-50" type="select" name="state" id="state">
            <option>Uttar Pradesh</option>
            <option>Madhya Pradesh</option>
            <option>Maharastra</option>
            <option>Uttarakhand</option>
            <option>Bihar</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="district">Select District</Label>
          <Input className="w-50" type="select" name="district" id="district">
            <option>Raebareli</option>
            <option>Kanpur</option>
            <option>Lucknow</option>
            <option>Lakhimpur Khiri</option>
            <option>Basti</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="block">Sub-District/Block</Label>
          <Input
            className="w-50"
            type="text"
            name="block"
            id="block"
            placeholder="Enter Sub-district or block"
          />
        </FormGroup>
        <FormGroup>
          <Label for="town">Town/Village</Label>
          <Input
            className="w-50"
            type="text"
            name="town"
            id="mobilenumber"
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
            <Input type="checkbox" /> Agree
          </Label>
        </FormGroup>
        <Button color="primary mt-4 w-25">Submit</Button>
      </Form>
    </div>
  );
};

export default RegisterationForm;
