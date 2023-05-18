// Import necessary dependencies
import axios from "axios";
import { useEffect, useState } from "react";

// Define the MainMenu component
export function MainMenu(props) {
    // Declare state variable to hold the products
    const [products, setProducts] = useState(null);

    // Function to insert a new product
    function insertNewProd() {
        // Add a new product to the existing list of products
        setProducts([
            ...products,
            {
                image: "https://dthezntil550i.cloudfront.net/u1/latest/u12108230856157280000169619/1280_960/4ab19acf-13cd-402c-a966-38f815c3c43f.png",
                name: "Pochita rechulon",
                description: "Esto es una descripción",
            },
        ]);
    }

    // Fetch the products from an API using axios when the component mounts
    useEffect(() => {
        // Make an HTTP GET request to retrieve the products
        const productsAxios = axios
            .get("https://botw-compendium.herokuapp.com/api/v2/category/monsters")
            .then((res) => {
                console.log(res);
                // Store the retrieved products in the state
                setProducts(res.data.data);
            });
    }, []);

    // Render the MainMenu component
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
                        {/* Map through the products and render each product card */}
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
