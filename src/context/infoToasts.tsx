import React from 'react';

const infoToastsContext = React.createContext(null);
const useInfoToasts = () => React.useContext(infoToastsContext);

const InfoToastsProvider = ({ value, children } : {value: any; children: any} ) => {
  return (
    <infoToastsContext.Provider value={value}>
      {children}
    </infoToastsContext.Provider>
  );
};

export { InfoToastsProvider, useInfoToasts };