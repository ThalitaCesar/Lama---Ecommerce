
import {createContext, useContext, useState } from "react"


export const GlobalContext = createContext(null);

export const useStateContext = () => useContext(GlobalContext);

export const GlobalState = ({ children }) => {

  const [productSelect, setProductSelect] = useState([]);
  const [categorySelect, setCategorySelect] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <GlobalContext.Provider value={{
      productSelect, 
      setProductSelect, 
      categorySelect, 
      setCategorySelect,
      token,
      setToken }} 
    children={children}/> )
};

export default GlobalState;