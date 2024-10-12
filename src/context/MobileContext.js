import React, { useState, createContext, useContext } from "react";

export const linesObj = [{
    isEdit: false,
    name: '',
    phoneNumber: '',
    lineType: '',
    isBYOD: true,
    newDevice: '',
    newDeviceCost: 0,
    inFull: false,
    lineDiscount: 0,
    deviceDiscount: 0,
    note: ''
}]

const initialState = {
    lines: linesObj,
    setLines: ()=>{}
}

const MobileContext = createContext(initialState);

export const MobileProvider = ({ children }) => {
    const [lines, setLines] = useState(linesObj);
    return (
      <MobileContext.Provider value={{ lines, setLines }}>
        {children}
      </MobileContext.Provider>
    );
  };

  const useLines = () => {
    const context = useContext(MobileContext);
  
    if (context === undefined) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
  };
  
  export default useLines;