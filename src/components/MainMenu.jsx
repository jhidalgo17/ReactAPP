import axios from "axios";
import { useEffect, useState } from "react";

export function MainMenu(props) {
    const [products, setProducts] = useState(null);

    function insertNewProd() {
        setProducts([
            ...products,
            {
                image: "https://dthezntil550i.cloudfront.net/u1/latest/u12108230856157280000169619/1280_960/4ab19acf-13cd-402c-a966-38f815c3c43f.png",
                name: "Pochita rechulon",
                description: "Esto es una descripción",
            },
        ]);
    }


    useEffect(() => {
        const productsAxios = axios
            .get("https://botw-compendium.herokuapp.com/api/v2/category/monsters")
            .then((res) => {
                console.log(res);
                setProducts(res.data.data);
            });
    }, []);

    return (
        <>
            <div class="card">
                <p>(User: {props.user.username})</p>
                <h5 class="card-header display-3">
                    THE LEGEND OF ZELDA: BREATH OF THE WILD
                </h5>
                <div class="card-body">
                    <h5 class="card-title display-5">ENEMIES</h5>
                    <div className="row">
                        <button onClick={insertNewProd}> INSERT NEW PRODUCT </button>
                    </div>
                    <div className="products d-flex flex-wrap">
                        {products &&
                            products.map((product, index) => (
                                <div class="card" style={{ width: "25%", height: "30vw" }}>
                                    <img src={product.image} class="card-img-top" />
                                    <div class="card-body" style={{ overflowY: "scroll" }}>
                                        <h5 class="card-title" style={{ textTransform: "uppercase" }}>{product.name}</h5>
                                        <p class="card-text">{product.description}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}