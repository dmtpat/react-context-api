// creazione del Context per i dati e la chiamata axios
import axios from 'axios'
import { createContext, useContext, useState } from "react";

const DataContext = createContext(null);

function DataProvider({ children }) {
    const defaultData = [];
    const [prodotti, setProdotti] = useState(defaultData);
    const [showedProducts, setShowedProducts] = useState(defaultData);
    const apiUrl = "https://fakestoreapi.com/products";


    function getData() {
        axios.get(apiUrl).then((result) => {
            setProdotti(result.data);
            setShowedProducts(result.data);// qui si resetta l'arry al caricamento dell a pagina e elimina il filtr
            console.log("raw results", result.data);
            console.log("showedProducts", showedProducts);
            console.log("prodotti", prodotti);
        }).catch((error) => <p>Ops.. Qualcosa non va</p>)

    }

    const value = { prodotti, showedProducts, setShowedProducts, getData };
    return <DataContext.Provider value={value} >
        {children}
    </DataContext.Provider>
}

function useData() {
    const context = useContext(DataContext);
    return context;
}
export { DataProvider, useData }
