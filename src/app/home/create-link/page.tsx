'use client'
import { NAV_LINKS } from "@/components/HomeContainer/HomeContainer";
import "./page.css";
import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import { NavTabs } from "@/components/NavTabs/NavTabs";
import { Button, Form } from "react-bootstrap";

const CreateNote = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Submitted", event.target.ControlInput1.value, event.target.ControlInput2.value, event.target.ControlInput3.value);
  };

  return (
    <>
      <NavTabs links={NAV_LINKS}/>
      <div
        className="home-container"
        >
        <SectionContainer>
          <Form 
            className="create-form"
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="ControlInput1">
              <Form.Label>URL</Form.Label>
              <Form.Control type="text" placeholder="https://fake.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput2">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="A description of the link" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput3">
              <Form.Label>Keywords</Form.Label>
              <Form.Control type="text" placeholder="react, js, library" />
            </Form.Group>
            <div className="form-button-container">
              <Button variant="outline-light" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </SectionContainer>
      </div>
    </>
  );
};

export default CreateNote;