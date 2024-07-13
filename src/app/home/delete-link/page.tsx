'use client'

import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import "./page.css";
import { NavTabs } from "@/components/NavTabs/NavTabs";
import { NAV_LINKS } from "@/components/HomeContainer/HomeContainer";
import { ListGroup, Spinner } from "react-bootstrap";
import { useLinks } from "@/hooks/useLinks";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from "react";
import { DeleteConfirmation } from "./DeleteConfirmation";

const DeleteNote = () => {
  const { data, isSuccess, isError, isLoading } = useLinks();
  const [show, setShow] = useState(false);
  const [link, setLink] = useState({} as any);
  const links = data.getAll();

  const handleDelete = (id: string) => {
    setShow(true);
    setLink(links.find((link: any) => link.id === id));
    console.log('delete', id);
  };

  const unSetLink = () => {
    setLink({});
  };

  return (
    <>
      <NavTabs links={NAV_LINKS}/>
      <div
        className="home-container"
        >
        <SectionContainer>
          {isError && (
            <div>
              <h1>Error Loading API</h1>
            </div>
          )}
          {isLoading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {isSuccess && (
            <ListGroup 
              as="ol"
              className="list-group"
              >
              {links.map((link: any, index: number) => (
                <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start list-item"
                key={index}
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{link.description}</div>
                    {link.url}
                  </div>
                  <div className="trash-icon">
                    <DeleteForeverIcon 
                      fontSize="large"
                      onClick={() => handleDelete(link.id)}
                      />
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </SectionContainer>
        <DeleteConfirmation show={show} setShow={setShow} link={link} unSetLink={unSetLink}/>
      </div>
    </>
  );
};

export default DeleteNote;