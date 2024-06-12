import { useState } from "react";
import ProductDetails from "./ProductDetails";

function ProductList() {
    var [name, setName] = useState('');
    var [price, setPrice] = useState('');
    var [productList, setProductList] = useState([]);

    var addProduct = (e) => {
        e.preventDefault();
        // Update list
        var tempProduct = {
            name: name,
            price: price
        };
        setProductList([...productList, tempProduct]);
        console.log(tempProduct);
        setName("");
        setPrice(0);
    };

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={(e) => { addProduct(e) }}>
                <label>Name</label>
                <input required value={name} type="text" onChange={(e) => { setName(e.target.value) }} />
                <label>Price</label>
                <input required value={price} type="number" onChange={(e) => { setPrice(e.target.value) }} />
                <button type="submit">Submit</button>
            </form>
            <div>
                {productList.map((temp, index) => (
                    <ProductDetails key={index} name={temp.name} price={temp.price} />
                ))}
            </div>
        </div>
    );
}
export default ProductList;
