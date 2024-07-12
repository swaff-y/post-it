import "./sectionContainer.css";
import { FC } from "react";

interface SectionContainerProps {
  children: React.ReactNode;
}

export const SectionContainer: FC<SectionContainerProps> = ({ children }) => {
  return (
    <div className="section-container">
      {children}
    </div>
  );
}; 