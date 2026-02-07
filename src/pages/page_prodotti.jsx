import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";

function Page_prodotti() {
    const { budgetMode } = useBudget();
    const [prodotti, setProdotti] = useState([]);
    const apiUrl = "https://fakestoreapi.com/products";
    const [showedProducts, setShowedProducts] = useState([]);

    function getData() {
        axios.get(apiUrl).then((result) => {
            setProdotti(result.data);
            setShowedProducts(result.data);
            console.log("raw results", result.data);
            console.log("showedProducts", showedProducts);
            console.log("prodotti", prodotti);
        }).catch((error) => <p>Ops.. Qualcosa non va</p>)

    }

    useEffect(getData, []);

    function productsShowed() {
        let _products = [...prodotti]
        if (budgetMode) {
            _products = prodotti.filter((product) => { return product.price <= 30 })
        }
        console.log("_products", _products)
        setShowedProducts(_products);
    }
    useEffect(productsShowed, [budgetMode]);

    return (
        <main className="boxed">
            <h1>Questi sono i nostri prodotti {budgetMode && "Budget"}</h1>
            <div className="card_container">
                {showedProducts.map((prodotto) => {
                    return (
                        <Link to={`/prodotti/${prodotto.id}`} className="card" key={prodotto.id} >
                            <img src={prodotto.image} alt="" />
                            <div className="marquee">
                                <h2>{prodotto.title}</h2>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}
export default Page_prodotti