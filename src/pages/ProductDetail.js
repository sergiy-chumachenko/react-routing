import {useParams} from "react-router-dom/cjs/react-router-dom";


const ProductDetail = () => {
    const params = useParams();
    console.log(params.productId);
    return (
        <section>
            <h1>Product Detail</h1>
            <p>{params.productId}</p>
        </section>
    )
}

export default ProductDetail;