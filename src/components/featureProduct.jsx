import { useProductContext } from "../context/productContext"
import { FeatureProductStyle } from "./componentStyle";
import Product from "./Product";

function FeatureProduct() {
    const { isLoading, featureProducts } = useProductContext();
    if (isLoading) {
        return <div>Loading.......</div>
    }

    return (
        <FeatureProductStyle className="section">
            <div className="container">
                <div className="intro-data">Check Now</div>
                <div className="common-heading">Our Feature  Product</div>
                <div className="grid grid-three-column">
                    {featureProducts.map((curElem) => {
                          return <Product key={curElem.id} {...curElem} />
                    })}
                </div>
            </div>

        </FeatureProductStyle>
    )
}

export default FeatureProduct