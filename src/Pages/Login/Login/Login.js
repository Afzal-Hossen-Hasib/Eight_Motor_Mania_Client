import React from "react";
import { Button, Form } from "react-bootstrap";
import login from "../../../Images/icon/01.png";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <h4 className="text-center fitness-title mb-4">
        Please Login
        <hr />
      </h4>
      <div className="my-card">
        <div className="row">
          <div className="col-md-6">
            <div className="left-cont">
              <img src={login} alt="" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="right-cont">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
