import { Link, NavLink } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";

function Header() {
    const { budgetMode, toggleBudgetMode } = useBudget();

    return (
        <nav id="navBar" className="flex bg_light between v_center full_width">

            <Link className="logo link flex v_center" to="/">
                <img src="https://fakestoreapi.com/icons/logo.png" alt="e-commerce" />
                <span >E-commerce</span>
            </Link>

            <div id="navLinks" className="flex no_wrap">
                <NavLink className="link" to="/">Home</NavLink>
                <NavLink className="link" to="/chiSiamo">Chi Siamo</NavLink>
                <NavLink className="link" to="/prodotti">Prodotti</NavLink>
                <button className="btn" onClick={toggleBudgetMode} >{budgetMode ? "BudgetMode  ON" : "BudgetMode OFF"}</button>
            </div>
        </nav >
    )
}
export default Header