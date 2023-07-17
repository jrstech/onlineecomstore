import React, { Fragment, useState } from "react";
import { Button, Col, Input, Row } from "reactstrap";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
 const addProduct = async () => {
if(!name || !price || !category || !company)
{
    setError(true);
    return false;
}
console.log(name,price, category, company )
let userId = JSON.parse(localStorage.getItem("user"))._id;
console.log(userId);
let result = await fetch("http://localhost:5000/addproductlisting",{
    method: "post",
    body: JSON.stringify({name, price, category, company, userId}),
    headers: {
        'Content-Type': 'application/json'
    }
});
result = await result.json();
console.log(result);
 }

  return (
    <Fragment>
      <div className="inputbox">
        <h1 className="p-2">Product Listing</h1>
        <Row className="justify-content-center" lg={1}>
          <Col>
            <Input
              className="w-50 inputfield"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Product Name"
            />
           { error && !name && <p className="waringmessage">Enter valid name</p>}
          </Col>
          <Col>
            <Input
              className="w-50 inputfield"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter Product Price"
            />
            { error && !price && <p className="waringmessage">Enter valid name</p>}
          </Col>
          <Col>
            <Input
              className="w-50 inputfield"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter Product Category"
            />
            { error && !category &&   <p className="waringmessage">Enter valid category</p> }
          </Col>
          <Col>
            <Input
              className="w-50 inputfield"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter Product Company"
            />
            {error && !company &&   <p className="waringmessage">Enter valid company</p>}
          </Col>
          <Col>
            <Button className="w-25" onClick={addProduct}>
              Add Product
            </Button>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};
export default AddProduct;
