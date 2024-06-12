function ProductDetails(props) {
    return (<div>
        <p>Product Name: <b>{props.name}</b></p>
        <br></br>
        <p>Price: {props.price}</p>
        
    </div>)
}
export default ProductDetails;