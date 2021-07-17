import react, { useState, createContext } from 'react'

export const ProductContext = createContext();


export const ProductProvider = (props) => {
    const [products, setProducts] = useState({ "data": [] });

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    );
}

