import React from "react";
import { Button, Navbar, Form, FormControl, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Nav = () => {
  return (
    <div>
      <Navbar className="bg-light justify-content-between">
        <h3>API</h3>
        <Form inline>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form>
      </Navbar>
    </div>
  );
};

export default Nav;
