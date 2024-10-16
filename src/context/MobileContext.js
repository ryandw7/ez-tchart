import React, { useState, createContext, useContext } from "react";

export const linesObj = {
  isEdit: false,
  name: '',
  phoneNumber: '',
  lineType: '',
  isBYOD: true,
  newDevice: '',
  newDeviceCost: 0,
  inFull: false,
  lineDiscount: 0,
  lineDiscountDuration: 0,
  deviceDiscount: 0,
  note: ''
}
export const linesArr = [
  linesObj
]
const initialState = {
  lines: linesArr,
  setLines: () => { }
}

const MobileContext = createContext(initialState);

export const MobileProvider = ({ children }) => {
  const [lines, setLines] = useState(linesArr);
 
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