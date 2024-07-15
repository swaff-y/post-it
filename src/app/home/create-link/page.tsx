'use client'
import { NAV_LINKS } from "@/components/HomeContainer/HomeContainer";
import "./page.css";
import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import { NavTabs } from "@/components/NavTabs/NavTabs";
import { Button, Form, InputGroup, Spinner } from "react-bootstrap";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useNewLink } from "@/hooks/useNewLink";

const CreateNote = () => {
  let router = useRouter();
  const newLink = useNewLink();

  const [urlValue, setUrlValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [keywordsValue, setKeywordsValue] = useState("");

  const [urlIsValid, setUrlIsValid] = useState(true);
  const [showUrlTooltip, setShowUrlTooltip] = useState(false);
  const [descriptionIsValid, setDescriptionIsValid] = useState(false);
  const [keywordsIsValid, setKeywordsIsValid] = useState(false);

  const [isError, setIsError] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const params = {
      url: event.target.ControlInput1.value,
      description: event.target.ControlInput2.value,
      keywords: event.target.ControlInput3.value
    };

    if (urlIsValid && descriptionIsValid && keywordsIsValid) {
      const link = newLink(params);
      setIsPending(true);
      link.save({
        onSuccess: () => {
          setIsPending(false)
          router.push('/home')
        },
        onError: (_error) => {
          setIsError(true);
        },
        onSettled: () => {
          setIsPending(false);
          setUrlValue("");
          setShowUrlTooltip(false);
          setDescriptionValue("");
          setKeywordsValue("");
        }
      });
    }
  };

  const handleUrlChange = (event: ChangeEvent<any>) => {
    setUrlValue(event.target.value);

    if (urlIsValid === false && event.target.value.length >= 1) {
      setShowUrlTooltip(true);
    } else {
      setShowUrlTooltip(false);
    }
  };

  useEffect(() => {
    // Regex pattern for URL validation
    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name and extension
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

    const isValid = urlValue.length >= 1 && urlPattern.test(urlValue)
    setUrlIsValid(isValid);
  }, [urlValue]);

  useEffect(() => {
    setDescriptionIsValid(descriptionValue.length >= 1);
  }, [descriptionValue]);

  useEffect(() => {
    const listPattern = /^(\s*\w+\s*)(,\s*\w+\s*)*$/;

    const isValid = keywordsValue.length >= 1 && listPattern.test(keywordsValue);
    setKeywordsIsValid(isValid);
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
              <InputGroup hasValidation>
                <Form.Control 
                  type="text" 
                  placeholder="https://fake.com"
                  value={urlValue}
                  onChange={handleUrlChange}
                  isValid={urlIsValid}
                  isInvalid={!urlIsValid}
                  />
                { showUrlTooltip &&
                  <Form.Control.Feedback type="invalid" tooltip>
                        Please enter a valid URL
                  </Form.Control.Feedback>
                }
              </InputGroup>
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
              { !isPending &&
                <Button 
                  variant="outline-light"
                  type="submit"
                  disabled={!urlIsValid || !descriptionIsValid || !keywordsIsValid}
                >
                  Submit
                </Button>
              }
              { isPending &&
                <Button variant="outline-light" disabled>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Submitting...
                </Button>              
              }
            </div>
            { isError && <p className="error-message">An error occurred. Please try again.</p> }
          </Form>
        </SectionContainer>
      </div>
    </>
  );
};

export default CreateNote;