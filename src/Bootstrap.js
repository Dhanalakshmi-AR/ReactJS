import React from "react";
import './Bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





function Bootstrap() {


  return (
    <div className="container">



      <div>
        <h1>Hello, React with Bootstrap!</h1>
        <Button variant="primary">Bootstrap Button</Button>
      </div>
      <br /><hr /><br />





      <div>
        <Form.Control size="lg" type="text" placeholder="Large text" />
        <br />
        <Form.Control type="text" placeholder="Normal text" />
        <br />
        <Form.Control size="sm" type="text" placeholder="Small text" />
      </div>
      <br /><hr /><br />





      <div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
        </Form>
      </div>
      <br /><hr /><br />





      <div>
        <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
        <Form.Control
          type="color"
          id="exampleColorInput"
          defaultValue="#563d7c"
          title="Choose your color"
        />
      </div>
      <br /><hr /><br />







      <div>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control plaintext readOnly defaultValue="email@example.com" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
        </Form>
      </div>
      <br /><hr /><br />






      <div>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Multiple files input example</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>
        <Form.Group controlId="formFileDisabled" className="mb-3">
          <Form.Label>Disabled file input example</Form.Label>
          <Form.Control type="file" disabled />
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Small file input example</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>
        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label>Large file input example</Form.Label>
          <Form.Control type="file" size="lg" />
        </Form.Group>
      </div>
      <br /><hr /><br />







      <div>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and numbers,
          and must not contain spaces, special characters, or emoji.
        </Form.Text>
      </div>
      <br /><hr /><br />








      <div>
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <br />
        <Form.Select>
          <option>Default select</option>
        </Form.Select>
        <br />
      </div>
      <br /><hr /><br />









      <div>
        <Form>
          {['checkbox', 'radio'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check // prettier-ignore
                type={type}
                id={`default-${type}`}
                label={`default ${type}`}
              />

              <Form.Check
                disabled
                type={type}
                label={`disabled ${type}`}
                id={`disabled-default-${type}`}
              />
            </div>
          ))}
        </Form>
      </div>
      <br /><hr /><br />











      <div>
        <Form>
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            label="Check this switch"
          />
          <Form.Check // prettier-ignore
            disabled
            type="switch"
            label="disabled switch"
            id="disabled-custom-switch"
          />
        </Form>
      </div>
      <br /><hr /><br />








      











    </div>
  );
}

export default Bootstrap;