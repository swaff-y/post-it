'use client'
import { NAV_LINKS } from "@/components/HomeContainer/HomeContainer";
import "./page.css";
import { SectionContainer } from "@/components/SectionContainer/SectionContainer";
import { NavTabs } from "@/components/NavTabs/NavTabs";

const CreateNote = () => {
  return (
    <>
      <NavTabs links={NAV_LINKS}/>
      <div
        className="home-container"
        >
        <SectionContainer>
          <span>Create Note</span>
        </SectionContainer>
      </div>
    </>
  );
};

export default CreateNote;