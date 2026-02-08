import { Link, NavLink } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";

function Header() {
    const { budgetMode, budgetValue } = useBudget();

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
                <button className="btn"  >{budgetMode ? "BudgetMode  ON" : "BudgetMode OFF"}</button>
                <div className="flex f_col ">
                    <label className="input labelMaxPrice" htmlFor="maxPrice">Prezzo massimo</label>
                    <input type="number" className="input maxPrice" min="0" step="1" name="maxPrice" id="maxPrice" placeholder="Prezzo massimo" onChange={budgetValue} />
                </div>
            </div>
        </nav >
    )
}
export default Header