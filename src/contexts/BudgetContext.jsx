// creazione del context 

import { createContext, useState, useContext } from "react";

const BudgetContext = createContext(null);

// export default BudgetContext;

// provider locale e utilities 

function BudgetProvider({ children }) {

    const defaultBudgetMode = null;

    //all'interno del provider creo uno state per il dato che dopbiamo utilizzare

    const [budgetMode, setBudgetMode] = useState(defaultBudgetMode);

    // creazione di una funzione toggle che va a modificare il valore dello state
    // budgetMode e che poi sarà inserità nell'obj value visibile in tutti i componenti
    function toggleBudgetMode() {
        setBudgetMode(!budgetMode);
    }
    //funzione che altera il valore di budget mode
    function budgetValue(e) {
        setBudgetMode(e.target.value);
    }

    // adesso bisogna salòvare questi dati in un obj che sarà quello
    // che sarà effettivamente visibile da tutti

    const value = { budgetMode, budgetValue };

    return <BudgetContext.Provider value={value}>
        {children}
    </BudgetContext.Provider>
}

function useBudget() {
    const context = useContext(BudgetContext);
    return context;
}

export { BudgetProvider, useBudget }
