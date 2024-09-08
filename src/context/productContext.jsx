import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/reducer";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";


const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {}
};


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const getProduct = async (url) => {
        dispatch({ type: 'SET_LOADING' })
        try {
            const res = await axios(url);
            const products = await res.data;
            dispatch({ type: 'SET_API_DATA', payload: products })
        } catch (error) {
            dispatch({ type: 'API_ERROR' })
        }
    };

    // 2nd api call for singleProduct 
    const getSingleProduct = async (url) => {
        dispatch({ type: 'SET_SINLE_LOADING' })
        try {
            const res = await axios(url);
            const singleProduct = await res.data;
            dispatch({ type: 'SET_SINGLE_PRODUCT', payload: singleProduct })
        } catch (error) {
            dispatch({ type: 'SET_SINGLE_ERROR' })
        }
    };


    useEffect(() => {
        getProduct(API);
    }, [])

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
    )
};



// custom global hook 
const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };

