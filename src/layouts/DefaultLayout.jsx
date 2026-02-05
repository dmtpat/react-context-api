import { Outlet } from 'react-router-dom';
import Header from "../components/Header.components"
import Footer from "../components/Footer.components"

function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>)
}
export default DefaultLayout