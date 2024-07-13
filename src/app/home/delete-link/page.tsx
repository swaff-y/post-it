'use client'

import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import "./page.css";
import { NavTabs } from "@/components/NavTabs/NavTabs";
import { NAV_LINKS } from "@/components/HomeContainer/HomeContainer";

const DeleteNote = () => {
  return (
    <>
      <NavTabs links={NAV_LINKS}/>
      <div
        className="home-container"
        >
        <SectionContainer>
          <span>Delete Note</span>
        </SectionContainer>
      </div>
    </>
  );
};

export default DeleteNote;