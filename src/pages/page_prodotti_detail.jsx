import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Product_detail() {
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
        let stars = oneStar;
        for (let i = 1; i < rates.rate; i++) {
            stars += oneStar;
        }
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
                            {/* {ratingStars()} */}
                            {rates.rate}
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                            <span> {rates.count}</span>
                        </div>
                        <p>{prodotto.description}</p>
                        <p>&euro; {prodotto.price}</p>
                    </div>
                </div>
                <div className='full_width flex ms_between navigationBtn'>
                    <button className={`btn ${id == 1 && "d_none"}`} onClick={() => navigate(`/prodotti/${parseInt(id) - 1}`)}>Vai al prodotto precedente</button>
                    <button className={`btn ${id == 20 && "d_none"}`} onClick={() => navigate(`/prodotti/${parseInt(id) + 1}`)}>Vai al prodotto successivo</button>
                </div>
            </div>
        </main>
    )
}

export default Product_detail