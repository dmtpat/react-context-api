import { useLocation } from 'react-router'

function PageHome() {
    const location = useLocation();
    function consoleTest() {
        console.log("location", location);
        console.log("splitted", location.pathname.split("/").length);
    }
    return (<main>
        <div className="boxed flex j_center v_center">
            <h1>Questa è la home page del mio e-commerce</h1>
        </div>
        <div className="full_width">
            <img className="jumbo full_width" src="https://fakestoreapi.com/icons/intro.svg" alt="" />
            {consoleTest()}
        </div>

    </main>
    )
}
export default PageHome