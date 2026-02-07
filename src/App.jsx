import { BudgetProvider } from "./contexts/BudgetContext";

import { BrowserRouter, Routes, Route, } from "react-router-dom";

import DefaultLayout from './layouts/DefaultLayout';
import PageHome from "./pages/pageHome"
import PageChiSiamo from "./pages/pageChiSiamo"
import PageProdotti from "./pages/pageProdotti"
import PageProdottiDetail from "./pages/pageProdottiDetail"

function App() {


  return (<BudgetProvider>
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout} >
          <Route path='/' Component={PageHome} />
          <Route path='/chiSiamo' Component={PageChiSiamo} />
          <Route path='/prodotti' Component={PageProdotti} />
          <Route path='/prodotti/:id' Component={PageProdottiDetail} />
          {/* <Route path='*' Component={Page_Error} /> */}
          {/* Questa ultima rotta ci permette di aprire una pagina nel caso di indirizzi non specificati, tutti gli altri */}
        </Route>
      </Routes>
    </BrowserRouter>
  </BudgetProvider>
  )
}

export default App
