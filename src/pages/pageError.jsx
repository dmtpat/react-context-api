import { useLocation } from 'react-router'

function PageError() {
    const location = useLocation();
    function consoleTest() {
        console.log("location", location);
        console.log("splitted", location.pathname.split("/"));
        console.log("splitted", location.pathname.split("/").length);
    }
    return (<main>
        <div className="boxed ">
            <h1>Errore ^.^ </h1>
            {consoleTest()}
            <br />
            <p>La pagina che stai cercando non esiste.... Ancora!</p>
        </div>
    </main>
    )
}
export default PageError