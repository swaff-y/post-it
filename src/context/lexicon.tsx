import React from 'react';
import { LexiconAPI } from "@/api/LexiconAPI";

const LexiconContext = React.createContext(null as unknown as LexiconAPI);
const useLexicon = () => React.useContext(LexiconContext);

const LexiconProvider = ({ value, children } : {value: LexiconAPI; children: any} ) => {
  return (
    <LexiconContext.Provider value={value}>
      {children}
    </LexiconContext.Provider>
  );
};

export { LexiconProvider, useLexicon };