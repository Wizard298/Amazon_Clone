import React, { useState, useEffect } from "react";
import '../../css_part/addToCart.css'
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function AddToCart(props) {
    const [define, setDefine] = useState({
        img: "",
        name: "",
        price: ""
    })
    
    // To Navigate
    const navigate = useNavigate();

    const fetchInformation = () =>{
        console.log("Clicked Successfully");
        // setDefine({
        //     img: props.img, 
        //     name: props.name, 
        //     price: props.price
        // });

        navigate("/addtocart", {
            state: {
                img: props.img || "https://m.media-amazon.com/images/I/5159bBs2K4L._AC_SY200_.jpg", 
                name: props.name || "MamaEarth", 
                price: props.price || 2000
            }
        });

        // To Update the previous value
        // console.log(define);

    }
    
    // useEffect(() => {
    //     console.log("Updated state:", define);
    // }, [define]);

    return (
        <>
            <div className="cart-container">
                <div className="cart-img-home" onClick={fetchInformation}>
                        <img
                            // src="https://m.media-amazon.com/images/I/31Mb8H21kAL._AC_SY200_.jpg"
                            src={props.img}
                            alt="Error"
                        />
                </div>
                <br />
                <div className="cart-type" style={{cursor: "pointer"}}  onClick={fetchInformation}>
                    <p className="cart-para-home">{props.name}</p>
                    {/* <p className="cart-italic-home">Description</p> */}
                    <div className="price-home">
                        <span className="cart-price-home">MRP: ₹{props.price}</span>
                        <br />
                        {/* <span className="cart-discount-home">Rs. Price</span> */}
                    </div>
                </div>
                <div className='edit-cart-btn-home'>
                    <button className="main-cart-btn-home">Add to cart</button>
                </div>
            </div>
        </>
    );
}

export default AddToCart;
