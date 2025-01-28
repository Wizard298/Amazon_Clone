import React from 'react'
import '../../css_part/imageSlide.css'
import img1 from '../../img_part/main.jpg'
import img2 from '../../img_part/main2.jpg'
import img3 from '../../img_part/main3.jpg'
import img4 from '../../img_part/main4.jpg'

function MainImg() {
  return (
    <>
        <div className="animation-slide">
          <figure>
            <div className="slide-img">
              <img className='silde-img-1' src={img1} alt="No Err"/>
            </div>
            <div className="slide-img">
              <img className='silde-img-1' src={img2} alt="No Err"/>
            </div>
            <div className="slide-img">
              <img className='silde-img-1' src={img3} alt="No Err"/>
            </div>
            <div className="slide-img">
              <img className='silde-img-1' src={img4} alt="No Err"/>
            </div>
          </figure>
        </div>
    </>
  )
}

export default MainImg
