
import {createContext, useContext, useState } from "react"


export const GlobalContext = createContext(null);

export const useStateContext = () => useContext(GlobalContext);

export const GlobalState = ({ children }) => {

  const [productSelect, setProductSelect] = useState([]);
  const [categorySelect, setCategorySelect] = useState([]);

  return (
    <GlobalContext.Provider value={{
      productSelect, 
      setProductSelect, 
      categorySelect, 
      setCategorySelect }} 
    children={children}/> )
};

export default GlobalState;