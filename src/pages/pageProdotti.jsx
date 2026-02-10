import { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";
import { useData } from "../contexts/DataContext";

function PageProdotti() {
    const { prodotti, showedProducts, setShowedProducts, getData } = useData();

    const { budgetMode } = useBudget();

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
export default PageProdotti