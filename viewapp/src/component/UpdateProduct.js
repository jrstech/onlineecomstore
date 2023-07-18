import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Input, Row } from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const naviaget = useNavigate();
  const params = useParams();

  const getProductInfo = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  useEffect(() => {
    getProductInfo();
  }, []);

  const updateProduct = async () => {
    // console.log(name, price, category, company)
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    naviaget("/productlist");
  };

  return (
    <Fragment>
      <div className="inputbox">
        <h5 className="p-2">Update Product Listing</h5>
        <Row className="justify-content-center" lg={1}>
          <Col>
            <Input
              className="w-50 inputfield"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Product Name"
            />
          </Col>
          <Col>
            <Input
              className="w-50 inputfield"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter Product Price"
            />
          </Col>
          <Col>
            <Input
              className="w-50 inputfield"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter Product Category"
            />
          </Col>
          <Col>
            <Input
              className="w-50 inputfield"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter Product Company"
            />
          </Col>
          <Col>
            <Button className="w-25" color="primary" onClick={updateProduct}>
              Update Product
            </Button>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};
export default UpdateProduct;
