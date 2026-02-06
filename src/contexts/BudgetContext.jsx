// creazione del context 

import { createContext, useState, useContext } from "react";

const BudgetContext = createContext(null);

// export default BudgetContext;

// provider locale e utilities 

function BudgetProvider({ children }) {

    const defaultBudgetMode = false;

    //all'interno del provider creo uno state per il dato che dopbiamo utilizzare

    const [budgetMode, setBudgetMode] = useState(defaultBudgetMode);

    // adesso bisogna salòvare questi dati in un obj che sarà quello
    // che sarà effettivamente visibile da tutti

    const value = { budgetMode, setBudgetMode };

    return <BudgetContext.Provider value={value}>
        {children}
    </BudgetContext.Provider>
}

function useBudget() {
    const context = useContext(BudgetContext);
    return context;
}

export { BudgetProvider, useBudget }
