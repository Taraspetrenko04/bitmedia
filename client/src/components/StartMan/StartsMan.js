import React from 'react';
import './style.scss';
import macbook from  '../../img/macbook.png';


export default function StartMan() {
    return(
        <section className='startMan'>
            <div className='startMan__container'>
                <h2 className='startMan__title'>Start Managing your apps business, more faster</h2>
                <p className='startMan__text'>Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without<br /> goal-oriented catalysts for change. Collaboratively.</p>
                <button className='startMan__button'>Learn more</button>
                <img className='startMan__mac' src={macbook} alt={macbook}></img>
            </div>
        </section>
    )
}