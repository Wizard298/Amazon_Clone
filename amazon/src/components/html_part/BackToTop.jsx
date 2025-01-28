import React from 'react'
import '../css_part/footer.css'

function BackToTop() {

    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"  // auto or smooth as well
        })
    }
    return (
        <>
        
        <div className="last" onClick={scrollUp}>
            Back to top
        </div> 
        
        </>
    )
}

export default BackToTop
