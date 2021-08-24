import React from 'react';
import './card.css';
import { categories } from "../helper/data";
import Item from '../item/Item';

const Card = () => {
    return(
       
        <div className='cards-area-container'>
            <h5 className='language-title'>Languages</h5>
        
            <div className='cards-container'>
        {categories.map((categEl, index) =>{
            return <Item card={categEl} key={index} />
        })}
            </div>
            </div>
           
    );
};
export default Card;