import React from 'react'
import "../style/StarProduts.css"

const StarProducts = ({ StarProducts }) => {
    return (
        <div className='starProduct'>

            <div>
                <a href={StarProducts[0].url} >
                    <img src={StarProducts[0].image} alt="1st product" />
                </a>
            </div>

            <div>
                <a href={StarProducts[1].url}> <img src={StarProducts[1].image} alt="2nd product" /></a>
                <a href={StarProducts[2].url}><img src={StarProducts[2].image} alt="3rd product" /></a>
                <a href={StarProducts[3].url}><img src={StarProducts[3].image} alt="4th product" /></a>
            </div>



        </div>
    )
}

export default StarProducts
