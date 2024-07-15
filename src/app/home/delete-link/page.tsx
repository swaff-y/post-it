'use client'

import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import "./page.css";
import { NavTabs } from "@/components/NavTabs/NavTabs";
import { NAV_LINKS } from "@/components/HomeContainer/HomeContainer";
import { ListGroup, Spinner, Toast, ToastContainer } from "react-bootstrap";
import { useLinks } from "@/hooks/useLinks";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useEffect, useState } from "react";
import { DeleteConfirmation } from "./DeleteConfirmation";
import { useInfoToasts } from "@/context/infoToasts";

const DeleteNote = () => {
  const { data, isSuccess, isError, isLoading } = useLinks();
  const [show, setShow] = useState(false);
  const [link, setLink] = useState({} as any);
  const links = data.getAll();
  const toastInfo = useInfoToasts() as any;
  const [infoToast, setInfoToast] = toastInfo

  const handleDelete = (id: string) => {
    setShow(true);
    setLink(links.find((link: any) => link.id === id));
    console.log('delete', id);
  };

  const unSetLink = () => {
    setLink({});
  };

  useEffect(() => {
    if (infoToast.message) {
      const timer = setTimeout(() => {
        setInfoToast({ message: '', type: '' })
      }, 5000)

      return () => clearTimeout(timer);
    }
  }, [infoToast])

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
        <ToastContainer
          className="toast-container"
        >
            <Toast 
              bg={infoToast.type}
              show={!!infoToast.message}
            >
              <Toast.Header 
                closeVariant='white'
                closeButton={false}
              >
                <strong className="me-auto">{infoToast.type}</strong>
              </Toast.Header>
              <Toast.Body>{infoToast.message}</Toast.Body>
            </Toast>
        </ToastContainer>
      </div>
    </>
  );
};

export default DeleteNote;