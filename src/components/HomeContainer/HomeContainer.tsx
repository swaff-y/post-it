'use client'

import "./home-container.css";
import { FC, use, useEffect } from "react";
import { useLinks } from "@/hooks/useLinks";
import { NavTabs } from "../NavTabs/NavTabs";
import { HomeFilter } from "./HomeFilter/HomeFilter";
import { HomeFilterResults } from "./HomeFilterResults/HomeFilterResults";
import { HomeFilterResultsLoader } from "./HomeFilterResultsLoader/HomeFilterResultsLoader";
import { HomeFilterError } from "./HomeFilterError/HomeFilterError";
import { Toast, ToastContainer } from "react-bootstrap";
import { useInfoToasts } from "@/context/infoToasts";

export const NAV_LINKS = [
  { 
    label: 'Links',
    href: '/home'
  },
  { 
    label: 'Create Link',
    href: '/home/create-link'
  },
  { 
    label: 'Delete Link',
    href: '/home/delete-link'
  }
];

const Home: FC = () => {
  const { data } = useLinks();
  const links = data.getAll();
  const toastInfo = useInfoToasts() as any;

  const [infoToast, setInfoToast] = toastInfo

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
      <div className="home-container">
        <HomeFilter/>
        <HomeFilterError/>
        <HomeFilterResultsLoader/>
        <HomeFilterResults/>
      </div>
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
    </>
  );
};

export default Home;