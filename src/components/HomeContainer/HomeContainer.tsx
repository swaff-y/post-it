'use client'

import "./home-container.css";
import { FC } from "react";
import { useLinks } from "@/hooks/useLinks";
import { NavTabs } from "../NavTabs/NavTabs";
import { HomeFilter } from "./HomeFilter/HomeFilter";
import { HomeFilterResults } from "./HomeFilterResults/HomeFilterResults";
import { HomeFilterResultsLoader } from "./HomeFilterResultsLoader/HomeFilterResultsLoader";
import { HomeFilterError } from "./HomeFilterError/HomeFilterError";

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

  return (
    <>
      <NavTabs links={NAV_LINKS}/>
      <div className="home-container">
        <HomeFilter/>
        <HomeFilterError/>
        <HomeFilterResultsLoader/>
        <HomeFilterResults/>
      </div>
    </>
  );
};

export default Home;