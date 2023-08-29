import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext(null);

export function SearchProvider({ children }) {
    const [toys, setToys] = useState("");

const contextValue = {
    toys, setToys
};

return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
}

export function useMyContext() {
return useContext(MyContext);
};