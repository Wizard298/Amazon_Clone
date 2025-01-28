import React, { useEffect } from 'react'
import '../../css_part/main.css'
import Main1 from './Main1'
import Main2 from './Main2'
import Main3 from './Main3'
import Main4 from './Main4'
import Main5 from './Main5'
import Main6 from './Main6'
import Main7 from './Main7'
import Main8 from './Main8'
import Main9 from './Main9'
import Main10 from './Main10'
import Main11 from './Main11'
import Main12 from './Main12'
import Main13 from './Main13'
import Main14 from './Main14'
import MainImg from './MainImg'
import AddToCart from './AddToCart'
import { product1, product2 } from '../product';

function Main() {
  useEffect(()=>{
    product1.map((key) => {
      console.log(key.img);
      return null;
    })
  }, []);

  return (
    <>
        <div className="conti">
            {/* Image Component */}
            <MainImg/>

            {/* Multiple Component */}
            <Main1/>
            
            {/* Multiple Component */}
            <Main2/>
            
            <Main3/>
            
            <Main4/>
            
            <Main5/>
            
            {/* Multiple Component */}
            <Main6/>
            
            <Main7/>
            
            <Main8/>

            {/* Add To Cart Component */}
            <div className="main-images-deals">
              <div className='main-images-header'>
                  <h2 className='main-images-heading'>Today's Deals</h2>
                  <div className="main-images-link">
                          <a href="https://www.amazon.in">See all deals</a>
                  </div>
                </div>
              <div className="main-images">
                {product1.map(key => 
                  <AddToCart
                    img = {key.img}
                    name = {key.name}
                    price = {key.price}
                  />
                )}
              </div>
            </div>
            
            <Main9/>
            
            {/* Multiple Component */}
            <Main10/>
            
            <Main11/>

            {/* Multiple Component */}
            <Main12/>
            

            <Main13/>
            
            <Main14/>
            
            {/* Add To Cart Component */}
            <div className="main-images-deals">
              <div className='main-images-header'>
                  <h2 className='main-images-heading'>Today's Deals</h2>
                  <div className="main-images-link">
                          <a href="https://www.amazon.in">See all deals</a>
                  </div>
                </div>
              <div className="main-images">
                {product2.map(key => 
                  <AddToCart
                    img = {key.img}
                    name = {key.name}
                    price = {key.price}
                  />
                )}
              </div>
            </div>



        </div>
    </>
  )
}


export default Main;