'use client'
import { NAV_LINKS } from "@/components/HomeContainer/HomeContainer";
import "./page.css";
import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import { NavTabs } from "@/components/NavTabs/NavTabs";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

const CreateNote = () => {
  const [urlValue, setUrlValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [keywordsValue, setKeywordsValue] = useState("");

  const [urlIsValid, setUrlIsValid] = useState(false);
  const [descriptionIsValid, setDescriptionIsValid] = useState(false);
  const [keywordsIsValid, setKeywordsIsValid] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Submitted", event.target.ControlInput1.value, event.target.ControlInput2.value, event.target.ControlInput3.value);
  };

  useEffect(() => {
    setUrlIsValid(urlValue.length >= 1);
  }, [urlValue]);

  useEffect(() => {
    setDescriptionIsValid(descriptionValue.length >= 1);
  }, [descriptionValue]);

  useEffect(() => {
    setKeywordsIsValid(keywordsValue.length >= 1);
  }, [keywordsValue]);


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
              <Form.Control 
                type="text" 
                placeholder="https://fake.com"
                value={urlValue}
                onChange={(e) => setUrlValue(e.target.value)}
                isValid={urlIsValid}
                isInvalid={!urlIsValid}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Invalid
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput2">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="A description of the link"
                value={descriptionValue}
                onChange={(e) => setDescriptionValue(e.target.value)}
                isValid={descriptionIsValid}
                isInvalid={!descriptionIsValid}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput3">
              <Form.Label>Keywords</Form.Label>
              <Form.Control 
                type="text"
                placeholder="react, js, library"
                value={keywordsValue}
                onChange={(e) => setKeywordsValue(e.target.value)}
                isValid={keywordsIsValid}
                isInvalid={!keywordsIsValid}
              />
            </Form.Group>
            <div className="form-button-container">
              <Button 
                variant="outline-light"
                type="submit"
                disabled={!urlIsValid || !descriptionIsValid || !keywordsIsValid}
              >
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