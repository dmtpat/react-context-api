import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { useBudget } from "../contexts/BudgetContext";
import { useData } from "../contexts/DataContext";

function PageProdottiDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [prodotto, setProdotto] = useState({});
    const [rates, setRates] = useState({});
    let apiUrl = `https://fakestoreapi.com/products/${parseInt(id)}`;
    const { budgetMode } = useBudget();
    const { showedProducts } = useData();

    function getData() {

        axios.get(apiUrl).then((result) => {
            setProdotto(result.data);
            console.log(result.data);
            console.log(result.data.rating);
            console.log(result.data.rating.rate);
            setRates(result.data.rating);
        }).catch((error) => {
            <p>Ops.. Qualcosa non va</p>
            navigate("/prodotti");
        })
    }

    useEffect(getData, [id]);

    function ratingStars() {
        const oneStar = <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />;
        const halfStar = <FontAwesomeIcon icon={faStarHalfStroke} style={{ color: "#FFD43B", }} />
        const stars = [];
        for (let i = 0; i < parseInt(rates.rate); i++) {
            stars.push(oneStar)
        }
        if (rates.rate > parseInt(rates.rate))
            stars.push(halfStar)

        return stars;
    }

    function chooseNavigation(id) {
        if (budgetMode) {
            const actualIndex = showedProducts.findIndex((prodotto) => prodotto.id == id)
            console.log("index su showedProducts", actualIndex);
            return (<>
                <button className={`btn ${actualIndex == 0 && "d_none"}`} onClick={() => navigate(`/prodotti/${showedProducts[actualIndex - 1].id}`)}>Prodotto budget precedente</button>
                <button className={`btn ${showedProducts[actualIndex + 1] == undefined && "d_none"}`} onClick={() => navigate(`/prodotti/${showedProducts[actualIndex + 1].id}`)}>Prodotto budget successivo</button>
            </>
            )
        } else {
            return (<>
                <button className={`btn ${id == 1 && "d_none"}`} onClick={() => navigate(`/prodotti/${parseInt(id) - 1}`)}>Vai al prodotto precedente</button>
                <button className={`btn ${id == 20 && "d_none"}`} onClick={() => navigate(`/prodotti/${parseInt(id) + 1}`)}>Vai al prodotto successivo</button>
            </>
            )
        }
    }

    return (
        <main>
            <div id='productDetail' className="boxed details">
                <h1 className='full_width'>{prodotto.title} </h1>
                <p className='category' >{prodotto.category}</p>
                <div className="flex">
                    <div className="half_width">
                        <img src={prodotto.image} alt={prodotto.title} />
                    </div>
                    <div className="half_width flex details_texts">
                        <div className="ratings">
                            {rates.rate}
                            {ratingStars()}
                            {/* <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} /> */}
                            <span> {rates.count}</span>
                        </div>
                        <p>{prodotto.description}</p>
                        <p>&euro; {prodotto.price}</p>
                    </div>
                </div>
                <div className='full_width flex between navigationBtn'>
                    {chooseNavigation(parseInt(id))}
                    {/* <button className={`btn ${id == 1 && "d_none"}`} onClick={() => navigate(`/prodotti/${parseInt(id) - 1}`)}>Vai al prodotto precedente</button>
                    <button className={`btn ${id == 20 && "d_none"}`} onClick={() => navigate(`/prodotti/${parseInt(id) + 1}`)}>Vai al prodotto successivo</button> */}
                </div>
            </div>
        </main>
    )
}

export default PageProdottiDetail