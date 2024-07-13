'use client'

import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import "./page.css";
import { NavTabs } from "@/components/NavTabs/NavTabs";
import { NAV_LINKS } from "@/components/HomeContainer/HomeContainer";
import { ListGroup, Spinner } from "react-bootstrap";
import { useLinks } from "@/hooks/useLinks";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const DeleteNote = () => {
  const { data, isSuccess, isError, isLoading } = useLinks();
  const links = data.getAll();

  const handleDelete = (id: string) => {
    console.log('delete', id);
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
      </div>
    </>
  );
};

export default DeleteNote;