import {createContext, useContext, useState} from "react"
import {getToken} from "../services/isAutenticated";

export const GlobalContext = createContext(null);

export const useStateContext = () => useContext(GlobalContext);

export const GlobalState = ({children}) => {

    const [productSelect,
        setProductSelect] = useState([]);
    const [categorySelect,
        setCategorySelect] = useState([]);
    const [orderQuantity,
        setOrderQuantity] = useState();
    const [tokenLogin,
        setTokenLogin] = useState(getToken());
    const [userId,
        setUserId] = useState();

    return (<GlobalContext.Provider
        value={{
        productSelect,
        setProductSelect,
        categorySelect,
        setCategorySelect,
        orderQuantity,
        setOrderQuantity,
        tokenLogin,
        setTokenLogin,
        userId,
        setUserId
    }}
        children={children}/>)
};

export default GlobalState;