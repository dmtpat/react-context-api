
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout';
import Page_home from "./pages/page_home"
import Page_chiSiamo from "./pages/page_chiSiamo"
import Page_prodotti from "./pages/page_prodotti"
import Page_prodotti_detail from "./pages/page_prodotti_detail"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout} >
          <Route path='/' Component={Page_home} />
          <Route path='/chiSiamo' Component={Page_chiSiamo} />
          <Route path='/prodotti' Component={Page_prodotti} />
          <Route path='/prodotti/:id' Component={Page_prodotti_detail} />
          {/* <Route path='*' Component={Page_Error} /> */}
          {/* Questa ultima rotta ci permette di aprire una pagina nel caso di indirizzi non specificati, tutti gli altri */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
