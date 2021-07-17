import react, { useState, useContext, createContext } from 'react'


export const SupplierContext = createContext();

export const SupplierContextProvider = (props) => {
    const [supplierDetail, setSupplierDetail] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        id: "",
        emailTitle: "",
        email_msg: ""
    })

    return (
        <SupplierContext.Provider value={[supplierDetail, setSupplierDetail]}>
            {props.children}
        </SupplierContext.Provider>
    )
}