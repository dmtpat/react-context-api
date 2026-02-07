import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

function PageProdottiDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [prodotto, setProdotto] = useState({});
    const [rates, setRates] = useState({});
    let apiUrl = `https://fakestoreapi.com/products/${parseInt(id)}`;

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
                    <button className={`btn ${id == 1 && "d_none"}`} onClick={() => navigate(`/prodotti/${parseInt(id) - 1}`)}>Vai al prodotto precedente</button>
                    <button className={`btn ${id == 20 && "d_none"}`} onClick={() => navigate(`/prodotti/${parseInt(id) + 1}`)}>Vai al prodotto successivo</button>
                </div>
            </div>
        </main>
    )
}

export default PageProdottiDetail