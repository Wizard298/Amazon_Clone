// import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import '../css_part/addToKartPage.css'
// import { useParams } from "react-router-dom";
// import axios from "axios";

function AddToKartPage() {
    // const [data, setData] = useState([]);
    // const { id } = useParams();

    // useEffect(() => {
    //     axios
    //       .get(`http://localhost:3500/allmedicines/${id}`)
    //       .then((res) => {
    //        // console.log(res.data.oneItem[0].name);
    //         setData(res.data.oneItem[0]);
    //       })
    //       .catch((err) => console.log(err));
    //   }, [id]);

    const location = useLocation();
    const {img, name, price} = location.state || {};

    console.log(img)
    console.log(name)
    console.log(price)


      const editStyle ={
        width: "35vw",
        padding: "13px",
        fontSize: "18px",
        marginTop: 51
      }

  return (
    <>
    
    <div className="addcart-page">
        <div className="addcart-img">
          {/* <img src='https://m.media-amazon.com/images/I/5159bBs2K4L._AC_SY200_.jpg' alt="Error"/> */}
          <div className="define-img">
            <img src={img} alt="Error"/>
          </div>
        </div>
        <div className="addcart-div">
          <div className="addcart-div-part1">
            {/* <h1 className="addtocart-heading">Name</h1> */}
            <h1 className="addtocart-heading">{name}</h1>
            <br />
            <p className="addtocart-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo non modi exercitationem eveniet natus reiciendis, necessitatibus, illo error iure aperiam fugit expedita eaque veniam consectetur reprehenderit vel est repudiandae! Inventore sequi nam laboriosam ut possimus!</p>
          </div>
          <div className="addcart-div-part2">
            {/* <h3 className="addtocart-price">Rs. Price</h3> */}
            <h3 className="addtocart-price">Rs. {price}</h3>
            <p className="addtocart-para">Inclusive of all taxes</p>
            <i>*This product cannot be returned for a refund or exchange</i>
            <br />
            <i>
              *Country of Origin: <b>India</b>
            </i>
            <br />
            <i>*Delivery Changes if applicable will be applied at checkout</i>
            <br />
            <button className="main-cart-btn-home edit-btn-home"
              style={editStyle}>
              Add to cart
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default AddToKartPage;